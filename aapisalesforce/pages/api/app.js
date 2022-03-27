const jsforce = require("jsforce");

const { SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD, SF_TOKEN } = process.env;

const conn = new jsforce.Connection({
  loginUrl: SF_LOGIN_URL,
});
conn.login(SF_USERNAME, SF_PASSWORD + SF_TOKEN, (err, userInfo) => {
  if (err) {
    console.error(err);
  } else {
    console.log("User Id:" + userInfo.id);
    console.log("Org Id:" + userInfo.organizationId);
  }
});

export default function handler(req, res) {
  conn.query(
    "SELECT Name, Description__c, Salary__c FROM JobApllication__c",
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        console.log("Total records:" + result.totalSize);
        console.log(result);
        return res.json(result.records);
      }
    }
  );
}
