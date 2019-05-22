const express = require('express');
const path = require('path');

const app = express();

app.get("/", (req, res) => {
    res.json({wi_backend: "latest"})
});

app.listen(5001, function (err) {
    if (err) return console.log(err);

    console.log('Host server is up on port ' + 5001);
});
