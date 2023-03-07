var arr = new Array();
const router = async function (req, res) {
  if (req.url === "/api/upload_name" && req.method === "GET") {
    // set the status code, and content-type
    res.writeHead(200, { "Content-Type": "application/json" });
    // send the data
    res.end(JSON.stringify(arr));
  }

  //  POST: /api/name
  if (req.url === "/api/savethename" /*&& req.method === "POST"*/) {
    try {
      const readline = require("readline");

    const ReadLine = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      ReadLine.question(
        "Kindly write the name you'll like to add to the array",
        (NewNameAdded) => {
          console.log(`You have successfully added ${NewNameAdded} to the List`);
          arr.push(NewNameAdded);
          ReadLine.close();
        }
      );

      let body = "Kindly add the name through the terminal";
      res.writeHead(200, { "Content-Type": "application/json" });
      //send response
      res.end(JSON.stringify(body));
    } catch (error) {
      console.log(error);
    }
  }

};

module.exports = router;
