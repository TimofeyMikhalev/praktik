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
import { collection, addDoc, getDocs, updateDoc, arrayRemove, doc, deleteField, deleteDoc } from "firebase/firestore"; 
import { createMovieMode } from "./model";
import { createStorageMovie } from "./storage";
import { createViewMovie } from "./view";
import { MOVIS_STORAGE_KEY } from "./constans";
import { getFirestore } from "firebase/firestore";

let crestic = document.querySelectorAll('.crestic');
let film = document.querySelectorAll('.film');
let spisocFilms = document.querySelector('.spisoc__films');
let inputAdd = document.querySelector('.search__films');
let btnInput = document.querySelector('.search__btn');


// Удаление фильма из списка
spisocFilms.addEventListener('click', function(e) {
    const btn = e.target.closest('.crestic');
    if (btn) {
        btn.parentElement.remove(); // Удаляет родительский элемент <li> при клике на crestic
       
    }
    // deleteField()
    deleteItem()
});



// async function deleteField() {
//     const docRef = doc(db, MOVIS_STORAGE_KEY);
//     try {
//         await updateDoc(docRef, {
//             movie: deleteField()
//         });
//         console.log("Поле успешно удалено");
//     } catch(error) {
//         console.error("Ошибка удаления поля:", error);
//     }   
// }








// Ставим на фильме знак "прочитано" (вешаем активный класс)
spisocFilms.addEventListener('click', function(e) {
    const film = e.target.closest('.film');
    if (film && !e.target.closest('.crestic')) {
        film.classList.toggle('ready'); // Переключаем класс "ready" для элемента <li>
    }
});


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

// Функция для получения данных из Firestore
async function fetchItems() {
    try {
        const querySnapshot = await getDocs(collection(db, MOVIS_STORAGE_KEY)); // Замените "items" на название вашей коллекции
        
        querySnapshot.forEach((doc) => {
            console.log(`${doc} => ${doc.data().movie}`);

            let newLiHTML = `<li class="film"><span class="circle"></span>${doc.data().movie}<span class="crestic"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M22.3575 3.74463L14.6021 11.5L22.3575 19.2554C22.7689 19.6667 23 20.2247 23 20.8064C23 21.3882 22.7689 21.9462 22.3575 22.3575C21.9462 22.7689 21.3882 23 20.8064 23C20.2247 23 19.6667 22.7689 19.2554 22.3575L11.5 14.6022L3.74463 22.3575C3.33326 22.7689 2.77532 23 2.19355 23C1.61179 23 1.05385 22.7689 0.642476 22.3575C0.231106 21.9462 7.3961e-07 21.3882 7.3961e-07 20.8064C7.3961e-07 20.2247 0.231106 19.6667 0.642476 19.2554L8.39785 11.5L0.642476 3.74463C0.231106 3.33326 0 2.77532 0 2.19355C0 1.61179 0.231106 1.05385 0.642476 0.642477C1.05385 0.231106 1.61178 7.3961e-07 2.19355 7.3961e-07C2.77532 7.3961e-07 3.33326 0.231106 3.74463 0.642477L11.5 8.39785L19.2554 0.642477C19.6667 0.231106 20.2247 0 20.8064 0C21.3882 0 21.9462 0.231106 22.3575 0.642477C22.7689 1.05385 23 1.61178 23 2.19355C23 2.77532 22.7689 3.33326 22.3575 3.74463Z" fill="#F3F6F9"/></svg></span></li>`;
            spisocFilms.insertAdjacentHTML('beforeend', newLiHTML);
            
        });
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
    }

    
}

fetchItems();

async function deleteItem(id) {
    try {
      await deleteDoc(doc(db, MOVIS_STORAGE_KEY, id));
      console.log(`Документ с ID ${id} успешно удален`);
    } catch (error) {
      console.error("Ошибка удаления документа:", error);
    }
}