/* let mysql = require("mysql");
let con = mysql.createConnection({
  host: "localhost",
  user: "felipeDB",
  password: "321a",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    console.log("DB :D");
  });
}); */
let express = require("express");
let app = express();
app.get("/", function (req, res) {
  res.send("HElkll--23245");
});
let server = app.listen(8081, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Example at http://%s:%s", host, port);
});
