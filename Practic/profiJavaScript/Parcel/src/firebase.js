import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDyac42aRaqGq1oLQnusFrTPKrJHlaqKMI",
  authDomain: "todo-5e8c5.firebaseapp.com",
  projectId: "todo-5e8c5",
  storageBucket: "todo-5e8c5.firebasestorage.app",
  messagingSenderId: "44471127411",
  appId: "1:44471127411:web:ede8988277eedeeb414906"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


//функция добавление данных в firestore
async function add() {
  try {
    //создаю новый документ в bd, для этого вызываю addDoc передаю в какую коллекцию нужно записать и что нужно записать
    const docRef = await addDoc(collection(db, "todos"), {
      title: "Задача 3",
      status: "active"
    });
    //true исход
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    //false исход
    console.error("Error adding document: ", e);
  }
}

//функция получения данных
async function get() {
  const querySnapshot = await getDocs(collection(db, "todos"));

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().title}`);
  });
}

add()
get()