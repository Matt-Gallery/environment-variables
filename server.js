import "dotenv/config";

import express from "express";


const app = express();

app.get('/', (req, res) => {
  res.send('The server is running');
});

// app.listen(3000, () => {
//     console.log('Listening on port 3000');
//     console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
// });

app.listen(3000, () => {
    console.log('Listening on port 3000');
    console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
  });