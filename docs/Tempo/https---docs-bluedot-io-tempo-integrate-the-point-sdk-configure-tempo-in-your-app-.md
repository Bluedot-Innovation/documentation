1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Tempo: Integration & User Guide](https://docs.bluedot.io/tempo/)
3.  Integrate the Point SDK & configure Tempo in your app

Integrate the Point SDK & configure Tempo in your app
=====================================================

To get started with Tempo, you’ll first need to integrate the Point SDK in your mobile app. You can find step-by-step integration guides here:

*   [Android integration](https://docs.bluedot.io/android-sdk/)
*   [iOS integration](https://docs.bluedot.io/ios-sdk/)

During SDK integration, there are 4 important stages that align with your customer’s experience.

1.  Set the Custom Event Metadata to be attached with each Tempo Event – this is usually at least the customer’s name and orderID, but you can add up to 20. ([Learn more here.](https://docs.bluedot.io/custom-event-metadata/))
2.  Define the DestinationId – this is where the customer is collecting their order. You can use anything, but we recommend using the normal Store Number or Restaurant ID.
3.  Start location tracking & the Tempo service when your customer submits their order.
4.  Stop location tracking & the Tempo service once your customer arrives at their Destination.

Android – Tempo implementation
------------------------------

/\*\*
 \* Start Tempo Tracking.
 \* @param destinationId - destinationId of the Zone for tracking.
 \* @param statusListener - implementation of Tempo status callbacks to receive Tempo lifecycle events and errors.
\*/
public void startTempoTracking(@NonNull String destinationId,
 @NonNull TempoStatusListener statusListener)

/\*\*
 \* Stop Tempo Tracking
 \* TempoStatusListener#tempoStopped() will be called once tracking has ceased.
\*/
public void stopTempoTracking()

You’ll find comprehensive [Android implementation detail here](https://docs.bluedot.io/android-sdk/android-tempo/).

iOS – Tempo implementation
--------------------------

/\*\*
 \* Start Tempo Tracking for destination id provided
 \*
 \* @note An error will be returned if your App does not have **Always** location permission.
 \* @param destinationId The destinationId to be tracked
 \* @param completion A mandatory completion handler called once Start Tempo processing completed. If the Tempo is started successful, error will be returned as nil. However, if the Start Tempo fails, an error will be provided.
\*/
\- (void)startTempoTrackingWithDestinationId: (NSString \* \_Nonnull)destinationId  completion: (void (^ \_Nonnull)(NSError \*  \_Nullable error)) completion;

/\*\*
 \* Stop Tempo Tracking
 \*
 \* @param completion A mandatory completion handler called once Stop Tempo processing completed. If the Tempo is stopped successful, error will be returned as nil. However, if the Start Tempo fails, an error will be provided.
\*/
\- (void)stopTempoTrackingWithCompletion: (void (^ \_Nonnull)(NSError \*  \_Nullable error)) completion;

You’ll find comprehensive [iOS implementation detail here](https://docs.bluedot.io/ios-sdk/ios-tempo/).

### Important Note

In iOS, to receive Tempo related callbacks, implement the [BDPTempoTrackingDelegate](https://ios-docs.bluedot.io/Protocols/BDPTempoTrackingDelegate.html) protocol

![image](https://docs.bluedot.io/wp-content/uploads/2021/07/info.png)

Tempo will **timeout after 30 minutes** if the device hasn’t arrived at the destination. This expiring time is customizable; check with your CX representative if you’d like to update it.