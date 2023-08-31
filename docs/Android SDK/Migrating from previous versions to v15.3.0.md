1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Android SDK](https://docs.bluedot.io/android-sdk/)
3.  Android migration guide from previous versions to Point SDK v15.3.0

Android migration guide from previous versions to Point SDK v15.3.0
===================================================================

The Bluedot Point SDK version 15.3.0 is a major rewrite of our API interfaces. It includes many updates, such as

*   a simpler and easier way to initialize with SDK, and
*   giving you more control on when to start & stop Geo-triggering/Tempo features.

This guide will help you migrate your code to Point SDK version 15.3.0

* * *

Update to authentication/initialization call
--------------------------------------------

The authentication call has been changed from:

```java
// Deprecated in 15.3.0
 public void sendAuthenticationRequest(String apiKey, ServiceStatusListener listener)
```

to
```java
public interface InitializationResultListener{
    void onInitializationFinished(@Nullable BDError error)
}
 
public void initialize(@NonNull String projectId,
     @NonNull InitializationResultListener resultListener)
```     

in addition, in order to receive Bluedot service error events post initialization, a class that implements [`BluedotServiceReceiver`](https://android-docs.bluedot.io/-bluedot-s-d-k/au.com.bluedot.point.net.engine/-bluedot-service-receiver/index.html?query=abstract%20class%20BluedotServiceReceiver%20:%20BroadcastReceiver) should be implemented and registered in the AndroidManifest:

```kotlin
 class ExampleBluedotServiceReceiver : BluedotServiceReceiver() {
     override fun onBluedotServiceError(error: BDError, context: Context) {
         // Handle error here.
     }
 }
 ```
 
 ```xml
 <application android:label\="@string/app\_name" \>
     <receiver
         android:name\="<path to your BluedotServiceReceiver implementation>"
         android:enabled\="true"
         android:exported\="false"
     \>
         <intent\-filter\>
             <action android:name\="io.bluedot.point.SERVICE" />
         </intent\-filter\>
     </receiver\>
 </application\>
```

### New/Updates in 15.3.0

*   Moving forward, `apiKey` will be replaced by `projectId`.
*   Any error in relation to initialization will be passed back via a completion callback. If the error is null, initialization was successful.

```kotlin
serviceManager.initialize("projectId", 
    (error) \-> {
         // Handle initialization result
});
```

*   `ServiceStatusListener` will be replaced by the combination of the `InitializationResultListener` and `BluedotServiceReceiver`
*   Bluedot SDK will not start triggering Geofeatures immediately as per the previous API. You will have to make the call explicitly to start/stop Geo-triggering.

* * *

Explicit calls to start & stop Geo-triggering feature
-----------------------------------------------------

In 15.3.0 SDK, we give more control to you on when to start and stop Geo-triggering features. To start triggering Geofeatures, you will need to explicitly call the API.

### Notes:

*   Stopping Geo-triggering feature has the intended effect of stopping location services on the device, thereby conserving battery on your user’s device unless another feature such as Tempo, is active.
*   Once you’ve stopped the `GeoTriggeringService`, the SDK will stop tracking the device. The deprecated `logout()` method is no longer needed, the SDK will be initialized only once.

```
 interface GeoTriggeringStatusListener {
     void onGeoTriggeringResult(@Nullable BDError error)
 }
 
 
 /\* GeoTriggeringService class is used to use GeoTriggering feature
 from Bluedot Point SDK which includes reporting zone entry and exit events.
 Its builder can be used to start and stop GeoTriggering with/without 
 Foreground notification.
 Here:
 notificationId: Id used to display Foreground Notification to user (if any)
 notification: Notification with Message to used to start Geotrigger as foreground
 service (if any)
 start: is called to start GeoTriggering
 \*/
 
 GeoTriggeringService.builder()
         .notificationId(notificationId: Int) 
         .notification(notificationWithTitle: Notification)
         .start(context: Context, 
             geoTriggeringStatusListener: GeoTriggeringStatusListener)
 
 // To stop GeoTriggering
 GeoTriggeringService.stop(context: Context)
 
 // To query status of Geotrigger
 GeoTriggeringService.isRunning()
```

Receiving Geo-trigger events
----------------------------

In previous versions of the Point SDK, you would have implemented the `ApplicationNotificationListener` to receive Fence triggers callbacks. In the new version of the Point SDK, you need to implement `GeoTriggeringEventReceiver` as a new class to receive Geo-triggering related callbacks and declare it in AndroidManifest.

```kotlin
class ExampleGeoTriggerReceiver : GeoTriggeringEventReceiver() {
    override fun onZoneInfoUpdate(zones: List<ZoneInfo\>, context: Context) {
       //zones list from Rule Download
    }
 
    override fun onZoneEntryEvent(entryEvent: ZoneEntryEvent, context: Context) {
       //Zone Entry event details for Checkin
    }
 
    override fun onZoneExitEvent(exitEvent: ZoneExitEvent, context: Context) {
       //Zone Exit event details for Checkout
    }
 }
 ```
 
 ```xml
 <application android:label\="@string/app\_name" \>
    <receiver
        android:name\="<path to your GeoTriggeringEventReceiver implementation>"
        android:enabled\="true"
        android:exported\="false"
    \>
        <intent\-filter\>
            <action android:name\="io.bluedot.point.GEOTRIGGER" />
        </intent\-filter\>
    </receiver\>
 </application\>
 ```

### Update in 15.3.0

*   `ApplicationNotificationListener` & `ServiceStatusListener` will be deprecated.  
    You may find most of the features migrated to either `GeoTriggeringEvenTReceiver` or `BluedotServiceReceiver`
*   Moving forward, beacons related callbacks will no longer be supported. You may continue to use the deprecated delegate `ApplicationNotificationListener` to receive beacon related callbacks.
*   Zone infos will now only be downloaded after Geo-triggering Start API is called.

* * *

Updates to Tempo API
--------------------

The Start Tempo API call has changed from

```java
// Deprecated in 15.3.0
 public void startTempoTracking(@NonNull String destinationId,
 @NonNull TempoStatusListener statusListener)
 
 public void stopTempoTracking()
```

to

```kotlin
 interface TempoStatusListener {
     fun onTempoResult(error: BDError?) 
 }
 
 /\* TempoService class is used to use Tempo feature from the Bluedot
 Point SDK which includes reporting tempo update and tempo stop events on a 
 defined interval.
 It has a builder which can be used to start and stop Tempo
 Here:
 notificationId: Id used to display Foreground Notification to user(if any)
 notification: Notification with Message to used to start Tempo as foreground
 service(Required)
 destinationId: DestinationId of Zone to start Tempo (Required)
 start: is called to start Tempo
 \*/
 
 TempoService.builder()
         .notificationId(myNotificationId) // If running a foreground service
         .notification(notificationReference) // As above
         .destinationId(destId: String)
         .[start](context: Context,statusListener: TempoStatusListener)
 
 // To stop Tempo TempoService.stop(context: Context)
 
 // To query status of Tempo
 TempoService.isRunning(context: Context)
 ```

In order to receive any error events during Tempo, a class that implements `TempoTrackingReceiver` should be implemented and registered in the AndroidManifest:

``` kotlin
 class ExampleTempoReceiver : TempoTrackingReceiver() {
     //Called when there is an error that has caused Tempo to stop
     override fun tempoStoppedWithError(error: BDError, context: Context) {
         //error during Tempo }
 }
 ```
 
 ```xml
 <application android:label="@string/app\_name" \>
     <receiver
         android:name="<path to your TempoTrackingReceiver implementation>"
         android:enabled="true"
         android:exported="false"
     \>
         <intent\-filter\>
             <action android:name="io.bluedot.point.TEMPO" />
        </intent\-filter\>
     </receiver\>
 </application\>
 ```