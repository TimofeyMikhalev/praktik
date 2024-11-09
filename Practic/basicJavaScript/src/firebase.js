import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { MOVIS_STORAGE_KEY } from "./constans";

// const firebaseConfig = {
//   apiKey: "AIzaSyAvj1cTLGp0IVZMmcv6dUweiyAk2D1jYS4",
//   authDomain: "movie-37c3b.firebaseapp.com",
//   projectId: "movie-37c3b",
//   storageBucket: "movie-37c3b.firebasestorage.app",
//   messagingSenderId: "549541735538",
//   appId: "1:549541735538:web:155d0548ecc3ef0bd426eb"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


// //функция добавление данных в firestore
// async function addMovies() {

//   try {
//     const docRef = await addDoc(collection(db, MOVIS_STORAGE_KEY), {
//       movie: "Titanik",
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }

// // //функция получения данных
// async function getMovies() {
//   const querySnapshot = await getDocs(collection(db, MOVIS_STORAGE_KEY));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc} => ${doc.data().movie}`);
//   })
// }

// addMovies()
// getMovies()



