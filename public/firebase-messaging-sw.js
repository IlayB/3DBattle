importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyAPRPIoCHevKTJllkMwAerWhYquK6MRTN8',
  authDomain: 'dbattle-de1da.firebaseapp.com',
  projectId: 'dbattle-de1da',
  storageBucket: 'dbattle-de1da.appspot.com',
  messagingSenderId: '250496737996',
  appId: '1:250496737996:web:5468684bf23d92692a5869',
  measurementId: 'G-1YBWVP7642',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
