Geo-triggering
========================

Geo-triggering allows the automatic detection of location context change events (such as entering or exiting a geofence, or crossing a Geoline™). For this capability, the SDK needs to be initialized and the app must have location permission.

Start Geo-triggering
--------------------

To start geo-triggering, you should use the `GeoTriggeringBuilder` .

### Android

On android, you can run geo triggering in foreground or background mode.

### Foreground mode:

Starting geo-triggering on foreground mode would require notification permissions. From Android 13, you have to request user for notification permissions.

To run geo triggering on foreground mode, you have to set notification details as below. If any of the parameters below are null or blank (except for `androidNotificationId`), geo-triggering will start on background mode.

| **Parameter**                | **Type** | **Description**                          |
|------------------------------|----------|------------------------------------------|
| `channelId`                  | String?  | The channel id of the notification..     |
| `channelName`                | String?  | The channel name of the notification.    |
| `androidNotificationTitle`   | String?  | The title of the notification.           |
| `androidNotificationContent` | String?  | The content of the notification.         |
| `androidNotificationId`      | Int?     | The notification Id of the notification. |

```dart
String channelId = 'Your channel Id';
String channelName = 'Your channel Name';
String androidNotificationTitle = 'Your notification title';
String androidNotificationContent = 'Your notification content';
int androidNotificationId = 123; // Will be -1 by default if set to null. BluedotPointSdk.instance.geoTriggeringBuilder()
   .androidNotification(channelId, channelName, androidNotificationChannel, androidNotificationContent, androidNotificationId)
   .start().then((value) { 
   //Handle geo triggering started successfully 
   debugPrint('Geo-triggering has been started'); 
}).catchError((error) { 
  //Handle error when start geo-triggering 
  debugPrint('Failed to start geo-triggering. Error $error'); 
});
```

#### _Background mode:_
```dart
BluedotPointSdk.instance.geoTriggeringBuilder().start().then((value) {
  //Handle geo triggering started successfully
 debugPrint('Geo-triggering has been started');
}).catchError((error) {
   //Handle error when start geo-triggering
 debugPrint('Failed to start geo-triggering. Error $error');
});
```

### iOS

Either of the methods above would start geo-triggering in iOS.

Receiving Geo-trigger events
----------------------------
:::info
As Entry events may occur immediately upon staring Geo-triggering, it is recommended ed to subscribe to the events before starting the Geo-triggering service.
:::

```dart
// Listen to Geo-triggering events
final geoTriggeringEventChannel = MethodChannel(BluedotPointSdk.geoTriggering); 

geoTriggeringEventChannel.setMethodCallHandler((MethodCall call) async {
 var args = call.arguments; 
 switch (call.method) { 
 case GeoTriggeringEvents.onZoneInfoUpdate: 
    debugPrint('On Zone Info Update: $args'); 
    break; 
 case GeoTriggeringEvents.didEnterZone: 
    debugPrint('Did Enter Zone: $args'); 
    break; 
 case GeoTriggeringEvents.didExitZone: 
    debugPrint('Did Exit Zone: $args'); 
    break; 
 default: 
    break; 
 }
});

// Then start geo triggering service
...
```

Stop Geo-triggering
-------------------

If you only need geo-triggering for a limited period, once that period is over, you can stop the geo-trigger service.
```dart
BluedotPointSdk.instance.stopGeoTriggering().then((value) {
  // Successfully stop geo triggering
  debugPrint('Geo-triggering has been stopped');
}).catchError((error) {
  // Failed to stop geo triggering, handle error in here
  debugPrint('Failed to stop geo triggering. Error $error');
});
```

Geo-triggering Status
---------------------

You can use the `isGeoTriggeringRunning` method to check the status of the Geo-triggering service. It will return a boolean value.
```dart
BluedotPointSdk.instance.isGeoTriggeringRunning().then((value) {
  setState(() {
    debugPrint('Is Geo Running: $value');
  });
});
```

Example
-------
```dart
import 'package:bluedot_point_sdk/bluedot_point_sdk.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  // The SDK needs be initialized and the app must have location permissions.
  var _isGeoTriggeringRunning = false;

  @override
  void initState() {
    super.initState();
    // Listen to geo triggering event from geo triggering event channel
    final geoTriggeringEventChannel = MethodChannel(BluedotPointSdk.geoTriggering);
    
    geoTriggeringEventChannel.setMethodCallHandler((MethodCall call) async {
      var args = call.arguments;
      switch (call.method) {
        case GeoTriggeringEvents.onZoneInfoUpdate:
          debugPrint('On Zone Info Update: $args');
          break;
        case GeoTriggeringEvents.didEnterZone:
          debugPrint('Did Enter Zone: $args');
          break;
        case GeoTriggeringEvents.didExitZone:
          debugPrint('Did Exit Zone: $args');
          break;
        default:
          break;
      }
    });
  }

 void _startGeoTriggering() {
    String channelId = 'Your channel Id'; 
    String channelName = 'Your channel Name'; 
    String androidNotificationTitle = 'Your notification title'; 
    String androidNotificationContent = 'Your notification content'; 
    int androidNotificationId = 123; // Will be -1 by default if set to null. BluedotPointSdk.instance.geoTriggeringBuilder() 
     .androidNotification(channelId, channelName, androidNotificationChannel, androidNotificationContent, androidNotificationId) 
     .start().then((value) { 
        //Handle geo triggering started successfully 
        debugPrint('Geo-triggering has been started'); 
     }).catchError((error) { 
        //Handle error when start geo-triggering 
        debugPrint('Failed to start geo-triggering. Error $error'); 
     });
 }

 void _stopGeoTriggering() {
   BluedotPointSdk.instance.geoTriggeringBuilder().start().then((value) {
     //Handle geo triggering started successfully
     debugPrint('Geo-triggering has been started');
   }).catchError((error) {
     //Handle error when start geo-triggering
     debugPrint('Failed to start geo-triggering. Error $error');
   });
 }

 void _updateGeoTriggeringStatus() {
    BluedotPointSdk.instance.isGeoTriggeringRunning().then((value) {
      setState(() {
        _isGeoTriggeringRunning = value;
      });
    });
 }

  @override
  Widget build(BuildContext context) {
    return Column(
        children: [
          Text('Is Geo Triggering Running: $_isGeoTriggeringRunning'),
          ElevatedButton(onPressed: _startGeoTriggering, child: const Text('Start Geo-triggering')),
          ElevatedButton(onPressed: _stopGeoTriggering, child: const Text('Stop Geo-triggering')),
          ElevatedButton(onPressed: _updateGeoTriggeringStatus, child: const Text('Update Geo-triggering status')),
        \],
      );
  }
}
```