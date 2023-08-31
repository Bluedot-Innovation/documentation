How to paginate responses?
==========================

The Analytic API endpoints paginate its responses to make the result easier to handle. As a Project or Zone can have thousands of associated entry events, which is too large to handle efficiently, the endpoint returns the first batch of results along with a pagination token to access the next batch of results.

For each endpoint response, where there are further results available, the response body will include a `paginationToken` field. To fetch the next set of results, send a follow-up request to the same endpoint and provide the `paginationToken` value returned from the previous response in the `paginationToken` field of the subsequent request.

When the endpoint sends the final set of results, the response body does not include a `paginationToken` field

```sh
curl \--location \--request POST 'https://analytics.bluedot.io/prod1/entry/\_search' \\
--header 'Authorization: Bearer {{accessToken from Config API session endpoint response}}' \\
--header 'Content-Type: application/json' \\
--data -raw '{
    "projectId": "829dbfb6-5c12-4d27-aa75-db62ea62ac45",
    "paginationToken": "{{paginationToken from the previous Analytics API entry/\_search response}}",
    "timeType": "creationTime",
    "format": "json",
    "count": false
}'
```