Setting Up Multiple Environments Guide
======================================

Development, staging, and production environments are easy to set up in Canvas. Simply create a new Project for each environment to guarantee isolation between them. You can create as many as you need. You can easily switch between Projects from the top-left dropdown on the navigation bar. You can also configure different access permissions for each.

![environments-projects-dropdown](../assets/environments-projects-dropdown.png)

Name the environment
--------------------

You can name your environments any way you prefer. For each new Project created, we recommend to specify its environment by including a tag in its name. (i.e. <_Project Name_\> Development, <_Project Name_\> Production… etc)

![environments-list-page](../assets/environments-list-page.png)

User access to environments
---------------------------

You can control user access to Projects from the _Users_ section in Canvas.  A user with _Administrator_ permissions has access to all environments within a space and can _create_, _read_, _update_, and _delete_ any environments. You can enable a custom role to access specific environments of your choice. 

In the following example the user:

*   Is not able to access to the Production environment.
*   Is able to access to the QA environment.
*   Has read and write permissions to the Development environment.

![user-permissions-example](../assets/user-permissions-example.png)

Connecting to the different environments
----------------------------------------

Each environment will have its own Zones and configuration that are completely independent to the other environments. The way to connect to the different environments is by passing the `projectId` of the environment you’d like to connect to the initiating method of Point SDK, Web SDK or in the headers of a Wave API request (`x-bluedot-api-key`).

![](../assets/environments-list-ids-highlighted.png)

Copy Stores and Zones between Environments
------------------------------------------

Occasionally, you may want to copy a Store or a Zone with its configuration from one environment to another; for example, Stores from _Development_ environment to the _Staging_ environment, or from _Production_ to Staging. From Canvas you can use the Copy Stores / Copy Zones tool that allows you to copy Stores or Zones from one environment to another, either all at once, or individually.

To Copy Stores between environments go to the _Account > Tools > Copy Stores_

![](../assets/copy-stores.png)

To Copy Zones between environments go to the _Account > Tools > Copy Zones_

![](../assets/copy-zones.png)