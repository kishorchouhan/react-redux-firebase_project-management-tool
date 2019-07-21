import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC5glac8-fvk293MMmtb4bn2vuPqE1Yozg",
  authDomain: "my-marioplan-project.firebaseapp.com",
  databaseURL: "https://my-marioplan-project.firebaseio.com",
  projectId: "my-marioplan-project",
  storageBucket: "",
  messagingSenderId: "774555431044",
  appId: "1:774555431044:web:03ff401816fb13ce"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
