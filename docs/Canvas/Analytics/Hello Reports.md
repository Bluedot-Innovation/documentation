Hello Reports
=============

The Hello Reports feature lets you create detailed reports directly from the Canvas platform on the Hello stack metrics. This feature allows you to schedule and distribute reports automatically, ensuring timely access to critical data.

With the Hello Reports, you can:
* **Generate Reports:** Create reports with a consistent column structure tailored to your needs, ensuring uniformity and ease of analysis.
* Schedule Report Distribution: Set up daily, weekly, or monthly schedules for automatic report generation and email distribution tailored to your time zone.
* **Manage Email Distribution Lists:** Specify a list of email addresses, including internal team members and external stakeholders, to automatically receive the reports.
* **Admin-Only Access:** Ensure secure and controlled access to the report generation and scheduling functionalities, limited to users with Admin permissions.
* **CSV Format Reports:** Receive reports in CSV format, facilitating easy data analysis and sharing.
This Hello Report gives you more control over your data, provides immediate access to essential information, and enhances operational efficiency.

### How to Use

#### Accessing the Feature:
From the top navigation bar in Canvas, hover over the Analytics tab and select the "Hello Report" option.

![](../../assets/Hello%20Reports%20-%201.png)

#### Setting Up the Report:
Click on "Create New Report".
Configure the report parameters, including the frequency (Daily, Weekly, Monthly), time zone, and email distribution list.
 The report will be sent at 3 am in the selected time zone.

![](../../assets/Hello%20Reports%20-%202.png)

#### Managing Reports:
Admins can view, edit, or delete scheduled reports at any time through the Reports section.

![](../../assets/Hello%20Reports%20-%203.png)
 

### Report Column Details

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

### Scheduling Frequency 
You can select the frequency of report generation and email distribution through a dropdown menu with options for Daily, Weekly, or Monthly reports. Additionally, you can select your preferred time zone to receive reports, which will be sent at 3 am in the selected time zone.

### Admin Access Only
The report generation and scheduling feature is exclusive to users with "Admin" permissions. Only these users can add, edit, or delete scheduled reports, ensuring control and security over report management.

For further assistance or queries,  please get in touch with our support team at [help@bluedot.io](mailto:help@bluedot.io)
