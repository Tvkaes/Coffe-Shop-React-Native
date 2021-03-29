import firebase from "firebase/app"

const firebaseConfig = {
    
        apiKey: "AIzaSyBJw_DALZNeNh7N2cCd9oVXvEObbAzZByQ",
        authDomain: "coffe-shop-ffa79.firebaseapp.com",
        projectId: "coffe-shop-ffa79",
        storageBucket: "coffe-shop-ffa79.appspot.com",
        messagingSenderId: "1073680010945",
        appId: "1:1073680010945:web:1814fd043ad2a6c8650e40",
        measurementId: "G-W8HBZTHZ20"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);