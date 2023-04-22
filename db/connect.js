const dotenv = require('dotenv');
dotenv.config();
const MongoClient  = require('mongodb').MongoClient;

let _db;


const initDb = (callback) => {
    if (_db) {
      console.log('Db is already initialized!');
      return callback(null, _db);
    }

    MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
    if (!_db) {
      throw Error('Db not initialized');
    }
    return _db;
  };
  
  module.exports = {
    initDb,
    getDb,
  };

//     let uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.olphhmy.mongodb.net/?retryWrites=true&w=majority`;
//     const connectDB = async() => {
//        await mongoose.connect(uri, {
//         useUnifiedTopology: true,
//         useNewUrlParser: true
//        });
//        console.log('db connected..!');

//     };


// const getDb = () => {
//     if (!_db ) {
//         throw Error('Db not initialized');
// }
// return _db;
// };

// moodule.exports = {
//     getDb,
//     connectDB
// }


// try{
//     await client.connect();

//     await listDatabases(client);

// } catch (e){
//     console.error(e);
// } finally{
//     await client.close();
// }

// }

// main().catch(console.error);

// async function listDatabases(client){
//     const databasesList = await client.db().admin().listDatabases();
//     console.log("Databases:");
//     databasesList.databases.forEach(db => {
//         console.log(`- ${db.name}`);
//     } )
// }