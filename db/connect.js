const mongoose = require ('mongoose');


    const uri = "mongodb+srv://Jonathanup:Anggi17051997@cluster0.olphhmy.mongodb.net/?retryWrites=true&w=majority";

    const connectDB = async() => {
       await mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
       });
       console.log('db connected..!');

    };

    // const client = new MongoClient(uri);

module.exports = connectDB;


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