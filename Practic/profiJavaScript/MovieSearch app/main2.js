const filmInfo = document.getElementById('filmInfo');

// Извлекаем данные из Local Storage
const jsonData = JSON.parse(localStorage.getItem('filmData'));

if (jsonData) {
    // Отображаем информацию на второй странице
    filmInfo.innerHTML = `
        <a class="prev" href="http://127.0.0.1:5501/profiJavaScript/MovieSearch%20app/index.html">Назад к поиску</a>

        <div class="content">
            <img class="content__img" src="${jsonData.Poster}" alt="">
            
            <div class="info">
                <h3 class="info__title">${jsonData.Title}</h3>
                <ul class="content__info">
                    <li class="data"><span>Год: </span>${jsonData.Year}</li>
                    <li class="reiting"><span>Рейтинг: </span>${jsonData.imdbRating}</li>
                    <li class="data__entry"><span>Дата выхода: </span>${jsonData.Released}</li>
                    <li class="time"><span>Продолжительность: </span>${jsonData.Runtime}</li>
                    <li class="genre"><span>Жанр: </span>${jsonData.Genre}</li>
                    <li class="direction"><span>Режиссер: </span>${jsonData.Director}</li>
                    <li class="scenario"><span>Сценарий: </span>${jsonData.Writer}</li>
                    <li class="actors"><span>Актеры: </span>${jsonData.Actors}</li>
                </ul>
            </div>
          
        </div>

        <div class="film__text">
            ${jsonData.Plot}
        </div>
    `;
} else {
    filmInfo.textContent = 'Данные о фильме не найдены.';
}