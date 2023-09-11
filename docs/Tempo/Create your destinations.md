Create your Destination(s)
==========================

To create a Destination, you’ll need to have an active user and a Bluedot Account. Your Bluedot administrator can easily grant you access or you can contact our team – help@bluedot.io. Your user credentials are used to log into the [Canvas dashboard](../Canvas/Overview.md) and also authenticate with [Config API](../APIs/Config%20API/Overview.md). 

Creating a Destination
----------------------

A Destination is a physical location your customers arrive at to collect their mobile order – this is usually your store or restaurant. Within Canvas, Destinations are also known as Stores. When creating a store you’ll need to provide a Destination ID.

There are 2 simple steps:

1.  Create the Store with a `DestinationId`
2.  Create or link a Zone to the store

### 1\. Store creation

From the “Stores” section, fill out the “Add a New Store” form. In the form, you’ll have to input the Destination ID for the store. We recommend using an ID that makes sense for your brand and/or systems. Check the [Store Management documentation](../Canvas/Store%20management.md) for more details.

![](../assets/store-management-3.png)

### 2\. Zone creation

Once you’ve created the store, click on Add new Zone and create a geofence – you can use a circular geofence, a polygon or a rectangle. This should cover your restaurant or store.

You can also update the name of the Zone and geofence – both of these details will be included in Tempo Webhook updates.

![](../assets/Create-zone-1024x697.jpg)

### 3\. Save

Close Zone Settings and click the Create/Update button. The Zone is ready, and the isochrones for it will be generated in the Bluedot backend. It takes from 30 seconds to 1 minute for the isochrones to be generated.

If you’d like to link a Zone to a Store (A.K.A Destination) using [Config API](../APIs/Config%20API/Overview.md), you’ll use the following /Endpoints;

**Endpoint**

**Description**

[Add DestintaionId to a new Zone](https://config-docs.bluedot.io/#operation/addZone)

When linking a Zone to a Store you’ll have to pass the Destination ID of the Store.

Endpoint: `https://config.bluedot.io/prod1/zones`

Example of adding a Destination Id:
```json
{ 
    "destinationId": "<store_destination_id_goes_here>" 
}
```