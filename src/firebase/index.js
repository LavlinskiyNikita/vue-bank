
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBe8ehzhNXYP5gUMYWhdacjM63FSnBcJIc",
  authDomain: "vuebank-f4be3.firebaseapp.com",
  projectId: "vuebank-f4be3",
  storageBucket: "vuebank-f4be3.appspot.com",
  messagingSenderId: "549874341572",
  appId: "1:549874341572:web:3c199eea88b36e972d1b91",
  measurementId: "G-844VP2XQM1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }