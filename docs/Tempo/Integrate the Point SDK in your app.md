Integrate the Point SDK & configure Tempo in your app
=====================================================

To get started with Tempo, you’ll first need to integrate the Point SDK in your mobile app. You can find step-by-step integration guides here:

*   [Android integration](../Point%20SDK/Android/Quick%20Start.md)
*   [iOS integration](../Point%20SDK/iOS/Quick%20Start.md)

During SDK integration, there are 4 important stages that align with your customer’s experience.

1.  Set the Custom Event Metadata to be attached with each Tempo Event – this is usually at least the customer’s name and orderID, but you can add up to 20. ([Learn more here.](../Custom%20Event%20Metadata.md))
2.  Define the DestinationId – this is where the customer is collecting their order. You can use anything, but we recommend using the normal Store Number or Restaurant ID.
3.  Start location tracking & the Tempo service when your customer submits their order.
4.  Stop location tracking & the Tempo service once your customer arrives at their Destination.

Android – Tempo implementation
------------------------------

***Start Tempo Tracking***

```kotlin
TempoService.builder()
        .notificationId(myNotificationId)
        .notification(notificationReference)
        .destinationId("myDestinationId")
        .start(myApplicationContext, // This context should be the Application context
            (error) -> {
                if (error != null) {
                    // An error has occurred while starting Tempo.
                } else {
                    // Tempo has started successfully.
                }
            })
```

***Stop Tempo Tracking***

```kotlin
val tempoStopError: BDError? = TempoService.stop(myContext)
if (tempoStopError != null) {
    // An error occurred, the SDK or Tempo may not have been initialized correctly.
}
```

You’ll find comprehensive [Android implementation detail here](../Point%20SDK/Android/Tempo.md).

iOS – Tempo implementation
--------------------------

***Start Tempo Tracking***
```swift
BDLocationManager.instance()?.startTempoTracking(withDestinationId: "MyDestinationId"){ error in
    guard error == nil else {
        print("There was an error starting Tempo with the Bluedot SDK: \(error.localizedDescription)")
        return
     }
 }
```

***Stop Tempo Tracking***
```swift
BDLocationManager.instance()?.stopTempoTracking(){ error in
     guard error == nil else {
        print("Stop Tempo failed \(error.localizedDescription)")
        return
     }
 }
```

You’ll find comprehensive [iOS implementation detail here](../Point%20SDK/iOS/Tempo.md).

### Important Note

:::info
Tempo will **timeout after 30 minutes** if the device hasn’t arrived at the destination. This expiring time is customizable; check with your CX representative if you’d like to update it.
:::