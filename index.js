const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();
dynamodb.endpoint = 'http://host.docker.internal:8000';

exports.handler = async (event) => {
  return new Promise((resolve, reject) => {
    console.log('🏄 edge greenery lambda function invoked');
    const params = {
      'TableName': 'edge-greenery-table',
    };
    dynamodb.scan(params, (err, data) => {
      if (err) {
        throw new Error('❌ Edge Greenery failed to connect to DynamoDB.');
      }
      else {
        if (data.Items.length) {
          resolve('Edge Greenery Found Data!');
        } else {
          throw new Error('❌ There is something wrong with this lambda.');
        }
      }
    });
  });
};
