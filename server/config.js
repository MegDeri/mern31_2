const dotenv = require('dotenv');
dotenv.config();

module.exports = {
      PORT: process.env.PORT,
      DB: process.env.DB
      //DB: 'mongodb+srv://MegDeri:thbjSE8xIAxmNrO5@cluster0-ej9s1.mongodb.net/test?retryWrites=true&w=majority',
   }