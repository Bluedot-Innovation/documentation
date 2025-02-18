---
pagination_next: Chat AI/Reference
pagination_prev: Chat AI/iOS Guide
---

# Android Guide

This page covers how to integrate **Rezolve Commerce Brain** in your Android app using the **Point SDK**. You’ll learn about the key classes, how to create and manage chat AI sessions, and how to handle real-time responses.

### Prerequisites

- **Android API level 26+**
- The Rezolve AI integration is already configured in your project

### Creating a Chat Session

After you’ve set up the Point SDK, you can create new chat sessions at any point by accessing `BrainAI` through `ServiceManager`:

```kotlin
val brainAI = ServiceManager.getInstance(context).brainAI
val chat = brainAI?.createNewChat()

```

Every chat session has a unique `sessionID` in URN format (e.g., `urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d`).

If you need to retrieve an existing session:

```kotlin
val existingChat = brainAI?.getChatWithSessionID("urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d")
```

And when you’re done:

```kotlin
brainAI?.closeChatWithSessionID("urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d")
```

### Sending Messages & Receiving Streaming Responses

With a `Chat` object, you can send messages to **Rezolve Commerce Brain** and receive chunks of responses as they’re generated. The response stream is represented by `StreamingResponseDto` objects.

#### Kotlin

A coroutine-based approach is recommended for asynchronous operations, preventing blocking the main thread.

```kotlin
// Use an appropriate coroutine scope (e.g., viewModelScope or a custom scope)
launch(Dispatchers.IO) {
    try {
        val responseStream = chat?.sendMessage("Tell me about the latest deals")
        responseStream?.forEach { chunk ->
            // Each chunk in the partial response
            println("Chunk received: ${chunk.response}")
        }
    } catch (e: Exception) {
        // Handle network or streaming errors
        println("Error: ${e.localizedMessage}")
    }
}

```

#### Java

If you’re using Java, you can handle the response stream using either Java 8+ streams or a callback-based approach:

```java
try {
    // Potentially run on a background thread
    Stream<StreamingResponseDto> streamOfResponses =
        (Stream<StreamingResponseDto>) chat.sendMessage("Tell me about the latest deals", new CustomContinuation<Stream<StreamingResponseDto>>());

    streamOfResponses.forEach(responseChunk -> {
        System.out.println("Chunk received: " + responseChunk.getResponse());
    });

} catch (Exception e) {
    // Handle errors
    e.printStackTrace();
}

```

If you prefer callbacks, you can define a custom interface that’s invoked each time a new chunk of data arrives, similar to the closure approach on iOS.

### Best Practices

- **Session Persistence**: Keep the same `Chat` session for a single conversation flow to maintain context.
- **Error Handling**: Network or streaming errors can occur.
- **User Experience**: Consider updating your UI as chunks arrive for a more dynamic and responsive experience.