const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// 你的代码

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
