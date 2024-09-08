const express = require("express");
const app = express();
const cors = require("cors");

const api = require("./routes/api");
const preventerr = require("./utils/errh");
const ratelimiter = require("./utils/spam");

app.use(express.json());
app.use(cors());

app.use(ratelimiter)
app.use('/api', api);
app.get('/', api);
app.use(preventerr);

const port = 1604;
app.listen(port, () => {
  console.log(`launched on ${port}`);
});