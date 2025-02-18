---
pagination_next: Chat AI/Android Guide
pagination_prev: Chat AI/Quick Start
---

# iOS Guide

This page walks you through integrating **Rezolve Commerce Brain** with your iOS app and covers creating chat AI sessions, and handling real-time responses.

### Prerequisites

- **iOS 15.0+**
- The Rezolve AI integration is already configured in your project

## Creating a Chat Session

You can create a new chat session at any time through the `brainAI` instance on `BDLocationManager`:

```swift
// Grab the BrainAI instance from BDLocationManager
let brainAI = BDLocationManager.instance.brainAI

// Create a new chat session
let chat = brainAI.createNewChat()

```

Each session has a unique `sessionID` in URN format (e.g., `urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d`).

If you need to reference an existing session:

```swift
let existingChat = brainAI.getChatWithSessionID("urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d")

```

When you’re done with a session, you can close it to free up resources:

```swift
brainAI.closeChatWithSessionID("urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d")

```

### Sending Messages & Receiving Streaming Responses

Once you have a `Chat` object, you can send messages to **Rezolve Commerce Brain**. The responses arrive as a stream of **StreamingResponseDto** objects, each representing a partial chunk of the final answer.

#### Option 1: Swift Concurrency (async/await)

Best for projects targeting iOS 15.0 or later:

```swift
do {
    let responseStream = try await chat.sendMessage("What promotions are available today?")

    // responseStream is an AsyncThrowingStream<StreamingResponseDto, Error>
    for try await chunk in responseStream {
        // Each chunk is a partial response
        print("Chunk received: \(chunk.response)")
    }
} catch {
    // Handle any network or streaming errors
    print("Error: \(error.localizedDescription)")
}

```

#### Option 2: Closures

If your deployment target is below iOS 15 or you prefer a closure-based approach:

```swift
chat.sendMessage("Any recommended products?", completion: { streamingResponseDto, error in
    if let error = error {
        print("Error: \(error.localizedDescription)")
        return
    }

    if let dto = streamingResponseDto {
        print("Chunk received: \(dto.response)")
    }
})

```

### Best Practices

- **Reuse Chat Sessions**: Keep a single chat session open for an ongoing conversation to maintain context.
- **Error Handling**: Watch for network errors or timeouts during streaming.
- **User Experience**: Consider displaying responses in real time as chunks arrive for a more engaging conversation flow.