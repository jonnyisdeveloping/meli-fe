const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(require('./routes'));

app.listen(PORT, () => {
  console.log(`Server running & listening on ${PORT}`);
});
