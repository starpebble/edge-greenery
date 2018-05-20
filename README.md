# Edge Greenery

Edge Greenery is a serverless app that demonstrates Lambda with a local DynamoDB database.

### Overview

Edge Greenery examples an 'off the cloud' development environment.  Sometimes it is easier to test and develop locally. That's why off cloud environment are helpful. The lambda function connects to a local DynamoDB database. When there are no items in the database, the function throws an error.

### SAM and Docker

The [Serverless Application Model (SAM)](https://github.com/awslabs/aws-sam-cli) command line interface (cli) tools run lambda functions locally in a docker container. Edge Greenery uses a NodeJS engine, so the sam tools will download NodeJS v8.10.  It's easy. The example executes on NodeJS v8.10 within a Docker image provided by Amazon Web Services (AWS) for you.  

### What's in Here

The app intentionally throws an error. To address the error, [put an item](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property) into the local DynamoDB table.

A [json file](edge-greenery-schema.json) with sample DynamoDB schema for one table is provided.  A [SAM yaml](template.yaml) template is provided, too.

The [serverless app](index.js) uses [modern](https://www.ecma-international.org/ecma-262/) JavaScript syntax.

### Dependencies

Download and install the following dependencies:

* NodeJS (6.10 or later)
* npm (3.10 or later)
* Java (v8 or later)
* Python (v2.7 only)
* Go (v1.10 or later)
* Docker (v18.03 or later)
* aws sdk (v1.15.21 or later)
* sam cli tools (v0.30 or later)

Recommended developer software for Mac OS X users:

* XCode (v9.0 or later)

### Use Instructions

###### * Launch DynamoDB
```java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb```

###### * Create a table in DynamoDB
```aws dynamodb create-table --endpoint-url http://localhost:8000 --cli-input-json file://edge-greenery-schema.json```

###### * Install node_modules
```npm install```

###### * Invoke the lambda function locally
```echo "{}" | sam local invoke```

### References

* AWS SAM CLI tools on github
https://github.com/awslabs/aws-sam-cli

* Download AWS DynamoDB
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html

* Serverless Application Model specification on github
https://github.com/awslabs/serverless-application-model/tree/master

* AWS DynamoDB API for NodeJS Documentation web page
https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html

* AWS Lambda and NodeJS 8.10 blog entry
https://aws.amazon.com/blogs/compute/node-js-8-10-runtime-now-available-in-aws-lambda/

* AWS Lambda website
https://aws.amazon.com/lambda/

* Download Go Website
https://golang.org/dl/

* Download Docker Community Edition (CE) Website
https://store.docker.com/search?type=edition&offering=community

* Download Java Website
https://java.com/en/download/

* Download NodeJS Website
https://nodejs.org/en/download/

* Download Python Website
https://www.python.org/downloads/

* Download XCode Website
https://developer.apple.com/xcode/

### Support

Please create an issue for the github project, for support.  The serverless app depends on lots of fun, awesome open source projects.  Feel free to ask questions about installing any dependency.

### License
MIT License
