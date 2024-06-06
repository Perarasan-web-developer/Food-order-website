// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEuDsyqcQdvx67LHL079FLibItrwtjaxQ",
  authDomain: "food-order-application-263f7.firebaseapp.com",
  projectId: "food-order-application-263f7",
  storageBucket: "food-order-application-263f7.appspot.com",
  messagingSenderId: "583410251060",
  appId: "1:583410251060:web:d60b0210e4f78724b92161",
  measurementId: "G-6909L1ZCWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);