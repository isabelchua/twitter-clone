import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBGPUYQhMUuM1dNzUQUInwy--knlDKsjnY',
	authDomain: 'twitter-clone-c94ff.firebaseapp.com',
	databaseURL: 'https://twitter-clone-c94ff.firebaseio.com',
	projectId: 'twitter-clone-c94ff',
	storageBucket: 'twitter-clone-c94ff.appspot.com',
	messagingSenderId: '446498713414',
	appId: '1:446498713414:web:df4dccd2407259ffdb7f47',
	measurementId: 'G-5L4K7DFMKV'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
