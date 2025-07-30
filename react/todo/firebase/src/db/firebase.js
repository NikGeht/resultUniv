// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAz9BjGpKL0ydFLgPPC5O2SSuUYXyW3JHA',
	authDomain: 'react-todo-2d1d1.firebaseapp.com',
	databaseURL: 'https://react-todo-2d1d1-default-rtdb.firebaseio.com',
	projectId: 'react-todo-2d1d1',
	storageBucket: 'react-todo-2d1d1.firebasestorage.app',
	messagingSenderId: '269139484090',
	appId: '1:269139484090:web:86aa0df1844135c1e25183',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
