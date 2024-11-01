

let inputFilm = document.querySelector('.fname'),
    btnFilm = document.querySelector('.btn'),
    film = document.querySelector('.film'),
    imgMovie = document.querySelector('.imgMovie'),
    title = document.querySelector('.title'),
    year = document.querySelector('.year'),
    text = document.querySelector('.text'),
    noSearch = document.querySelector('.noSearch');



// Очищаем предыдущие результаты
function resetResults() {
    film.classList.remove('action');
    imgMovie.src = '';
    title.textContent = '';
    year.textContent = '';
    text.textContent = '';
    noSearch.textContent = '';

    window.localStorage.clear()
}


    
function searchFilm(e) {
    e.preventDefault();
   
    resetResults()

    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=8e055477')
        .then(response => response.json())
        .then(jsonData => {
            // Сравниваем данные JSON с переменной js
            if(jsonData.Title === inputFilm.value) {
                film.classList.add('action')
                
                imgMovie.src = jsonData.Poster
                title.textContent = jsonData.Title
                year.textContent = jsonData.Year
                text.textContent = jsonData.Type
            } else {
                noSearch.innerHTML = 'Фильмы не найдены'
            }

            // Сохраняем данные в Local Storage
            localStorage.setItem('filmData', JSON.stringify(jsonData));
        })
        .catch(error => console.error("Ошибка загрузки JSON:", error));
}   

btnFilm.addEventListener('click', searchFilm)



let infoTitle = document.querySelector('.info__title');


