Quick Start
=====================

To get the Rezolve Point SDK loaded and running, you’ll need to:

1.  Install the Flutter Bluedot Point SDK plugin ()
2.  Initialize the SDK

1\. Install the Flutter Bluedot Point SDK plugin
------------------------------------------------

Run this command:

With Dart:
```sh
  $ dart pub add bluedot_point_sdk
```

Or with Flutter:
```sh
  $ flutter pub add bluedot_point_sdk
```

This will add a line like this to your package’s pubspec.yaml (and run an implicit `dart pub get`):
```yaml
  dependencies:
    bluedot_point_sdk: ^1.0.0
```

Alternatively, your editor might support `dart pub get` or `flutter pub get`. Check the docs for your editor to learn more.

### Import it

Now in your Dart code, you can use:

```dart
import 'package:bluedot_point_sdk/bluedot_point_sdk.dart';
```

2\. Initialize the SDK
------------------------

Now that the project has been set up, you can import and initialize the Flutter Rezolve Point SDK plugin from your App:

The `initialize` method expects 1 parameter:

| **Parameter**           | **Type** | **Description**                                                         |
|-------------------------|----------|-------------------------------------------------------------------------|
| `lowPowerModeDidChange` | String   | The `projectId` you’re going to use. _This can be found in the Canvas._ |

```dart
import 'package:flutter/material.dart';
import 'package:bluedot_point_sdk/bluedot_point_sdk.dart';

class _MyAppState extends State<MyApp> {

  @override
  void initState() {
    super.initState();
    _initializeBluedotPointSDK();
  }

  void _initializeBluedotPointSDK() {
    BluedotPointSdk.instance.initialize('**Your_bluedot_project_Id**')
        .then((value) {
          // Successfully initialised Rezolve Point SDK
          debugPrint('Rezolve Point SDK has been initialized');
    }).catchError((error) {
      // Failed to initialize Rezolve Point SDK. Handle error here.
      debugPrint('Failed to initialize Rezolve Point SDK. Error: $error');
    });

  }

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
```

3\. Initialize Status
---------------------

You can use the `isInitialized` method to check the status of the SDK. It will return a boolean value.

```dart
BluedotPointSdk.instance.isInitialized().then((value) {
  debugPrint('Is Bluedot Point SDK initialized?: $value');
});
```

At this point, you’ve got the basics together, but to start receiving location events from the SDK, your need to use our Geo-triggering and/or Tempo features.