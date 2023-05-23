import { Amplify, Auth } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: process.env.REACT_APP_REGION,
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
  },

  aws_appsync_graphqlEndpoint: process.env.REACT_APP_GRAPHQL_URL,
  aws_appsync_authenticationType: process.env.REACT_APP_APPSYNC_AUTH_TYPE,
});

Auth.configure();
