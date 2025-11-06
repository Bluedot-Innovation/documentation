Scheduled Reports
=============

The Schedule Reports feature lets you generate, schedule, and manage detailed reports for the Hello stack (order management) and geofencing data (location-based events) directly from the Canvas.

### Report Types
#### Hello Stack Reports (Order Management)
Focus on click-and-collect order management, useful for monitoring order statuses, managing pick-up times, and analyzing trends.

#### Geofencing Data Reports (Location-Based events)
Utilize geofencing data to analyze customer movements, measure marketing campaign effectiveness, gamefication and optimize promotions.


With the Scheduled Reports, you can:
* **Generate Reports:** Create reports with a consistent column structure tailored to your needs, ensuring uniformity and ease of analysis.
* Schedule Report Distribution: Set up daily, weekly, or monthly schedules for automatic report generation and email distribution tailored to your time zone.
* **Manage Email Distribution Lists:** Specify a list of email addresses, including internal team members and external stakeholders, to automatically receive the reports.
* **Admin-Only Access:** Ensure secure and controlled access to the report generation and scheduling functionalities, limited to users with Admin permissions.
* **CSV Format Reports:** Receive reports in CSV format, facilitating easy data analysis and sharing.
This Hello Report gives you more control over your data, provides immediate access to essential information, and enhances operational efficiency.

### How to Use

#### Accessing the Feature:
From the top navigation bar in Canvas, hover over the Analytics tab and select the "Scheduled Report" option.

![](../../assets/Hello%20Reports%20-%201.png)

#### Setting Up the Report:
Click on "Create New Report".
Configure the report parameters, including the frequency (Daily, Weekly, Monthly), time zone, and email distribution list.
The report will be sent at 3 am in the selected time zone and the download link included in the email is valid for 7 days from the time the report is generated. If the download link expired you can request new report generation.

![](../../assets/Hello%20Reports%20-%202.png)

#### Managing Reports:
Admins can view, edit, or delete scheduled reports at any time through the Reports section.

![](../../assets/Hello%20Reports%20-%203.png)
 

### Report Column Details

#### Hello Stack Report Structure

| Column Name            | Explanation                                                  | Data Type |
|------------------------|--------------------------------------------------------------|-----------|
| `orderId`              | Unique identifier for each order                             | String    |
| Order States Timestamps| Progression states timestamps of the order as per Hello Order States configuration. [See Hello Order States](../../Hello%20Screens/Custom%20Order%20States.md)  | Timestamp    |
| `destinationId`        | Unique identifier for the destination                        | String    |
| `UsedWave`             | Indicates if Wave was used                                   | Boolean   |
| `TempoTracked`         | Indicates if Tempo was used to tracked the order             | Boolean   |
| `TempoStoppedTime`     | Timestamp when Tempo stopped tracking                        | Timestamp |
| `AutomatedArrival`     | Indicates if arrival was automated                           | Boolean   |
| `os`                   | Operating system of the device                               | String    |
| `osVersion`            | Version of the operating system                              | String    |
| `deviceType`           | Type of device used                                          | String    |
| `locationPermissions`  | Status of location permissions granted to the device         | String    |
| `orderWaitTime`        | Time difference between `arrival` and `complete` events (seconds) | Integer   |
| `ExitTime`             | Timestamp when the Exit event occurred                       | Timestamp |
| `geoDwellTime`         | Time difference between `Entry` and `Exit` events (seconds)  | Integer   |

### Geofencing Report Structure

| Column Name        | Explanation                                | Data Type |
|--------------------|--------------------------------------------|-----------|
| Trigger ID         | Unique identifier for the trigger event    | String    |
| Zone ID            | Identifier for the geofenced zone          | String    |
| Zone Name          | Name of the geofenced zone                 | String    |
| Fence Name         | Name of the specific geofence within the zone | String |
| Zone Custom Data   | Custom data associated with the zone       | String    |
| Event Custom Data  | Custom data associated with the event      | String    |
| Entry Event Time   | Timestamp of when the entry event occurred | DateTime  |
| Entry Longitude    | Longitude of the entry event               | Number     |
| Entry Latitude     | Latitude of the entry event                | Number     |
| Exit Event Time    | Timestamp of when the exit event occurred (if available) | DateTime |
| Exit Longitude     | Longitude of the exit event (if available) | Number     |
| Exit Latitude      | Latitude of the exit event (if available)  | Number     |
| Dwell Time         | Duration of time spent within the geofence in seconds (if available) | Number     |
| OS                 | Operating system of the device             | String    |
| OS Version         | Version of the operating system            | String    |
| Device             | Information about the device               | String    |
| SDK Version        | Version of the SDK used                    | String    |
| App Build Version  | Build version of the application           | String    |


### Scheduling Frequency 
You can select the frequency of report generation and email distribution through a dropdown menu with options for Daily, Weekly, or Monthly reports. Additionally, you can select your preferred time zone to receive reports, which will be sent at 3 am in the selected time zone and the download link included in the email is valid for 7 days from the time the report is generated. If the download link expired you can request new report generation.

### Admin Access Only
The report generation and scheduling feature is exclusive to users with "Admin" permissions. Only these users can add, edit, or delete scheduled reports, ensuring control and security over report management.

