Enable or disable Zones
==========================================

An app may optionally disable (and later re-enable) Zones by calling `setZoneDisableByApplication` on the shared `ServiceManager`. This will not override any Conditions set via [Canvas](https://canvas.bluedot.io/sign-in) or Config APIs.

For example, if a Zone is configured in Canvas to be active between 1 pm and 3 pm, calls to `setZoneDisableByApplication` would have no effect outside of these times. During the Zone’s active period (e.g. at 2.30 pm), the Zone will be active unless disabled by `setZoneDisableByApplication`.

```java
String zoneIdToDisable = ""
if (!mServiceManager.isZoneDisabledByApplication(zoneIdToDisable)) {
    mServiceManager.setZoneDisableByApplication(zoneIdToDisable, true);
}
```

:::info
**Interaction with the Exit (check-out) feature**

Note that if a Zone has already entered (checked-in) and is awaiting an exit event, then disabling the Zone at this point will not prevent the exit callback from occurring.

If it is important to suppress exit behaviors while a Zone is disabled by your application, we advise that you make use of the [`isZoneDisabledByApplication`](https://android-docs.bluedot.io/-bluedot-s-d-k/au.com.bluedot.point.net.engine/-service-manager/index.html#%5Bau.com.bluedot.point.net.engine%2FServiceManager%2FisZoneDisabledByApplication%2F%23java.lang.String%2FPointingToDeclaration%2F%5D%2FFunctions%2F-762893342) method as part of your exit callback
:::