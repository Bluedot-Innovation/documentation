Order Grouping
==============

The Order Grouping feature allows multiple orders linked to a single collector (e.g. a delivery driver) to be grouped together. By grouping these orders, staff can easily see which orders are associated with the same collector.

### Group Display
Orders that belong to the same group will appear next to each other on the Hello Screens, segregated by a coloured border that represents their group. Each group is labelled with a name displayed in the top right corner of the group boundary. The default prefix for these names can be customized, but it typically starts as "Group", followed by a sequential number (e.g., Group 1, Group 2).

![](../assets/Hello%20Screen%20-%20Grouping%20orders.png)

#### Order Details Modal
When an order card within a group is selected, the group name will appear in the Order Details modal. This group label uses the same colour as the group's border on the active orders screen, providing a consistent visual reference. 

![](../assets/Hello%20Screen%20-%20Grouping%20orders-1.png)

### Grouping Orders on Hello Screens via Wave API
You will use the new property `hs_orderGroupId` in the `customEventMetaData` of a Wave API event to group orders on Hello Screens. Orders are grouped on the Hello Screens when there are at least two orders with matching `hs_orderGroupId` within the same day, 

The order's grouping information is reset daily, so only orders from the current day are considered for grouping.

```json
// Order A
{
    "destinationId": "dest-id",
    "userToken": "ab45DE7",
    "customEventMetaData": {
        "hs_Customer Name": "Mark Herrera",
        "hs_orderGroupId": "abc123",
        "eventType": "onTheWay",
        "hs_orderId": "Order 1",
        //...other custom data fields here
    }
}
```
