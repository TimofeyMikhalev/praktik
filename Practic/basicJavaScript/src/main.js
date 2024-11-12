// //1
// function multiple(a, b) {
//     return a * b
// }
// multiple(2, 5)

// //2
// function buildDate(day, month, year) {
//     return `${day}/${month}/${year}`
// }
// buildDate(5, 3, 2020)

// //3
// function isAdult(age) { 
//     return (age >= 18) ? true : false
// }
// isAdult(24)
// isAdult(12)

// //4
// function getMonthByNumber(monthNumber) {
//     switch(monthNumber) {
//         case 1:
//             return 'Январь'
//         case 2: 
//             return 'Февраль'
//         case 3: 
//             return 'Март'
//         case 4:
//             return 'Апрель'
//         case 5: 
//             return 'Май'
//         case 6: 
//             return 'Июнь'
//         case 7:
//             return 'Июль'
//         case 8: 
//             return 'Август'
//         case 9: 
//             return 'Сентябрь'
//         case 10:
//             return 'Октябрь'
//         case 11: 
//             return 'Ноябрь'
//         case 12: 
//             return 'Декабрь'
//             default: return 'Не верное число'
//     }
// }   
// getMonthByNumber(4)

// //5

// function convertRub(valueRub, currency) {

//     let valuta = {
//         usd: 97,
//         eur: 105,
//         kz: 4.9,
//         aed: 26.5
//     }

//     switch(currency) {
//         case 'USD':
//             return valueRub * valuta.usd
//         case 'EUR': 
//             return valueRub * valuta.eur
//         case 'KZN': 
//             return valueRub * valuta.kz
//         case 'AED': 
//             return valuta * valuta.aed
//             default: 'Не знаю такую валюту'

//     }
// }
// convertRub(15, 'USD')

// //6

// function printNumbers() {
//     for(let i = -10; i <= 10;i++ ) {
//         return i
//     }
// }
// printNumbers()

// //7

// function printNumbersByRange(start, end) {
//     for(let i = start; i <= end; i++) {
//         return i
//     }
// }
// printNumbersByRange(-3, 2)

// //8

// function calculateNumbersSum(numbers) {
//     let sum = 0;

//     for(let i = 0;i < numbers.length;i++) {
//         sum += numbers[i]
//     }

//     return sum
// }
// calculateNumbersSum([0, 1, 2, 4, 8])

// //9

// function includes(numbers, number) {
//     let result = false

//     for(let key of numbers) {
//         if(key === number) {
//             return true
//         } 
//     }

//     return result
// }
// includes([0, 1, 2, 4, 8], 80)


// //10
// let arr = []   
// function createPerson(name, surname, age) {
//     let obj = {
//         name: name,
//         surname: surname,
//         age: age
//     }
//     arr.push(obj)
// }   
// createPerson('Tima', 'Smith', 20)
// createPerson('Dan', 'Fillin', 3)
// createPerson('Tina', 'Smith', 40)
// createPerson('Dani', 'Fillin', 93)

// //11
// function findOldest(people) {
//     return people.reduce((a, b) => {
//         return (b.age > a.age) ? b : a
//     })
// } 
// findOldest(arr).name


///Самостоятельная работа
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, doc, deleteDoc, setDoc } from "firebase/firestore"; 
import { MOVIS_STORAGE_KEY } from "./constans";
import { getFirestore } from "firebase/firestore";

let spisocFilms = document.querySelector('.spisoc__films');
let inputAdd = document.querySelector('.search__films');
let btnInput = document.querySelector('.search__btn');


// // Удаление фильма из списка
// spisocFilms.addEventListener('click', async function(e) {
//     const btn = e.target.closest('.crestic');
//     // if (btn) {
//     //     btn.parentElement.remove(); // Удаляет родительский элемент <li> при клике на crestic
//     //     fetchDocumentIds()  
//     // }
  
//     // Добавляем обработчик клика для удаления элемента
//     btn.addEventListener("click", async (event) => {
//         event.stopPropagation(); // Предотвращаем срабатывание других событий на элементе

//         // Удаляем элемент из Firestore
//         await deleteItem(doc.id);

//         // Удаляем элемент из DOM
//         btn.parentElement.remove()
//     });
// });







// Ставим на фильме знак "прочитано" (вешаем активный класс)



//Добавление фильма в список
btnInput.addEventListener('click', async function(e) {
    e.preventDefault();

    addMovies()

    // HTML-код нового элемента li
    let newLiHTML = `<li class="film"><span class="circle"></span>${inputAdd.value}<span class="crestic"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M22.3575 3.74463L14.6021 11.5L22.3575 19.2554C22.7689 19.6667 23 20.2247 23 20.8064C23 21.3882 22.7689 21.9462 22.3575 22.3575C21.9462 22.7689 21.3882 23 20.8064 23C20.2247 23 19.6667 22.7689 19.2554 22.3575L11.5 14.6022L3.74463 22.3575C3.33326 22.7689 2.77532 23 2.19355 23C1.61179 23 1.05385 22.7689 0.642476 22.3575C0.231106 21.9462 7.3961e-07 21.3882 7.3961e-07 20.8064C7.3961e-07 20.2247 0.231106 19.6667 0.642476 19.2554L8.39785 11.5L0.642476 3.74463C0.231106 3.33326 0 2.77532 0 2.19355C0 1.61179 0.231106 1.05385 0.642476 0.642477C1.05385 0.231106 1.61178 7.3961e-07 2.19355 7.3961e-07C2.77532 7.3961e-07 3.33326 0.231106 3.74463 0.642477L11.5 8.39785L19.2554 0.642477C19.6667 0.231106 20.2247 0 20.8064 0C21.3882 0 21.9462 0.231106 22.3575 0.642477C22.7689 1.05385 23 1.61178 23 2.19355C23 2.77532 22.7689 3.33326 22.3575 3.74463Z" fill="#F3F6F9"/></svg></span></li>`;

    // Добавляем новый элемент в конец ul
    spisocFilms.insertAdjacentHTML('beforeend', newLiHTML);

    // Очищаем input после добавления
    inputAdd.value = "";


    
});



const firebaseConfig = {
    apiKey: "AIzaSyAvj1cTLGp0IVZMmcv6dUweiyAk2D1jYS4",
    authDomain: "movie-37c3b.firebaseapp.com",
    projectId: "movie-37c3b",
    storageBucket: "movie-37c3b.firebasestorage.app",
    messagingSenderId: "549541735538",
    appId: "1:549541735538:web:155d0548ecc3ef0bd426eb"
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


  
//функция добавление данных в firestore
async function addMovies() {
  
    try {
      const docRef = await addDoc(collection(db, MOVIS_STORAGE_KEY), {
        movie: inputAdd.value,
    });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}


// Функция для удаления документа из Firestore
async function deleteItem(id) {
    try {
      await deleteDoc(doc(db, MOVIS_STORAGE_KEY, id));
      console.log(`Документ с ID ${id} успешно удален`);
    } catch (error) {
      console.error("Ошибка удаления документа:", error);
    }
}


async function displayItems() {

  try {
    const querySnapshot = await getDocs(collection(db, MOVIS_STORAGE_KEY));
    
    querySnapshot.forEach((doc) => {
      // Создаем элемент списка с текстом и кнопкой удаления
      const newFilm = document.createElement("li");
      newFilm.className = 'film'
      newFilm.innerHTML = `<span class="circle"></span>${doc.data().movie}<span class="crestic"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M22.3575 3.74463L14.6021 11.5L22.3575 19.2554C22.7689 19.6667 23 20.2247 23 20.8064C23 21.3882 22.7689 21.9462 22.3575 22.3575C21.9462 22.7689 21.3882 23 20.8064 23C20.2247 23 19.6667 22.7689 19.2554 22.3575L11.5 14.6022L3.74463 22.3575C3.33326 22.7689 2.77532 23 2.19355 23C1.61179 23 1.05385 22.7689 0.642476 22.3575C0.231106 21.9462 7.3961e-07 21.3882 7.3961e-07 20.8064C7.3961e-07 20.2247 0.231106 19.6667 0.642476 19.2554L8.39785 11.5L0.642476 3.74463C0.231106 3.33326 0 2.77532 0 2.19355C0 1.61179 0.231106 1.05385 0.642476 0.642477C1.05385 0.231106 1.61178 7.3961e-07 2.19355 7.3961e-07C2.77532 7.3961e-07 3.33326 0.231106 3.74463 0.642477L11.5 8.39785L19.2554 0.642477C19.6667 0.231106 20.2247 0 20.8064 0C21.3882 0 21.9462 0.231106 22.3575 0.642477C22.7689 1.05385 23 1.61178 23 2.19355C23 2.77532 22.7689 3.33326 22.3575 3.74463Z" fill="#F3F6F9"/></svg></span>`; // Отображаем поле name
      newFilm.dataset.id = doc.id; // Присваиваем ID документа в атрибут data-id

      // Создаем кнопку удаления (крестик)
      const deleteButton = document.createElement("span");
      deleteButton.className = 'crestic'
      deleteButton.innerHTML = `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.3" d="M22.3575 3.74463L14.6021 11.5L22.3575 19.2554C22.7689 19.6667 23 20.2247 23 20.8064C23 21.3882 22.7689 21.9462 22.3575 22.3575C21.9462 22.7689 21.3882 23 20.8064 23C20.2247 23 19.6667 22.7689 19.2554 22.3575L11.5 14.6022L3.74463 22.3575C3.33326 22.7689 2.77532 23 2.19355 23C1.61179 23 1.05385 22.7689 0.642476 22.3575C0.231106 21.9462 7.3961e-07 21.3882 7.3961e-07 20.8064C7.3961e-07 20.2247 0.231106 19.6667 0.642476 19.2554L8.39785 11.5L0.642476 3.74463C0.231106 3.33326 0 2.77532 0 2.19355C0 1.61179 0.231106 1.05385 0.642476 0.642477C1.05385 0.231106 1.61178 7.3961e-07 2.19355 7.3961e-07C2.77532 7.3961e-07 3.33326 0.231106 3.74463 0.642477L11.5 8.39785L19.2554 0.642477C19.6667 0.231106 20.2247 0 20.8064 0C21.3882 0 21.9462 0.231106 22.3575 0.642477C22.7689 1.05385 23 1.61178 23 2.19355C23 2.77532 22.7689 3.33326 22.3575 3.74463Z" fill="#F3F6F9"/>
      </svg>`;
      

      // Добавляем обработчик клика для удаления элемента
      deleteButton.addEventListener("click", async (event) => {
        event.preventDefault(); // Предотвращаем срабатывание других событий на элементе

        // Получаем ID из data-id атрибута элемента li
        const itemId = newFilm.dataset.id;

        // Удаляем элемент из Firestore
        await deleteItem(itemId);

        // Удаляем элемент из DOM
        newFilm.remove();
      });



      newFilm.appendChild(deleteButton); // Добавляем кнопку в элемент списка
      spisocFilms.appendChild(newFilm); // Добавляем элемент списка в список
    });
  } catch (error) {
    console.error("Ошибка отображения данных:", error);
  }
}


// Функция для удаления документа из Firestore
async function deleteItem(id) {
try {
    await deleteDoc(doc(db, MOVIS_STORAGE_KEY, id));
    console.log(`Документ с ID ${id} успешно удален`);
} catch (error) {
    console.error("Ошибка удаления документа:", error);
}
}

// Восстанавливаем состояние "ready" для фильмов при загрузке страницы
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const querySnapshot = await getDocs(collection(db, MOVIS_STORAGE_KEY));
    querySnapshot.forEach((docSnapshot) => {
      const filmData = docSnapshot.data();
      const filmElement = document.querySelector(`.film[data-id="${filmData.id}"]`);
      if (filmElement && filmData.ready) {
        filmElement.classList.add('ready');
      }
    });
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
  }
});

// Обработчик клика по списку фильмов
spisocFilms.addEventListener('click', async function(e) {
  const film = e.target.closest('.film');
  if (film && !e.target.closest('.crestic')) {
    const filmId = film.dataset.id;
    film.classList.toggle('ready');
    const isReady = film.classList.contains('ready');

    // Обновляем состояние "ready" в Firestore
    try {
      const filmDoc = doc(db, MOVIS_STORAGE_KEY, filmId);
      await setDoc(filmDoc, { id: filmId, ready: isReady }, { merge: true });
      console.log(`Состояние фильма с ID ${filmId} обновлено в Firestore.`);
    } catch (error) {
      console.error("Ошибка обновления состояния в Firestore:", error);
    }
  }
});

// Отображаем элементы при загрузке страницы
displayItems();