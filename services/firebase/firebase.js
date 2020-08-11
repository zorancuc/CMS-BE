const firebase = require('firebase/app');
require('firebase/database');

// this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
    apiKey: "AIzaSyDbPG-hPEgt745jbWqhi9szepQAHiUbJEQ",
    authDomain: "cms-gov-aea3e.firebaseapp.com",
    databaseURL: "https://cms-gov-aea3e.firebaseio.com",
    projectId: "cms-gov-aea3e",
    storageBucket: "cms-gov-aea3e.appspot.com",
    messagingSenderId: "361411567573",
    appId: "1:361411567573:web:3bd948ac29c04b3c84e75c",
    measurementId: "G-VNJKQT61WC"
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
