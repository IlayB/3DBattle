import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';
import { getAuth } from 'firebase/auth';

import { firebaseConfig } from './firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);

export const messaging = getMessaging(firebaseApp);

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log("payload", payload)
            resolve(payload);
        });
    });

export const requestForToken = () => {
    return getToken(messaging, { vapidKey: "BPWRKU0cZTpZlMMK71z57nS-Bubi4NknfuIFC5NYpXVaPBfiPdA2BBOpyshiLqop-t4Em_amhl5X3vFBtI6dEvE" })
        .then((currentToken) => {
            if (currentToken) {
                console.log('current token for client: ', currentToken);
                // Perform any other neccessary action with the token
            } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
};

export const auth = getAuth(firebaseApp);
