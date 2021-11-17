import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyNn24FmsXt9fZSiS2X4tyvvDxoZ7VtgM",
  authDomain: "food-mall-6787e.firebaseapp.com",
  projectId: "food-mall-6787e",
  storageBucket: "food-mall-6787e.appspot.com",
  messagingSenderId: "852224054105",
  appId: "1:852224054105:web:82ee994c278cd9d0917248",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;