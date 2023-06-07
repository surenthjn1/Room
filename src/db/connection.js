const mongoose = require('mongoose');

// let url = "mongodb://localhost:27017/room-booking-app?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
let url = 'mongodb+srv://surenthboss1234:YX5TSumz15EvbbTO@cluster0.hxbpnsf.mongodb.net/';

(async () => {
  try {
    await mongoose.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (e) {
    console.log(`connection error ${e}`);
  }
})();

const db = mongoose.connection;

db.once("open", async () => {
  console.log(`✔ Successfully connected to mongodb database`);
});
db.on("error", () => {
  console.log(`connection error while connection at ${URL}`);
});
