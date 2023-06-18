// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyAb2E1ZmxP0tZJ9XQhmmJVhlahXmVBNTAw",
    authDomain: "africhange-project.firebaseapp.com",
    projectId: "africhange-project",
    storageBucket: "africhange-project.appspot.com",
    messagingSenderId: "111758625240",
    appId: "1:111758625240:web:f290a7bd22f5cea76e0aad",
    measurementId: "G-R0CQZMRGD4"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
