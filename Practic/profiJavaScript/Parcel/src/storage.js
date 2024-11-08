import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { collection, doc, setDoc, getDocs, writeBatch, serverTimestamp, query, orderBy, updateDoc } from "firebase/firestore";


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
                    title: doc.data().title,
                    done: doc.data().done
                })
            });

            return todos
        },
        push: async function(todo) {
            try {
                //создаю новый документ в bd, для этого вызываю addDoc передаю в какую коллекцию нужно записать и что нужно записать
                await setDoc(doc(this.db, this.key, todo.id), {
                  title: todo.title,
                  done: todo.done,
                  createdAt: serverTimestamp()
                });
              } catch (e) {
                //false исход
                console.error("Error adding document: ", e);
            }
        },
        delete: async function({ todosIds }) {
            const batch = writeBatch(this.db);

            todosIds.forEach((id) => {
                const ref = doc(this.db, this.key, id);
                batch.delete(ref)
            })
            await batch.commit()
        },
        update: async function(todo) {
            const ref = doc(this.db, this.key, todo.id);

            await updateDoc(ref, {
                done: todo.done
            });
        }
    }
}