---
pagination_next: APIs/Config API/How to authenticate with Config API
pagination_prev: null
---

Overview
=====================

Config APIs expose the functionality of the feature-rich user interface, [Canvas](../../Canvas/Overview.md), as RESTful web services. A broad range of clients and integrations can be built to utilise these services.

Data added through the Config APIs can be reviewed and edited via the Canvas user interface and vice versa.

Rezolve API model objects
-------------------------

You will largely interact with the following API model objects when using Config APIs:

*   Projects
    *   Zones
        *   Geofeatures
            *   Polygon
            *   Circle
            *   Bounding box (Rectangle)
            *   Geoline™
        *   Conditions
            *   Time Active
            *   Date Range
            *   Travel Path
            *   Travel Direction
            *   Speed
        *   Custom Data
    *   Stores (Destinations)
        *   Store Name
        *   Address
        *   Location (Coordinates)
        *   Email
        *   Destination ID
*   Tags
*   Users
*   Sessions

API reference
-------------

The API specification for the Config API can be found [here](https://config-docs.bluedot.io/).

Regions
-------

Config API is hosted in multiple regions worldwide to ensure better performance of our services. To learn more refer to the [Rezolve Regions documentation](../../Regions%20URLs.md).

Example of authenticating the Config API
----------------------------------------

To access most of the endpoints of the Config API, you first need an Access Token. An example of how to authenticate using the access token can be found [here](./How%20to%20authenticate%20with%20Config%20API.md).