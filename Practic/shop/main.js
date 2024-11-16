let btnBasket = document.querySelector('.basket__btn');
let sectionCard = document.querySelector('.section__card');
let sectionCatalog = document.querySelector('.section__catalog');
let catalog = document.querySelector('.catalog__list');
let sectionBasket = document.querySelector('.section__check');


//Добавление товаров на страницу из api
async function getProducts() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let products = await response.json()

        // Находим контейнер для вывода
        catalog.innerHTML = '';  // Очищаем контейнер перед добавлением новых данных
        
        // Выводим несколько товаров (например, первые 5)
        products.slice(0, 8).forEach(product => {
            catalog.innerHTML += `
            <li class="catalog__item">
                <article class="catalog-card">
                    <div class="catalog-card__image">
                        <img src="${product.image}" alt="" width="191" height="232" loading="lazy">
                    </div>
                    <h3 class="catalog-card__title">${product.title}</h3>
                    <div class="catalog-card__model">${product.category}</div>
                        <div class="catalog-card__info" href="/">
                            <span class="catalog-card__info-price">$ ${product.price}</span>
                            <span class="catalog-card__info-basket">
                                <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.141708" width="34" height="34" rx="9" fill="#1A1F16"/>
                                    <path d="M14.3292 23.75C14.9505 23.75 15.4542 23.2463 15.4542 22.625C15.4542 22.0037 14.9505 21.5 14.3292 21.5C13.7079 21.5 13.2042 22.0037 13.2042 22.625C13.2042 23.2463 13.7079 23.75 14.3292 23.75Z" fill="white"/>
                                    <path d="M22.2042 23.75C22.8255 23.75 23.3292 23.2463 23.3292 22.625C23.3292 22.0037 22.8255 21.5 22.2042 21.5C21.5829 21.5 21.0792 22.0037 21.0792 22.625C21.0792 23.2463 21.5829 23.75 22.2042 23.75Z" fill="white"/>
                                    <path d="M24.2011 12.2462C24.1221 12.1495 24.0225 12.0717 23.9096 12.0183C23.7968 11.9649 23.6734 11.9373 23.5486 11.9375H12.8488L12.6333 10.7148C12.6103 10.5845 12.5422 10.4665 12.4408 10.3815C12.3395 10.2965 12.2115 10.25 12.0792 10.25H9.82921C9.68002 10.25 9.53695 10.3093 9.43146 10.4148C9.32597 10.5202 9.26671 10.6633 9.26671 10.8125C9.26671 10.9617 9.32597 11.1048 9.43146 11.2102C9.53695 11.3157 9.68002 11.375 9.82921 11.375H11.6074L13.2126 20.4727C13.2356 20.603 13.3038 20.721 13.4051 20.806C13.5064 20.891 13.6345 20.9375 13.7667 20.9375H22.7667C22.9159 20.9375 23.059 20.8782 23.1645 20.7727C23.2699 20.6673 23.3292 20.5242 23.3292 20.375C23.3292 20.2258 23.2699 20.0827 23.1645 19.9773C23.059 19.8718 22.9159 19.8125 22.7667 19.8125H14.2385L14.0402 18.6875H22.5361C22.7312 18.6873 22.9202 18.6196 23.0711 18.496C23.222 18.3725 23.3256 18.2005 23.3644 18.0093L24.3769 12.9468C24.4013 12.8243 24.3982 12.6979 24.3678 12.5767C24.3374 12.4556 24.2804 12.3427 24.2011 12.2462Z" fill="white"/>
                                </svg>  
                            </span>
                        </div>
                </article>
            </li>`  
        })
        addBasketHandlers()
    } catch(error) {
        console.log('Ошибка получения данных', error)
    }

}
getProducts()


//Переход в корзину
btnBasket.addEventListener('click', () => {
    sectionCatalog.classList.toggle('turn')
    sectionBasket.classList.toggle('show')
})



// Функция для добавления обработчиков на динамически созданные элементы
function addBasketHandlers() {
    const addBasketButtons = document.querySelectorAll('.catalog-card__info-basket');
    addBasketButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Добавлено в корзину');
        });
    });
}

