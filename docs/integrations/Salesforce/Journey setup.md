Journey Setup
=============

Once events have been correctly setup (see [**Event Creation**](./Create%20SFMC%20events.md) section), _Journeys_ can be created using those events as triggers.

*   Create a Trigger, triggered by Rezolve
*   Send a Location-Based Mobile Notification

Create a Trigger, triggered by Rezolve
--------------------------------------

1.  From the _Journey_, add an API Event as the entry source.

![](https://paper-attachments.dropbox.com/s_AA43C551919FBBE6E02840BA57A10777040DDFF69C8129B1CAFE812D358C68C2_1563335179759_Screen+Shot+2019-07-17+at+1.39.56+pm.png)

2.  Click on the API event to allow you to select from the available API events.

![](https://paper-attachments.dropbox.com/s_AA43C551919FBBE6E02840BA57A10777040DDFF69C8129B1CAFE812D358C68C2_1563335193867_Screen+Shot+2019-07-17+at+1.40.16+pm.png)

3.  Choose Bluedot Entry or Bluedot Exit as appropriate.

![](https://paper-attachments.dropbox.com/s_AA43C551919FBBE6E02840BA57A10777040DDFF69C8129B1CAFE812D358C68C2_1563335203910_Screen+Shot+2019-07-17+at+1.40.27+pm.png)

4.  Once selected, you can optionally choose to add a contact filter to only have a segment trigger this _Journey_.

![](https://paper-attachments.dropbox.com/s_AA43C551919FBBE6E02840BA57A10777040DDFF69C8129B1CAFE812D358C68C2_1563335213606_Screen+Shot+2019-07-17+at+1.40.45+pm.png)

5.  You can use any of the custom data defined in the Allowed Custom Data section above to segment based on, or any other Rezolve or other data.

![](https://paper-attachments.dropbox.com/s_AA43C551919FBBE6E02840BA57A10777040DDFF69C8129B1CAFE812D358C68C2_1563335223938_Screen+Shot+2019-07-17+at+1.41.34+pm.png)

6.  Once you’re finished with the event setup, you can configure your _Journey_ as normal – Bluedot event and custom data will be available for _Journey_ activities.

![](https://paper-attachments.dropbox.com/s_AA43C551919FBBE6E02840BA57A10777040DDFF69C8129B1CAFE812D358C68C2_1563335268504_Screen+Shot+2019-07-17+at+1.45.49+pm.png)

Send a Location-Based Mobile Notification
-----------------------------------------

A push notification is one of the actions that can be triggered by a Journey triggered by a user entering or exiting a Zone.

Create a mobile push notification
---------------------------------

1.  Under the **Mobile Studio** drop-down, select the **MobilePush** (If these are not available, contact your Salesforce Marketing Cloud representative to enable this functionality).
2.  Select the **Create Message** button.
3.  Select **Outbound**. The other options are only for when using standard geofence marketing, not the Hyper Location-enabled geofences that are available via Rezolve Location Marketing.
4.  Fill in the details of your message. For the send method, select **Interaction**.

![](../../assets/New-Push-Message-1024x513.png)

5\. Now, create a Zone and Journey as [detailed in this guide](./Journey%20setup.md).

6\. When activating your Journey, add a **Send Push** action to the Journey. It will appear in grey.

 ![](../../assets/SFMC-Journey.png)

7\. Select the **Send Push** icon in the Journey workflow and select **Configure.** A send Send Push pop up will appear. Select the message created in Step 4.

![](../../assets/Send-Push-Pop-Up.png)

8\. The **Send Push** activity will now have turned cyan to indicate that it has been assigned.

9\. Make sure to **activate** your Journey once you are finished so that it can start interacting with your users!