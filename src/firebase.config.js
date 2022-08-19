import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCL152sG_feR2yb9ZdNHBIQxrNRn6xbEK0',
    authDomain: 'quickly-hire-trial-project.firebaseapp.com',
    projectId: 'quickly-hire-trial-project',
    storageBucket: 'quickly-hire-trial-project.appspot.com',
    messagingSenderId: '362961533060',
    appId: '1:362961533060:web:f9c9a7ffeb32b281e92ad1',
};

initializeApp(firebaseConfig);

export const db = getFirestore();
