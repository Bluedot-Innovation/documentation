Create SFMC events
==================

Event Creation
--------------

To have Rezolve Zones trigger Salesforce Marketing Cloud Journeys, you must add corresponding API Events to Salesforce Marketing Cloud to receive the Rezolve Zone trigger. Follow the below instructions carefully to create the correct events.

 **Add a _Bluedot Entry_ **event**

1.  In the _Journey Builder_ section go to _Entry Sources_ and create a new Event clicking on the _\+ New Event_ button.

![](https://paper-attachments.dropbox.com/s_29D56E43A1592333A34F1515C904FC60D2148D3191387FB2B56914DB69313A23_1563335201238_Screen+Shot+2019-07-17+at+1.38.46+pm.png)

2.  On _Data Entry Source_ view select _API Event_ and click _Next_ 

![](https://paper-attachments.dropbox.com/s_29D56E43A1592333A34F1515C904FC60D2148D3191387FB2B56914DB69313A23_1563334774785_Screen+Shot+2019-07-17+at+1.38.57+pm.png)

3.  On the _Properties_ step set the following fields:

*   _Name:_ **_Bluedot Entry_**
*   _Description:_ **_User enters a Bluedot zone_**
*   _Event Definition Key:_ **_bluedot\_entry_** 

Then click _Next._

![](https://paper-attachments.dropbox.com/s_29D56E43A1592333A34F1515C904FC60D2148D3191387FB2B56914DB69313A23_1563334797737_Screen+Shot+2019-07-15+at+4.37.31+pm.png)

4.  Click on the _Data Extensions_ to expand the list of available _Data Extensions_ and select _BluedotLocationServicesV2_. Then click _Next_.

![](https://paper-attachments.dropbox.com/s_29D56E43A1592333A34F1515C904FC60D2148D3191387FB2B56914DB69313A23_1563334812733_Screen+Shot+2019-07-15+at+4.37.52+pm.png)

5.  We recommend that you do not add any filter at this stage to avoid limiting future use cases for the Rezolve technology. Instead, simply click _Next_.

![](https://paper-attachments.dropbox.com/s_29D56E43A1592333A34F1515C904FC60D2148D3191387FB2B56914DB69313A23_1563334834965_Screen+Shot+2019-07-15+at+4.38.12+pm.png)

6.  In the summary check the event information and verify that the field _Event Definition Key_ is one of the valid Rezolve events keys: **_bluedot\_entry_** or **_bluedot\_exit_** 

![](https://paper-attachments.dropbox.com/s_29D56E43A1592333A34F1515C904FC60D2148D3191387FB2B56914DB69313A23_1563334846749_Screen+Shot+2019-07-15+at+4.38.23+pm.png)

**Add a Bluedot Exit event**

Follow the same steps mentioned above. When you are setting up the properties of the event (Step 3) use instead:

*   _Name:_ **_Bluedot Exit_**
*   _Description:_ **_User exits a Bluedot zone_**
*   _Event Definition Key:_ **_bluedot\__****_exit_** 

The rest of the steps are the same as described above.

![](https://paper-attachments.dropbox.com/s_29D56E43A1592333A34F1515C904FC60D2148D3191387FB2B56914DB69313A23_1563336669582_Screen+Shot+2019-07-15+at+4.39.20+pm.png)

Once you finished adding the _Events_, they can be added to _Journeys_.

![](https://paper-attachments.dropbox.com/s_29D56E43A1592333A34F1515C904FC60D2148D3191387FB2B56914DB69313A23_1563336815776_Screen+Shot+2019-07-17+at+2.13.20+pm.png)