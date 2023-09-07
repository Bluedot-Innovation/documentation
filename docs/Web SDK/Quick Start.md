Quick Start
====================================

To get the base SDK loaded and running, you’ll need to:

*   Get your project ID
*   Initialize the Bluedot Javascript SDK

Getting your project ID
-----------------------

Before you start integrating Bluedot make sure you have access to [Canvas](../Canvas/Overview.md) – your Bluedot dashboard. This where you can access a `ProjectID` to initialize the Web SDK.

The Project ID of a project can be found in the Projects section of Canvas.

If you’re not sure how to log in contact us on [help@bluedot.io](mailto:help@bluedot.io) & we’ll help you out.

Initializing the Bluedot Javascript SDK
---------------------------------------

Add the Bluedot Javascript SDK to your project using:

```bash
npm install @bluedot-innovation/javascript-sdk --save
```

In your initialization method, initialize the JS SDK with:
```js
// ES Module style
import { bluedot } from "@bluedot-innovation/javascript-sdk"

// or CommonJS style
const bluedot = require("@bluedot-innovation/javascript-sdk").bluedot;
...
bluedot.initialize("<yourProjectId>")
```