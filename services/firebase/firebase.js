const firebase = require('firebase/app');
require('firebase/database');

// this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

if (!firebase.apps.length) {
    // initializing with the config object
    firebase.initializeApp(config);
}

// separting database API and authentication
const db = firebase.database();
// data = {
//     "priKey": "gov vote",
//     "key": "sub vote",
//     "title": "vote test",
//     "source": "0x1eA3027c0E61502EB995DCee098c6C905C3faB00",
//     "about": "Hello Vote"
// }
// db.ref('proposals').push(data, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("OK");
//     }
// });


module.exports = db;
