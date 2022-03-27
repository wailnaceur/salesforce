async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:"Bearer 00D4L000000k2yK!AQEAQCsCY60qA_weKeMt.Da0eizSjX3QL.P6jcqPK.Iv6_a7mRsnTGVptVNwFnZBOBlSui5pTILv13c2NaGObB6V9BsiHtdW",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default function handler(req, res) {
  if (req.method === "POST") {
    postData(
      "https://playful-shark-8n7jql-dev-ed.my.salesforce.com/services/data/v54.0/sobjects/JobApllication__c",
      { description__c: req.body.description__c , salary__c: req.body.salary__c }
    ).then((data) => {
      console.log(data); // JSON data parsed by data.json() call
    });
    //console.log(req.body.description__c)
  }
}
