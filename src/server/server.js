const app = require('./app');

// const port = process.ENV.PORT || 5000;
const port = 5000;

app.listen(port, () => {
  console.log(`server up on ${port}`);
});
