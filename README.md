# API-resume

## Description
I ultilize Express.js to create an API-version of my resume with post, get, put method. I used Mongodb Atlas to store my information and AWS EC2 to host the server.

## Technology
This is a REST API that accesses a MongoDB instance hosted in an AWS EC2.
-  MongoDB
-  Mongoose
-  Node.js
-  Express.js

## How to access my API

### Using curl
1. Install curl
   ```sh
  sudo apt install curl
  ```
2. Verify you have curl installed
  ```sh
  curl --version
  ```
3. Access my resume/guide through your terminal
    ```sh
  curl -k http://3.21.204.238:3000/
  ```
### Using Postman/API clients

You can access my resume through
  ```sh
  http://3.21.204.238:3000/
  ```

## What to expect
- Include authentication for post, put method
- Enable AWS Lambda to notify through mobile/email when someone post a message

