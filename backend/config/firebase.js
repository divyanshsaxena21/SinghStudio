const admin = require('firebase-admin');
const serviceAccount = require('../singh-studio-f3414-firebase-adminsdk-fbsvc-76d5bfc0da.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
