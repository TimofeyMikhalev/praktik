let btnBasket = document.querySelector('.basket__btn');
let sectionCard = document.querySelector('.section__card');
let sectionCatalog = document.querySelector('.section__catalog');
let sectionCheck = document.querySelector('.section__check');
let catalog = document.querySelector('.catalog__list');
let sectionBasket = document.querySelector('.section__check');
let containerCheck = document.querySelector('.section__check-cards');
let modalClose = document.querySelector('.back')
let productCard = document.querySelectorAll('.catalog__item');


let modalCards = document.querySelector('.section__card-body');
let btnPrev = document.querySelector('.section__card-back');
let btnPrevChech = document.querySelector('.section__check');

let promoBasket = document.querySelector('.basket__promo');
let sumBasket = document.querySelector('.basket__sum');



//Открытие карточки с подробной информацией
function openCard(product) {

    modalCards.innerHTML = `
        <div class="body__img">
            <img src="${product.image}" alt="" width="258" height="318">
        </div>
        <div class="body__info">
        <h2 class="info__title">${product.title}</h2>
        <div class="info__model">${product.category}</div>
        <div class="info__stars"></div>
        <div class="info__price">${product.price}</div>
        <p class="info__text">
            ${product.description}
        </p>
        <button class="btn__busket">
            <svg width="178" height="43" viewBox="0 0 178 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="178" height="43" rx="14" fill="#1A1F16"/>
                <path d="M45.3122 17.4406C45.173 17.3006 45.0075 17.1896 44.8252 17.114C44.6429 17.0383 44.4474 16.9996 44.25 17H41.25V16.25C41.25 14.8576 40.6969 13.5223 39.7123 12.5377C38.7277 11.5531 37.3924 11 36 11C34.6076 11 33.2723 11.5531 32.2877 12.5377C31.3031 13.5223 30.75 14.8576 30.75 16.25V17H27.75C27.3522 17 26.9706 17.158 26.6893 17.4393C26.408 17.7206 26.25 18.1022 26.25 18.5V28.625C26.25 30.4531 27.7969 32 29.625 32H42.375C43.2593 32.0003 44.1086 31.6545 44.7413 31.0367C45.0596 30.733 45.3132 30.3679 45.4865 29.9634C45.6599 29.559 45.7495 29.1236 45.75 28.6836V18.5C45.7506 18.3033 45.7122 18.1083 45.6371 17.9265C45.5619 17.7447 45.4515 17.5795 45.3122 17.4406ZM39 25.25H36.75V27.5C36.75 27.6989 36.671 27.8897 36.5303 28.0303C36.3897 28.171 36.1989 28.25 36 28.25C35.8011 28.25 35.6103 28.171 35.4697 28.0303C35.329 27.8897 35.25 27.6989 35.25 27.5V25.25H33C32.8011 25.25 32.6103 25.171 32.4697 25.0303C32.329 24.8897 32.25 24.6989 32.25 24.5C32.25 24.3011 32.329 24.1103 32.4697 23.9697C32.6103 23.829 32.8011 23.75 33 23.75H35.25V21.5C35.25 21.3011 35.329 21.1103 35.4697 20.9697C35.6103 20.829 35.8011 20.75 36 20.75C36.1989 20.75 36.3897 20.829 36.5303 20.9697C36.671 21.1103 36.75 21.3011 36.75 21.5V23.75H39C39.1989 23.75 39.3897 23.829 39.5303 23.9697C39.671 24.1103 39.75 24.3011 39.75 24.5C39.75 24.6989 39.671 24.8897 39.5303 25.0303C39.3897 25.171 39.1989 25.25 39 25.25ZM39.75 17H32.25V16.25C32.25 15.2554 32.6451 14.3016 33.3483 13.5983C34.0516 12.8951 35.0054 12.5 36 12.5C36.9946 12.5 37.9484 12.8951 38.6517 13.5983C39.3549 14.3016 39.75 15.2554 39.75 16.25V17Z" fill="white"/>
                <path d="M57.9531 14.7227H61.9961C63.7799 14.7227 65.1211 14.9896 66.0195 15.5234C66.918 16.0573 67.3672 16.9655 67.3672 18.248C67.3672 18.8014 67.2598 19.2995 67.0449 19.7422C66.8366 20.1784 66.5306 20.5397 66.127 20.8262C65.7233 21.1126 65.2253 21.3112 64.6328 21.4219V21.5195C65.2578 21.6172 65.8112 21.7962 66.293 22.0566C66.7747 22.3171 67.1523 22.6816 67.4258 23.1504C67.6992 23.6191 67.8359 24.2148 67.8359 24.9375C67.8359 25.8164 67.6309 26.5586 67.2207 27.1641C66.8171 27.7695 66.2441 28.2285 65.502 28.541C64.7598 28.847 63.8809 29 62.8652 29H57.9531V14.7227ZM59.6133 20.8457H62.3477C63.5911 20.8457 64.4505 20.6406 64.9258 20.2305C65.4076 19.8203 65.6484 19.2214 65.6484 18.4336C65.6484 17.6198 65.362 17.0339 64.7891 16.6758C64.2227 16.3177 63.3177 16.1387 62.0742 16.1387H59.6133V20.8457ZM59.6133 22.2422V27.584H62.582C63.8516 27.584 64.75 27.3366 65.2773 26.8418C65.8047 26.3405 66.0684 25.6667 66.0684 24.8203C66.0684 24.2799 65.9479 23.8177 65.707 23.4336C65.4727 23.0495 65.0885 22.7565 64.5547 22.5547C64.0273 22.3464 63.321 22.2422 62.4355 22.2422H59.6133ZM82.0742 18.2969H83.8613L79.2422 23.4629L84.2324 29H82.3281L77.4648 23.5703V29H75.834V18.2969H77.4648V23.4922L82.0742 18.2969ZM95.3945 23.6289C95.3945 24.5078 95.2806 25.2923 95.0527 25.9824C94.8249 26.6725 94.4961 27.2552 94.0664 27.7305C93.6367 28.2057 93.1159 28.5703 92.5039 28.8242C91.8984 29.0716 91.2116 29.1953 90.4434 29.1953C89.7272 29.1953 89.0697 29.0716 88.4707 28.8242C87.8783 28.5703 87.3639 28.2057 86.9277 27.7305C86.498 27.2552 86.1628 26.6725 85.9219 25.9824C85.6875 25.2923 85.5703 24.5078 85.5703 23.6289C85.5703 22.457 85.7689 21.4609 86.166 20.6406C86.5632 19.8138 87.1296 19.1855 87.8652 18.7559C88.6074 18.3197 89.4896 18.1016 90.5117 18.1016C91.4883 18.1016 92.3411 18.3197 93.0703 18.7559C93.806 19.1921 94.3757 19.8236 94.7793 20.6504C95.1895 21.4707 95.3945 22.4635 95.3945 23.6289ZM87.25 23.6289C87.25 24.4883 87.3639 25.2337 87.5918 25.8652C87.8197 26.4967 88.1712 26.985 88.6465 27.3301C89.1217 27.6751 89.7337 27.8477 90.4824 27.8477C91.2246 27.8477 91.8333 27.6751 92.3086 27.3301C92.7904 26.985 93.1452 26.4967 93.373 25.8652C93.6009 25.2337 93.7148 24.4883 93.7148 23.6289C93.7148 22.776 93.6009 22.0404 93.373 21.4219C93.1452 20.7969 92.7936 20.3151 92.3184 19.9766C91.8431 19.638 91.2279 19.4688 90.4727 19.4688C89.3594 19.4688 88.5423 19.8366 88.0215 20.5723C87.5072 21.3079 87.25 22.3268 87.25 23.6289ZM103.227 18.1016C104.561 18.1016 105.626 18.5605 106.42 19.4785C107.214 20.3965 107.611 21.7767 107.611 23.6191C107.611 24.8366 107.429 25.8587 107.064 26.6855C106.7 27.5124 106.186 28.1374 105.521 28.5605C104.864 28.9837 104.086 29.1953 103.188 29.1953C102.621 29.1953 102.123 29.1204 101.693 28.9707C101.264 28.821 100.896 28.6191 100.59 28.3652C100.284 28.1113 100.03 27.8346 99.8281 27.5352H99.7109C99.7305 27.7891 99.7533 28.0951 99.7793 28.4531C99.8118 28.8112 99.8281 29.1237 99.8281 29.3906V33.7852H98.1973V18.2969H99.5352L99.75 19.8789H99.8281C100.036 19.5534 100.29 19.2572 100.59 18.9902C100.889 18.7168 101.254 18.502 101.684 18.3457C102.12 18.1829 102.634 18.1016 103.227 18.1016ZM102.943 19.4688C102.201 19.4688 101.602 19.612 101.146 19.8984C100.697 20.1849 100.368 20.6146 100.16 21.1875C99.9518 21.7539 99.8411 22.4668 99.8281 23.3262V23.6387C99.8281 24.5436 99.9258 25.3086 100.121 25.9336C100.323 26.5586 100.652 27.0339 101.107 27.3594C101.57 27.6849 102.188 27.8477 102.963 27.8477C103.627 27.8477 104.18 27.6686 104.623 27.3105C105.066 26.9525 105.395 26.4544 105.609 25.8164C105.831 25.1719 105.941 24.4329 105.941 23.5996C105.941 22.3366 105.694 21.334 105.199 20.5918C104.711 19.8431 103.959 19.4688 102.943 19.4688ZM113.197 18.1016C113.998 18.1016 114.691 18.2122 115.277 18.4336C115.863 18.6484 116.316 18.9642 116.635 19.3809C116.954 19.7975 117.113 20.3053 117.113 20.9043C117.113 21.5488 116.938 22.0632 116.586 22.4473C116.234 22.8314 115.749 23.1081 115.131 23.2773V23.3555C115.567 23.4727 115.961 23.6419 116.312 23.8633C116.671 24.0781 116.954 24.3646 117.162 24.7227C117.377 25.0742 117.484 25.5137 117.484 26.041C117.484 26.64 117.322 27.1803 116.996 27.6621C116.671 28.1374 116.176 28.5117 115.512 28.7852C114.848 29.0586 114.008 29.1953 112.992 29.1953C112.491 29.1953 112.016 29.166 111.566 29.1074C111.117 29.0553 110.71 28.9772 110.346 28.873C109.981 28.7689 109.662 28.6452 109.389 28.502V27.0273C109.844 27.2487 110.378 27.444 110.99 27.6133C111.602 27.7826 112.263 27.8672 112.973 27.8672C113.52 27.8672 114.011 27.8053 114.447 27.6816C114.883 27.5514 115.229 27.3464 115.482 27.0664C115.743 26.7799 115.873 26.4056 115.873 25.9434C115.873 25.5202 115.759 25.1719 115.531 24.8984C115.303 24.6185 114.962 24.4134 114.506 24.2832C114.057 24.1465 113.487 24.0781 112.797 24.0781H111.361V22.75H112.543C113.461 22.75 114.193 22.6198 114.74 22.3594C115.287 22.099 115.561 21.6595 115.561 21.041C115.561 20.5072 115.349 20.11 114.926 19.8496C114.503 19.5827 113.897 19.4492 113.109 19.4492C112.523 19.4492 112.006 19.5111 111.557 19.6348C111.107 19.752 110.622 19.9212 110.102 20.1426L109.525 18.8438C110.085 18.5964 110.671 18.4108 111.283 18.2871C111.895 18.1634 112.533 18.1016 113.197 18.1016ZM121.654 18.2969V25.0254C121.654 25.1556 121.651 25.3249 121.645 25.5332C121.638 25.735 121.628 25.9531 121.615 26.1875C121.602 26.4154 121.589 26.6367 121.576 26.8516C121.57 27.0599 121.56 27.2324 121.547 27.3691L127.387 18.2969H129.379V29H127.865V22.4375C127.865 22.2292 127.868 21.9622 127.875 21.6367C127.882 21.3112 127.891 20.9922 127.904 20.6797C127.917 20.3607 127.927 20.1133 127.934 19.9375L122.113 29H120.111V18.2969H121.654ZM134.457 18.2969V22.7891H140.424V18.2969H142.045V29H140.424V24.166H134.457V29H132.826V18.2969H134.457ZM143.793 18.2969H145.531L147.895 24.5078C148.031 24.8724 148.158 25.224 148.275 25.5625C148.393 25.8945 148.497 26.2135 148.588 26.5195C148.679 26.8255 148.751 27.1217 148.803 27.4082H148.871C148.962 27.0827 149.092 26.6562 149.262 26.1289C149.431 25.5951 149.613 25.0514 149.809 24.498L152.045 18.2969H153.793L149.135 30.5723C148.887 31.2298 148.598 31.8027 148.266 32.291C147.94 32.7793 147.543 33.1536 147.074 33.4141C146.605 33.681 146.039 33.8145 145.375 33.8145C145.069 33.8145 144.799 33.7949 144.564 33.7559C144.33 33.7233 144.128 33.6842 143.959 33.6387V32.3398C144.102 32.3724 144.275 32.4017 144.477 32.4277C144.685 32.4538 144.9 32.4668 145.121 32.4668C145.525 32.4668 145.873 32.3887 146.166 32.2324C146.465 32.0827 146.723 31.8613 146.938 31.5684C147.152 31.2754 147.338 30.9271 147.494 30.5234L148.08 29.0195L143.793 18.2969Z" fill="white"/>
            </svg>
        </button>
        </div>
        `

    sectionCatalog.classList.toggle('turn')
    sectionCard.classList.toggle('show')

}

function addPromoBasket(product) {
    promoBasket.innerHTML += `<img src="${product.image}" alt="" width="80" height="80">`
}

//Сумма в корзине
function sumBasketFun(product) {
    // let a = Number(product.price)
    // let result = 0

    // for(let i = a; i < a.length;i++) {
    //     return console.log(a[i])
    // }
    // sumBasket.innerHTML = result
}

//Добавление товаров на страницу из api
async function getProducts() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let products = await response.json()
     
        // Находим контейнер для вывода
        catalog.innerHTML = '';  // Очищаем контейнер перед добавлением новых данных

        // Выводим несколько товаров (например, первые 8)
        products.slice(0, 8).forEach((product, index) => {
            const productCard = document.createElement('li');
            productCard.classList.add('catalog__item');
            productCard.innerHTML = `
                <li class="catalog__item">
                <article class="catalog-card">  
                    <div class="container__card" data-id="${index}">
                        <div class="catalog-card__image">
                            <img src="${product.image}" alt="" width="191" height="232" loading="lazy">
                        </div>
                        <h3 class="catalog-card__title">${product.title}</h3>
                        <div class="catalog-card__model">${product.category}</div>
                    </div>
            

                    <div class="catalog-card__info" href="/">
                        <span class="catalog-card__info-price">$ ${product.price}</span>
                        <span class="catalog-card__info-basket" data-id="${index}">
                            <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.141708" width="34" height="34" rx="9" fill="#1A1F16"/>
                                <path d="M14.3292 23.75C14.9505 23.75 15.4542 23.2463 15.4542 22.625C15.4542 22.0037 14.9505 21.5 14.3292 21.5C13.7079 21.5 13.2042 22.0037 13.2042 22.625C13.2042 23.2463 13.7079 23.75 14.3292 23.75Z" fill="white"/>
                                <path d="M22.2042 23.75C22.8255 23.75 23.3292 23.2463 23.3292 22.625C23.3292 22.0037 22.8255 21.5 22.2042 21.5C21.5829 21.5 21.0792 22.0037 21.0792 22.625C21.0792 23.2463 21.5829 23.75 22.2042 23.75Z" fill="white"/>
                                <path d="M24.2011 12.2462C24.1221 12.1495 24.0225 12.0717 23.9096 12.0183C23.7968 11.9649 23.6734 11.9373 23.5486 11.9375H12.8488L12.6333 10.7148C12.6103 10.5845 12.5422 10.4665 12.4408 10.3815C12.3395 10.2965 12.2115 10.25 12.0792 10.25H9.82921C9.68002 10.25 9.53695 10.3093 9.43146 10.4148C9.32597 10.5202 9.26671 10.6633 9.26671 10.8125C9.26671 10.9617 9.32597 11.1048 9.43146 11.2102C9.53695 11.3157 9.68002 11.375 9.82921 11.375H11.6074L13.2126 20.4727C13.2356 20.603 13.3038 20.721 13.4051 20.806C13.5064 20.891 13.6345 20.9375 13.7667 20.9375H22.7667C22.9159 20.9375 23.059 20.8782 23.1645 20.7727C23.2699 20.6673 23.3292 20.5242 23.3292 20.375C23.3292 20.2258 23.2699 20.0827 23.1645 19.9773C23.059 19.8718 22.9159 19.8125 22.7667 19.8125H14.2385L14.0402 18.6875H22.5361C22.7312 18.6873 22.9202 18.6196 23.0711 18.496C23.222 18.3725 23.3256 18.2005 23.3644 18.0093L24.3769 12.9468C24.4013 12.8243 24.3982 12.6979 24.3678 12.5767C24.3374 12.4556 24.2804 12.3427 24.2011 12.2462Z" fill="white"/>
                            </svg>  
                        </span>
                    </div>
                </article>
            </li>
            `;
            catalog.append(productCard)
        })


        // Обработчик клика для карточки
        let containerCard = document.querySelectorAll('.container__card');
        containerCard.forEach(card => {
            card.addEventListener('click', (event) => {
                const productId = event.currentTarget.dataset.id; // Получаем индекс
                const product = products[productId]; // Находим нужный объект
                openCard(product); // Передаем объект в функцию
            });
        });

        // Обработчик клика для кнопки корзины
        let btnCardBasket = document.querySelectorAll('.catalog-card__info-basket'); 
        btnCardBasket.forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.currentTarget.dataset.id; // Получаем индекс
                const product = products[productId]; // Находим нужный объект
                addPromoBasket(product); // Передаем объект в функцию
                sumBasketFun(product)
                
                containerCheck.innerHTML +=  `
                <li class="check__cards-item">
                <div class="check__img">
                    <img src="${product.image}" alt="" width="203" height="254">
                </div>
                <div class="check__info">
                    <h2 class="info__title">${product.title}</h2>
                    <div class="info__model">${product.category}</div>
                    <p class="info__text">
                        ${product.description}                        
                    </p>
                    <div class="info__stars">
                        <div class="stars">
                            <span class="star active" data-value="1">★</span>
                            <span class="star active" data-value="2">★</span>
                            <span class="star active" data-value="3">★</span>
                            <span class="star" data-value="4">★</span>
                            <span class="star" data-value="5">★</span>
                          </div>
                          <div class="info">
                            <span id="ratingText">3 </span>/ 5
                          </div>
                    </div>
                    <div class="info__price">
                        $ ${product.price} x 1
                        <div class="info__counter">
                            <button class="minus" id="decrease">-</button>
                            <span class="summ" id="number">0</span>
                            <button class="plus" id="increase">+</button>
                        </div>
                    </div>
                </div>
            </li>
                `
 
            });
        });



    } catch(error) {
        console.log('Ошибка получения данных', error)
    }

}
getProducts()


//Переход в корзину
btnBasket.addEventListener('click', () => {
    sectionCatalog.classList.toggle('turn')
    sectionBasket.classList.toggle('show')
    sumBasket.classList.toggle('show')
})

//Кнопка назад к списку товаров из секции с каточкой товара
btnPrev.addEventListener('click', () => {
    sectionCard.classList.toggle('show')
    sectionCatalog.classList.toggle('turn')

})

//Кнопка назад к списку товаров из секции корзина
btnPrevChech.addEventListener('click', () => {
    sectionCheck.classList.toggle('show')
    sectionCatalog.classList.toggle('turn')
    sumBasket.classList.toggle('show')
})



