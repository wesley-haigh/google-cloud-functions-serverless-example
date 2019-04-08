# Google Cloud Functions with Node.js and Serverless

## Deploy to Google Cloud using Serverless

Modify the `serverless.yml` with your GCP project id and generate a key.json for your chosen service account and store it in `secrets/keyfile.json`.

Install the Serverless CLI with

    npm install -g serverless

Install dependencies with

    npm install

To deploy using Serverless run:

    serverless deploy

Go to the Cloud console and you should see the 2 functions - `getUser` and `getUsers`. Due to limitations with Cloud Functions you can not specify urls using the native Cloud Functions, even though the Serverless documentation may suggest otherwise (for AWS you can specify paths, for example).

If you wish to see an example of specifying your own URL paths see [this repo using Express](https://github.com/wesley-haigh/gcp-cloud-functions-example)
