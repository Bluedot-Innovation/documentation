Overview
========

With Tempo, you can understand customers’ estimated time of arrival (ETA) via the app. This allows more efficient use of your resources to fire off tickets at the right time – ensuring food freshness. Say goodbye to soggy fries, melted ice drinks, and luke-warm burgers.

Getting started with Tempo in 4 steps
-------------------------------------

1.  [Integrate the Point SDK & configure Tempo in your app](./Integrate%20the%20Point%20SDK%20in%20your%20app.md)  
    You’ll call[`start`](https://android-docs.bluedot.io/-bluedot-s-d-k/au.com.bluedot.point.net.engine/-tempo-service/-tempo-builder/start.html) method from [TempoBuilder](https://android-docs.bluedot.io/-bluedot-s-d-k/au.com.bluedot.point.net.engine/-tempo-service/-tempo-builder/index.html)  once you’re customer submits their app order, define the [`DestinationId`](https://android-docs.bluedot.io/-bluedot-s-d-k/au.com.bluedot.point.net.engine/-tempo-service/-tempo-builder/destination-id.html) & attach any [customEventMetadata](../Custom%20Event%20Metadata.md) (Eg. the Order ID and the customer’s name)
2.  [Configure Tempo isochrone time brackets](./Isochrone%20time%20brackets.md)  
    Every Destination has its corresponding isochrones created for it to track and report the customer’s ETA. You can configure the isochrone time brackets as per your use case for each Project by contacting the Bluedot team.
3.  [Create your Destination(s)](./Create%20your%20destinations.md)  
    The Destination is the store or restaurant where your customer is collecting their mobile order from. Every Destination has a set of lat/long coordinates & a unique `DestinationId` (which you choose). You can create a Destination in the Canvas dashboard or using the Config API.
4.  [Configure a Tempo webhook](./Configure%20a%20Tempo%20webhook.md)  
    Tempo will accurately calculate your customer’s ETA as they get closer to their Destination, and will notify you with instant, real-time notifications through a webhook. This webhook includes their location, their ETA (in seconds), and any [customEventMetadata](../Custom%20Event%20Metadata.md) you set.

Once these 4 simple steps have been completed you’re all ready to go.