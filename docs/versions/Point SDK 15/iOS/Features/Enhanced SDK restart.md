Enhanced SDK restart
===================================

From V1.13.0 iOS Point SDK supports enhanced restart mode.

The SDK will handle a restart process after the application is terminated either by swiping the app from the app switcher or by restarting the device.


:::info
An _Always_ location permission is required for the enhanced restart mode to function as expected.
:::


:::info
Enhanced mode relies on iOS Significant Location API; thus, it is **not** recommended for application to have their own instance of Location Manager.
:::

After the restart, the Point SDK runs in an enhanced restart mode. In this mode, the application does not allocate and instantiate view controllers, neither the `RootViewController` or any other controllers. You still can instantiate them programmatically if required. However, view controllers `viewWillAppear`, `viewDidAppear` and `viewDidLoad` are not called by the OS until the application is in the foreground mode. So, if your application is relying on the code in a view controller, it might not work as expected in the enhanced restart mode. _**Hence, it is recommended to move all the Point SDK callbacks related tasks into the**_ `AppDelegate`_**.**_

After the restart, the SDK will log into the backend and download Zones if necessary. It will continue to track geofences and trigger Entry and Exit events. Below are the triggering caveats in the enhanced restart mode:

*   The SDK does not check into or check out from Geoline™ in this mode.
*   Zones that have Speed, Bearing, Percentage crossed and Sequential conditions added to their Actions will not trigger as well in the restart mode.
*   In the restart mode, the SDK treats all Geofences as large circular regions, so there is a degradation in the accuracy of triggers expected.
*   Check-ins can be observed 30 – 50 meters away from the actual location of the Geofences created in the Canvas dashboard.


:::info
It is highly recommended that geofences should be sparsely populated and should not be within 500m of each other (perimeter to perimeter).
:::

Due to the iOS limitations, it is not recommended to overload application with processes and HTTP requests in the background mode as it might lead to unexpected SDK behavior and early process termination. If it is possible, try to minimize the number of requests sent while the application in this mode. However, when a user reopens an app, this limitation is dismissed.


:::info
In this mode, the trigger will be more reliable in an area with better Wi-Fi coverage. Hence it is recommended that the device has Wi-Fi and Cellular turned on.
:::


:::info
An enhanced restart mode is configured by the Bluedot team. Please contact our friendly [**support**](mailto:help@bluedot.io) if you would like to enable it.
:::