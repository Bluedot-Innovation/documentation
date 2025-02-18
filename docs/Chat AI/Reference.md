---
pagination_next: null
---

# Reference

### BrainAI

Manages chat sessions with **Rezolve AI**. Lives as a property on either `BDLocationManager` (iOS) or `ServiceManager` (Android).

**iOS**

```swift
let brainAI = BDLocationManager.instance.brainAI
```

**Android**

```kotlin
val brainAI = ServiceManager.getInstance(context).brainAI
```

**Public Methods**

| Method | Description |
| --- | --- |
| `createNewChat()` | Creates a new `Chat` session and returns the object. |
| `getChatWithSessionID(sessionID: ...)` | Retrieves an existing `Chat` session by its unique identifier. |
| `closeChatWithSessionID(sessionID: ...)` | Closes (removes) a given `Chat` session to free resources. |

### Chat

Represents a single chat session. Responsible for sending messages and receiving real-time (streaming) responses.

**Public Methods**

| Method | Platform | Description |
| --- | --- | --- |
| `sendMessage(message: String)` | iOS | Sends a message; returns an `AsyncThrowingStream<StreamingResponseDto, Error>`. A closure-based version is also available for earlier iOS versions. |
| `sendMessage(message: String)` | Android | Sends a message in Android; returns a `Sequence` (Kotlin) or `Stream` (Java) of `StreamingResponseDto`. |

**Public Properties**

| Property | Type | Description |
| --- | --- | --- |
| `sessionID` | String | Unique session identifier (e.g., `urn:uuid:9a652678-4616-475d-af12-aca21cfbe06d`). |
| `userID` | String | Defaults to an installation reference. Useful for tracking which user initiated the chat. |
| `language` | String | Defaults to `"English"`. Set this to customise the language context for your queries. |

### StreamingResponseDto

A wrapper for each partial chunk of the chat’s streaming response.

**Public Properties**

| Property | Type | Description |
| --- | --- | --- |
| `response` | String | The text content of the current response chunk. |
| `responseID` | String | Unique identifier for the response chunk (if needed). |
| `contexts` | Array of `BDStreamingResponseDtoContext` (Android) or `ChatContext` (iOS)  | List of additional context objects. |
| `streamType` | Integer | Indicates the type of stream chunk ( `1` = `CONTEXT`, `2` = `RESPONSE_TEXT`, `3` = `RESPONSE_IDENTIFIER`). |

### Contexts in `StreamingResponseDto`

A critical feature of **Rezolve AI** is its ability to return **contextual** product information alongside the text response. This is especially useful when building digital shopping experiences, allowing the model to reference specific items, categories, or merchants in real time.

### iOS: `ChatContext`

When you receive a context chunk on iOS, you’ll typically deal with an array of `ChatContext` objects. Each object provides details about a product or item that matches the user’s query.
****

**Public Properties**

| Property | Type | Description |
| --- | --- | --- |
| **title** | `String` | Product or suggestion title. |
| **imageLinks** | `[URL]` | List of product/category image URLs. |
| **price** | `NSNumber` | Price of the product. |
| **contextDescription** | `String` | A descriptive text for the product or suggestion. |
| **merchantID** | `NSNumber` | Merchant identifier. |
| **categoryID** | `NSNumber` | Category identifier. |
| **productID** | `NSNumber` | Product identifier, which you can link to your backend. |

#### Android: `BDStreamingResponseDtoContext`

On Android, context chunks are represented by `BDStreamingResponseDtoContext` objects.

**Public Properties**

| Property | Type | Description |
| --- | --- | --- |
| **title** | `String` | Product or suggestion title, if available. |
| **image_links** | `Array<String>` | List of image URLs related to the product or category. |
| **price** | `Double` | Product price. |
| **description** | `String` | Text describing the product or suggestion. |
| **merchant_id** | `Int` | Merchant identifier. |
| **category_id** | `Int` | Category identifier. |
| **product_id** | `Int` | Product identifier for linking to your database or backend systems. |

#### How Contexts Are Used

1. **Product Listing or Recommendations**
    If the AI determines the user is asking about a product or category, it can return one or more **Context** entries, each describing an item that matches the user’s query.
    
2. **Dynamic UI Updates**
    Use the context data to display product cards, images, prices, and other attributes in real time. For instance, you might show a carousel of recommended items based on the user’s latest question.
    
3. **Cross-Referencing**
    The `merchant_id`, `category_id`, and `product_id` fields can tie back into your app’s internal product catalog. This way, when a user selects a product from the AI’s suggestion, you can seamlessly transition to a product details page or add it to a shopping cart.