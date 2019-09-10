# `create-graphql-app`

> Add a GraphQL lamda to `create-react-app`.

1. `yarn create react-app create-graphql-app`
1. <details>
   <summary><code>amplify init</code></summary>

   ```
   Note: It is recommended to run this command from the root of your app directory
   ? Enter a name for the project create-graphql-app
   ? Enter a name for the environment dev
   ? Choose your default editor: Visual Studio Code
   ? Choose the type of app that you're building javascript
   Please tell us about your project
   ? What javascript framework are you using react
   ? Source Directory Path:  src
   ? Distribution Directory Path: build
   ? Build Command:  npm run-script build
   ? Start Command: npm run-script start
   Using default provider  awscloudformation
   ```


      For more information on AWS Profiles, see:
      https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

      ? Do you want to use an AWS profile? Yes
      ? Please choose the profile you want to use default
      ⠙ Initializing project in the cloud...

      CREATE_IN_PROGRESS create-graphql-app-dev-20190910153235 AWS::CloudFormation::Stack Tue Sep 10 2019 15:32:36 GMT-0700 (Pacific Daylight Time) User Initiated
      CREATE_IN_PROGRESS AuthRole                              AWS::IAM::Role             Tue Sep 10 2019 15:32:39 GMT-0700 (Pacific Daylight Time)
      CREATE_IN_PROGRESS DeploymentBucket                      AWS::S3::Bucket            Tue Sep 10 2019 15:32:39 GMT-0700 (Pacific Daylight Time)
      CREATE_IN_PROGRESS AuthRole                              AWS::IAM::Role             Tue Sep 10 2019 15:32:39 GMT-0700 (Pacific Daylight Time) Resource creation Initiated
      CREATE_IN_PROGRESS UnauthRole                            AWS::IAM::Role             Tue Sep 10 2019 15:32:39 GMT-0700 (Pacific Daylight Time)
      CREATE_IN_PROGRESS DeploymentBucket                      AWS::S3::Bucket            Tue Sep 10 2019 15:32:40 GMT-0700 (Pacific Daylight Time) Resource creation Initiated
      CREATE_IN_PROGRESS UnauthRole                            AWS::IAM::Role             Tue Sep 10 2019 15:32:40 GMT-0700 (Pacific Daylight Time) Resource creation Initiated
      ⠏ Initializing project in the cloud...

      CREATE_COMPLETE AuthRole   AWS::IAM::Role Tue Sep 10 2019 15:32:53 GMT-0700 (Pacific Daylight Time)
      CREATE_COMPLETE UnauthRole AWS::IAM::Role Tue Sep 10 2019 15:32:54 GMT-0700 (Pacific Daylight Time)
      ⠇ Initializing project in the cloud...

      CREATE_COMPLETE DeploymentBucket AWS::S3::Bucket Tue Sep 10 2019 15:33:00 GMT-0700 (Pacific Daylight Time)
      ⠙ Initializing project in the cloud...

      CREATE_COMPLETE create-graphql-app-dev-20190910153235 AWS::CloudFormation::Stack Tue Sep 10 2019 15:33:03 GMT-0700 (Pacific Daylight Time)
      ✔ Successfully created initial AWS cloud resources for deployments.
      ✔ Initialized provider successfully.
      Initialized your environment successfully.

      Your project has been successfully initialized and connected to the cloud!

      Some next steps:
      "amplify status" will show you what you've added already and if it's locally configured or deployed
      "amplify <category> add" will allow you to add features like user login or a backend API
      "amplify push" will build all your local backend resources and provision it in the cloud
      "amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

      Pro tip:
      Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
      ```

    </details>

1.  <details>
    <summary><code>amplify function add</code></summary>

    ```
    ❯ amplify function add
    Using service: Lambda, provided by: awscloudformation
    ? Provide a friendly name for your resource to be used as a label for this category in the project: graphql
    ? Provide the AWS Lambda function name: graphql
    ? Choose the function template that you want to use: Serverless express function (Integration with Amazon API Gateway)
    ? Do you want to access other resources created in this project from your Lambda function? No
    ? Do you want to edit the local lambda function now? No
    Successfully added resource graphql locally.

    Next steps:
    Check out sample function code generated in <project-dir>/amplify/backend/function/graphql/src
    "amplify function build" builds all of your functions currently in the project
    "amplify function invoke graphql" enables you to test a function locally
    "amplify push" builds all of your local backend resources and provisions them in the cloud
    "amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud

    ```

    </details>

1.  Next

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
