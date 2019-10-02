module.exports = {
  PORT: 8000,
  DB: process.env.DB
    ? process.env.DB
    : 'mongodb+srv://MegDeri:thbjSE8xIAxmNrO5@cluster0-ej9s1.mongodb.net/test?retryWrites=true&w=majority'
};