const express = require('express');
const app = express();
const port = 3000;
const router=require("./routes/task.js")



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
