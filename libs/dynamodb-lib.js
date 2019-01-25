//handles returning promises from dynamodb methods
import AWS from "aws-sdk";

  export function call(action, params) {
  //The AWS sdk assumes the region based on the current region of the lambda function. 
  //Use the following if the DynamoDB table is in a different region than the lambda: 
  //AWS.config.update({ region: "us-east-2"});
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}