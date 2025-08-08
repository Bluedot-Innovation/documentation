Rezolve Data Extension Fields
=============================

As part of Rezolve + Salesforce, we create a [Data Extension](https://help.salesforce.com/articleView?id=mc_co_salesforce_data_extensions.htm&type=5) associated with the app. It is called **BluedotLocationServicesV2**.  

The following information will be sent to the Data Extension for every event:

| **Field**          | **Description**                                                                                                                                                                                                                                                 |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `subscriberKey`    | A unique UUID value of a Salesforce subscriber.                                                                                                                                                                                                                 |
| `apiKey`           | API Key of the relevant app.                                                                                                                                                                                                                                    |
| `packageName`      | Package name of the app. A package contains a reverse domain name that must be unique to this application.                                                                                                                                                      |
| `userName`         | Is the registered email address.                                                                                                                                                                                                                                |
| `zoneId`           | The unique identifier of the Zone that triggered the check-in.                                                                                                                                                                                                  |
| `zoneName`         | The name of the Zone that triggered the check-in.                                                                                                                                                                                                               |
| `fenceId`          | The unique identifier of the Fence that triggered the check-in.                                                                                                                                                                                                 |
| `fenceName`        | The name of the Geofence that triggered the check-in.                                                                                                                                                                                                           |
| `checkInTime`      | Date and time the check-in was triggered on the mobile device.                                                                                                                                                                                                  |
| `checkInLatitude`  | Latitude component of the coordinate at which the check-in occurred.                                                                                                                                                                                            |
| `checkInLongitude` | Longitude component of the coordinate at which the check-in occurred.                                                                                                                                                                                           |
| `checkInBearing`   | The bearing value of the device at the time of check-in, reported in degree.                                                                                                                                                                                    |
| `checkInSpeed`     | The travel speed of the device at the time of check-in, reported as meters per second.                                                                                                                                                                          |
| `customData`       | The keys and values entered in the Custom Action will be delivered to the mobile app at the time of check-in and check-out as part of the SDK callbacks. The custom data keys and values will be stored as individual columns in the Salesforce Data Extension. |
| `checkOutTime`     | Date and time the check-out was triggered on the mobile device. Only available for check-out enabled Zones.                                                                                                                                                     |
| `dwellTime`        | The dwell time is the number of minutes a device was within a Fence. Only available for check-out enabled Zones.                                                                                                                                                |

Add Custom Data
---------------

Additional custom data can be included in the information going to your Data Extension. This data can come from either [Custom Zone Data fields](../../Canvas/What%20is%20Zone%20custom%20data.md), or from [Custom Event Metadata fields](../../Custom%20Data.md). However, we’ll need to adjust your Data Extension in order to receive this data. 

To add these fields into your Data Extension just connect the Rezolve team using [help@bluedot.io](mailto:help@bluedot.io) and pass a list of the additional field names that you would like to be able to populate.

:::info
Only the fields specified to the Rezolve team are passed along to the Salesforce Marketing Cloud Data Extensions. All other fields specified in the Zone Custom Data or Custom Event Metadata will be ignored.
:::