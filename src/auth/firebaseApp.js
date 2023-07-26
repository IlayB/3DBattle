import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';
import { getAuth } from 'firebase/auth';

import { firebaseConfig } from './firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);

export const messaging = getMessaging(firebaseApp);

export const auth = getAuth(firebaseApp);
