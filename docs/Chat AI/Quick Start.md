---
pagination_next: Chat AI/iOS Guide
pagination_prev: Chat AI/Overview
---

# Quickstart

This guide shows you how to quickly integrate Rezolve AI into your existing Point SDK setup. By the end of this section, you’ll be able to send a message to the Rezolve AI and receive a streaming response on both iOS and Android.

### Prerequisites

- **Rezolve AI Account:** You must have an account to access the Rezolve Commerce Brain. To learn more or sign up, visit [Rezolve’s website](https://rezolve.com/commerce/).
- **Integration Activated in Canvas:** Ensure the Rezolve AI integration is enabled in Canvas. Check the [Rezolve AI Integration](../integrations/Rezolve%20AI.md) documentation for more details.
- **Point SDK** properly set up in your project
- **iOS 15.0+** or **Android API Level 26+**
- **Project ID** (API key) already configured in the Point SDK’s global config

### 1. Initialise the Point SDK

**Swift (iOS)**

```swift
// iOS: Import the Point SDK and initialize
BDLocationManager.instance().initialize(projectID: "YourProjectID)
```

**Kotlin (Android)**

```kotlin
// Import the Point SDK and initialize
ServiceManager.getInstance(context).initialize("YourProjectID")
```

### 2. Create a New Chat Session

Once initialized, you can create a new chat session via the `brainAI` object. This session is where you’ll send messages and receive real-time responses.

**Swift (iOS)**

```swift
let chat = BDLocationManager.instance().brainAI.createNewChat()
// The chat object comes with a unique sessionID (e.g., urn:uuid:...)
```

**Kotlin (Android)**

```kotlin
val brainAI = ServiceManager.getInstance(context).brainAI
val chat = brainAI?.createNewChat()
```

### 3. Send a Message and Receive Streaming Responses

Messages sent to the Rezolve AI return a stream of responses. Depending on your platform, you can handle these asynchronously using Swift’s `async/await` or Kotlin coroutines.

**Swift (iOS)**

```swift
do {
    let stream = try await chat.sendMessage("Tell me about my nearest store")
    for try await response in stream {
        // Each chunk in the response stream
        print("Received chunk: \(response.response)")
    }
} catch {
    // Handle errors
}
```

**Kotlin (Android)**

```kotlin
launch(Dispatchers.IO) {
    try {
        chat?.sendMessage("Tell me about my nearest store")?.forEach { chunk ->
            println("Received chunk: ${chunk.response}")
        }
    } catch (e: Exception) {
        // Handle errors
    }
}
```

### Next Steps

- **iOS Guide:** Explore session management details, alternative callback patterns, and best practices.
- **Android Guide:** Delve into coroutines, Java support, and deeper integration examples.
- **Reference:** See the complete set of classes (e.g., `BrainAI`, `Chat`, `StreamingResponseDto`) and their properties.