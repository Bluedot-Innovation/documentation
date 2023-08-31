Enable or Disable Zone
=====================================

Disabling specific Zones at runtime
-----------------------------------

An app may optionally disable (and later re-enable) Zone which it receives from Canvas.

By calling [`setZone:disableByApplication:`](https://ios-docs.bluedot.io/Classes/BDLocationManager.html#/c:objc(cs)BDLocationManager(im)setZone:disableByApplication:) on the shared instance of [BDLocationManager](https://ios-docs.bluedot.io/Classes/BDLocationManager.html), a Zone can be disabled and re-enabled by an app. Note that this will not over-ride any excluding conditions entered via the Canvas web interface.

As an example; if you define a Zone in Canvas as active between 1 pm and 3 pm, calls to [`setZone:disableByApplication:`](https://ios-docs.bluedot.io/Classes/BDLocationManager.html#/c:objc(cs)BDLocationManager(im)setZone:disableByApplication:) would have no apparent effect outside these times. During the Zone’s active period (e.g. at 2.30 pm), the Zone will be active unless disabled by [`setZone:disableByApplication:`](https://ios-docs.bluedot.io/Classes/BDLocationManager.html#/c:objc(cs)BDLocationManager(im)setZone:disableByApplication:).

The enable and disable Zone methods return YES if a valid Zone Id has been provided.

Retrieve the shared instance of [BDLocationManager](https://ios-docs.bluedot.io/Classes/BDLocationManager.html) to call the following methods:

```
- (void)setZone: (NSString \*)zoneId disableByApplication:(BOOL)disable
- (void)applicationContainsDisabledZone:(NSString \*)zoneId
                             completion:(void (^)(BOOL))completion;
```                             

To determine the Zones available to your app, you should implement the [`BDPGeoTriggeringEventDelegate`](https://ios-docs.bluedot.io/Protocols/BDPGeoTriggeringEventDelegate.html), which handles the callback:

// The zoneInfos parameter contains a set of all available Zone and their associated Ids, names, descriptions and Geofences.

```
- (void)onZoneInfoUpdate: (NSSet<BDZoneInfo *> *)zoneInfos;
```

Zone Information will be updated after a successful Geo-triggering Start and/or after the next Rule Download :

Point SDK reference documentation can be accessed [here](https://ios-docs.bluedot.io/index.html).

![image](https://docs.bluedot.io/wp-content/uploads/2021/07/info.png)

**Interaction with the Exit feature**

Note that if a Zone has already been entered and is awaiting an exit event, then disabling the Zone at this point will not prevent the exit callback from occurring.

If it is important to suppress exit behaviours while a Zone is disabled by your application, we advise that you make use of the `applicationContainsDisabledZone:completion:` method as part of your exit callback.