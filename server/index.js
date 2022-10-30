

const path = require('path');
//server module
const express = require("express");



//Server Port
const PORT = process.env.PORT || 1327;
//serve declaration/assignment
const app = express();


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));


// post request from server with app get request

app.use("/api", (req, res) => {
  // jason backend data
    res.json(
      {
        "slackUsername": "Jon West",
        "backend": true,
        "age": 23,
        "bio":"Full Time Athlete, self-taught develper. 23 years of age from south africa"


      }
    )
  });

  
// All other GET requests not handled before will return our React app
//further into responds to request
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// Port Listener
  app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

