//Пример данных которые я могу использовать(потом замениться настоящимим данными)
// const MEMES_MOCK = [
//     {
//         id: '87743020',
//         name: 'Two Buttons',
//         url: 'https://i.imgflip.com/1g8my4.jpg',
//         width: 600,
//         heigth: 908
//     },
//     {
//         id: '112126428',
//         name: 'Distracted Boyfriend',
//         url: 'https://i.imgflip.com/1ur9b0.jpg',
//         width: 1200,
//         heigth: 800
//     }
    
// ]

class API {
    constructor() {
        this.baseUrl = 'https://api.imgflip.com';
    }

    getMemes() {
        return fetch(`${this.baseUrl}/get_memes`)
            .then(data => {
                return data.json();
            });
    }
}




//Функциональный метод
// let mem = document.querySelector('#mem');
// let previe = document.querySelector('.previe');
// let spisokMems = document.getElementById("mem");
// let imgMem = document.querySelector('.img_mem');
// let textUp = document.querySelector('.text_up');
// let textDown = document.querySelector('.text_down');


// function searchFilm() {
   
//     fetch('https://api.imgflip.com/get_memes')
//         .then(response => response.json())
//         .then(jsonData => {
//             if(jsonData.success) {  
//                 jsonData.data.memes.forEach(meme => {
//                     // Создаем новый элемент option
//                     const option = document.createElement('option');
//                     option.value = meme.url; // Устанавливаем URL как значение опции
//                     option.textContent = meme.name; // Устанавливаем имя мема как текст опции
//                     mem.appendChild(option); // Добавляем опцию в select
//                 });
//             }
    
//         })

// }   
// searchFilm()

// // Обработчик события на выбор элемента
// mem.addEventListener('change', (event) => {
//     const selectedUrl = event.target.value;
//     if (selectedUrl) {
//         imgMem.classList.add('action')
//         imgMem.src = selectedUrl
//     }
// });

// // Обработчик события ввода текста сверху и снизу картинки
// let upInput = document.getElementById('ltext');
// let upText = document.querySelector('.text_up');
// let downInput = document.getElementById('ftext');
// let downText = document.querySelector('.text_down');

// upInput.addEventListener('input', (e) => {
//     upText.textContent = e.target.value
// })

// downInput.addEventListener('input', (e) => {
//     downText.textContent = e.target.value
// })
