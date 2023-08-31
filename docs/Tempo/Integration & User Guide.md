Tempo: Integration & User Guide
===============================

With Tempo, you can understand customers’ estimated time of arrival (ETA) via the app. This allows more efficient use of your resources to fire off tickets at the right time – ensuring food freshness. Say goodbye to soggy fries, melted ice drinks, and luke-warm burgers.

Getting started with Tempo in 4 steps
-------------------------------------

1.  [Integrate the Point SDK & configure Tempo in your app](https://docs.bluedot.io/tempo/integrate-the-point-sdk-configure-tempo-in-your-app/)  
    You’ll call[`start`](https://android-docs.bluedot.io/-bluedot-s-d-k/au.com.bluedot.point.net.engine/-tempo-service/-tempo-builder/start.html) method from [TempoBuilder](https://android-docs.bluedot.io/-bluedot-s-d-k/au.com.bluedot.point.net.engine/-tempo-service/-tempo-builder/index.html)  once you’re customer submits their app order, define the [`DestinationId`](https://android-docs.bluedot.io/-bluedot-s-d-k/au.com.bluedot.point.net.engine/-tempo-service/-tempo-builder/destination-id.html) & attach any [customEventMetadata](https://docs.bluedot.io/custom-event-metadata/) (Eg. the Order ID and the customer’s name)
2.  [Configure Tempo isochrone time brackets](https://docs.bluedot.io/tempo/configure-tempo-isochrone-time-brackets/)  
    Every Destination has its corresponding isochrones created for it to track and report the customer’s ETA. You can configure the isochrone time brackets as per your use case for each Project by contacting the Bluedot team.
3.  [Create your Destination(s)](https://docs.bluedot.io/tempo/create-your-destinations/)  
    The Destination is the store or restaurant where your customer is collecting their mobile order from. Every Destination has a set of lat/long coordinates & a unique `DestinationId` (which you choose). You can create a Destination in the Canvas dashboard or using the Config API.
4.  [Configure a Tempo webhook](https://docs.bluedot.io/tempo/configure-a-tempo-webhook/)  
    Tempo will accurately calculate your customer’s ETA as they get closer to their Destination, and will notify you with instant, real-time notifications through a webhook. This webhook includes their location, their ETA (in seconds), and any [customEventMetadata](https://docs.bluedot.io/custom-event-metadata/) you set.

Once these 4 simple steps have been completed you’re all ready to go.