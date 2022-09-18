const express = require('express');
const routes = require('./routes');

// import sequelize connection
// WORK REFERENCE - basically all activities inside - RUT-VIRT-FSF-PT-06-2022-U-LOLC/13-ORM/01-Activities - indicate below
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// WORK REFERENCE - basically all activities inside - RUT-VIRT-FSF-PT-06-2022-U-LOLC/13-ORM/01-Activities - indicate below
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
