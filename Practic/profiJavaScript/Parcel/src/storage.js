import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { collection, doc,  addDoc, getDocs, writeBatch, serverTimestamp, query, orderBy } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDyac42aRaqGq1oLQnusFrTPKrJHlaqKMI",
  authDomain: "todo-5e8c5.firebaseapp.com",
  projectId: "todo-5e8c5",
  storageBucket: "todo-5e8c5.firebasestorage.app",
  messagingSenderId: "44471127411",
  appId: "1:44471127411:web:ede8988277eedeeb414906"
};

//взаимодействие с localStorage
export function createStorage(key) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    return {
        key,
        db,
        pull: async function() { //получает данные из localstorage
            const ref = collection(this.db, this.key)
            const q = query(ref, orderBy('createdAt'))
            const querySnapshot = await getDocs(q);

            const todos = [];

            querySnapshot.forEach((doc) => { 
                todos.push({
                    id: doc.id,
                    title: doc.data().title
                })
            });

            return todos
        },
        push: async function(todo) {
            try {
                //создаю новый документ в bd, для этого вызываю addDoc передаю в какую коллекцию нужно записать и что нужно записать
                const docRef = await addDoc(collection(this.db, this.key), {
                  title: todo.title,
                  status: todo.status,
                  createdAt: serverTimestamp()
                });
                //true исход
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                //false исход
                console.error("Error adding document: ", e);
            }
        },
        delete: async function(todos) {
            const batch = writeBatch(this.db);

            todos.forEach((todo) => {
                const ref = doc(this.db, this.key, todo.id);
                batch.delete(ref)
            })
            await batch.commit()

        }
    }
}