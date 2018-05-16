"use strict";

const path = require("path");
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, "0.0.0.0", (err) => {
    if (err) {
        console.log(err);
    }
    console.info("==> Listening on port %s.", port);
});
