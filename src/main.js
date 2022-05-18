import { createApp } from 'vue'
import useVuelidate from '@vuelidate/core'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filter/date.filter'
import 'materialize-css/dist/js/materialize.min.js'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe8ehzhNXYP5gUMYWhdacjM63FSnBcJIc",
  authDomain: "vuebank-f4be3.firebaseapp.com",
  projectId: "vuebank-f4be3",
  storageBucket: "vuebank-f4be3.appspot.com",
  messagingSenderId: "549874341572",
  appId: "1:549874341572:web:079f04abb24935f22d1b91",
  measurementId: "G-8M7J8WWN21"
};

initializeApp(firebaseConfig);



const app = createApp(App)

app.use(router)

app.mount('#app')


