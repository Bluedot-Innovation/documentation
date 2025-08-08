Tempo
===============

Tempo allows active tracking of a user’s location, as well as live ETA estimation.

Start Tempo
-----------

For this capability, the SDK needs to be initialized and the app must have location permission. You also need Tempo to be enabled for your Rezolve Account and can see the Tempo section in the Projects List page of your Canvas account. If that is not visible and you want to use this capability, please contact your Rezolve CX representative.

### For Android a [foreground service notification](../Android/Location%20Permission%20&%20Notifications%20Best%20Practices.md) is also required.

Tempo also requires Destination IDs to be defined, which [you can learn about here](../../Tempo/Create%20your%20destinations.md).

To start tempo on foreground mode, you have to set notification details as below.

| **Parameter**                | **Type** | **Description**                          |
|------------------------------|----------|------------------------------------------|
| `channelId`                  | String?  | The channel id of the notification..     |
| `channelName`                | String?  | The channel name of the notification.    |
| `androidNotificationTitle`   | String?  | The title of the notification.           |
| `androidNotificationContent` | String?  | The content of the notification.         |
| `androidNotificationId`      | Int?     | The notification Id of the notification. |

And start Tempo by using the `TempoBuilder` class as below:

```dart
String destinationId = 'Your destination Id';String channelId = 'Your channel Id';
String channelName = 'Your channel Name';
String androidNotificationTitle = 'Your notification title';
String androidNotificationContent = 'Your notification content';
int androidNotificationId = 123; // Will be -1 by default if set to null. 

BluedotPointSdk.instance.tempoBuilder() 
  .androidNotification(channelId, channelName, androidNotificationTitle, androidNotificationContent, androidNotificationId) 
  .start(destinationId).then((value) { 
    // Successfully started tempo tracking 
    debugPrint('Tempo has been started successfully'); 
  }).catchError((error) { 
    // Failed to start tempo tracking, handle error here 
    debugPrint('Failed to start tempo. Error $error'); 
  });
```

Receiving Tempo events
----------------------

The Tempo service issues events during normal operation to provide real-time updates through the Point SDK via callbacks. These events, such as tempoTrackingDidUpdate, deliver details like ETA and destination information directly to the SDK. Tempo webhooks can also be used to receive ETA updates, allowing for flexible integration options through the Canvas dashboard.

You can listen to receive the Tempo events as below.

```dart
const tempoEventChannel = MethodChannel(BluedotPointSdk.tempo);
tempoEventChannel.setMethodCallHandler((MethodCall call) async {
  var args = call.arguments;
  switch (call.method) {
    case TempoEvents.tempoTrackingDidUpdate:
      // Handle ETA update event
    case TempoEvents.tempoTrackingStoppedWithError:
      // Handler error
      break;
    default:
      break;
  }
});
```

To see the full list of supported events please refer to [Flutter Events List.](./Events%20List.md)

Stop Tempo
----------

Once the Tempo service is no longer needed, you can stop the service.
```dart
BluedotPointSdk.instance.stopTempoTracking().then((value) {
  // Successfully stopped tempo tracking
  debugPrint('Tempo has been stopped');
}).catchError((error) {
  // Failed to stop tempo tracking, handle error here
  debugPrint('Failed to stop tempo tracking. Error $error');
});
```

Tempo Status
------------

You can use the `isTempoRunning` method to check the status of the Tempo service. It will return a boolean value.
```dart
BluedotPointSdk.instance.isTempoRunning().then((value) {
  debugPrint('Is Tempo Running: $value');
});
```

Example
-------
```dart
import 'package:bluedot_point_sdk/bluedot_point_sdk.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class TempoPage extends StatefulWidget {
  const TempoPage({Key? key}) : super(key: key);

  @override
  State<TempoPage> createState() => _TempoPageState();
}

class _TempoPageState extends State<TempoPage> {
  bool _isTempoRunning = false;

  /// Start tempo tracking
  void _startTempo() {
      String destinationId = 'Your destination Id';
      String channelId = 'Your channel Id';
      String channelName = 'Your channel Name';
      String androidNotificationTitle = 'Your notification title';
      String androidNotificationContent = 'Your notification content';
      int androidNotificationId = 123; // Will be -1 by default if set to null. // Set custom event metadata.
      // We suggest to set the Custom Event Meta Data before starting GeoTriggering or Tempo.
      var metadata = {
        'hs_orderId': 'Order Id',
        'hs_Customer Name': 'Customer Name'
      };

      BluedotPointSdk.instance.setCustomEventMetaData(metadata);

      BluedotPointSdk.instance
          .tempoBuilder()
          .androidNotification(channelId, channelName, androidNotificationTitle,
          androidNotificationContent, androidNotificationId)
          .start(destinationId)
          .then((value) {
        // Successfully started tempo tracking
        debugPrint('Tempo has been started successfully');
      }).catchError((error) {
        // Failed to start tempo tracking, handle error here
        debugPrint('Failed to start tempo. Error $error');
      });
  }

  /// Stop tempo tracking
  void _stopTempo() {
    BluedotPointSdk.instance.stopTempoTracking().then((value) {
      // Successfully stopped tempo tracking
      debugPrint('Tempo has been stopped');
    }).catchError((error) {
      // Failed to stop tempo tracking, handle error here
      debugPrint('Failed to stop tempo tracking. Error $error');
    });
  }

  void _updateTempoStatus() {
    BluedotPointSdk.instance.isTempoRunning().then((value) {
      setState(() {
        _isTempoRunning = value;
      });
    });
  }

  @override
  void initState() {
    super.initState();
    // Listen to tempo events
    const tempoEventChannel = MethodChannel(BluedotPointSdk.tempo);
    tempoEventChannel.setMethodCallHandler((MethodCall call) async {
      var args = call.arguments;
      switch (call.method) {
        case TempoEvents.tempoTrackingStoppedWithError:
          // Handler error
          debugPrint('Tempo Tracking Stopped With Error. Error $args');
          break;
        default:
          break;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Is Tempo Running: $_isTempoRunning'),
        ElevatedButton(onPressed: _startTempo, child: const Text('Start Tempo')),
        ElevatedButton(onPressed: _stopTempo, child: const Text('Stop Tempo')),
        ElevatedButton(onPressed: _updateTempoStatus, child: const Text('Update Tempo Status')),
      ],
    );
  }
}
```