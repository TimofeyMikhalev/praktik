//1
function multiple(a, b) {
    return a * b;
}
multiple(2, 5);
//2
function buildDate(day, month, year) {
    return `${day}/${month}/${year}`;
}
buildDate(5, 3, 2020);
//3
function isAdult(age) {
    return age >= 18 ? true : false;
}
isAdult(24);
isAdult(12);
//4
function getMonthByNumber(monthNumber) {
    switch(monthNumber){
        case 1:
            return "\u042F\u043D\u0432\u0430\u0440\u044C";
        case 2:
            return "\u0424\u0435\u0432\u0440\u0430\u043B\u044C";
        case 3:
            return "\u041C\u0430\u0440\u0442";
        case 4:
            return "\u0410\u043F\u0440\u0435\u043B\u044C";
        case 5:
            return "\u041C\u0430\u0439";
        case 6:
            return "\u0418\u044E\u043D\u044C";
        case 7:
            return "\u0418\u044E\u043B\u044C";
        case 8:
            return "\u0410\u0432\u0433\u0443\u0441\u0442";
        case 9:
            return "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C";
        case 10:
            return "\u041E\u043A\u0442\u044F\u0431\u0440\u044C";
        case 11:
            return "\u041D\u043E\u044F\u0431\u0440\u044C";
        case 12:
            return "\u0414\u0435\u043A\u0430\u0431\u0440\u044C";
        default:
            return "\u041D\u0435 \u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E";
    }
}
getMonthByNumber(4);
//5
function convertRub(valueRub, currency) {
    let valuta = {
        usd: 97,
        eur: 105,
        kz: 4.9,
        aed: 26.5
    };
    switch(currency){
        case "USD":
            return valueRub * valuta.usd;
        case "EUR":
            return valueRub * valuta.eur;
        case "KZN":
            return valueRub * valuta.kz;
        case "AED":
            return valuta * valuta.aed;
        default:
            "\u041D\u0435 \u0437\u043D\u0430\u044E \u0442\u0430\u043A\u0443\u044E \u0432\u0430\u043B\u044E\u0442\u0443";
    }
}
convertRub(15, "USD");
//6
function printNumbers() {
    for(let i = -10; i <= 10; i++)return i;
}
printNumbers();
//7
function printNumbersByRange(start, end) {
    for(let i = start; i <= end; i++)return i;
}
printNumbersByRange(-3, 2);
//8
function calculateNumbersSum(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++)sum += numbers[i];
    return sum;
}
calculateNumbersSum([
    0,
    1,
    2,
    4,
    8
]);
//9
function includes(numbers, number) {
    let result = false;
    for (let key of numbers){
        if (key === number) return true;
    }
    return result;
}
includes([
    0,
    1,
    2,
    4,
    8
], 80);
//10
let arr = [];
function createPerson(name, surname, age) {
    let obj = {
        name: name,
        surname: surname,
        age: age
    };
    arr.push(obj);
}
createPerson("Tima", "Smith", 20);
createPerson("Dan", "Fillin", 3);
createPerson("Tina", "Smith", 40);
createPerson("Dani", "Fillin", 93);
//11
function findOldest(people) {
    return people.reduce((a, b)=>{
        return b.age > a.age ? b : a;
    });
}
findOldest(arr).name;
///Самостоятельная работа
let crestic = document.querySelectorAll(".crestic");
let film = document.querySelectorAll(".film");
let spisocFilms = document.querySelector(".spisoc__films");
let inputAdd = document.querySelector(".search__films");
let btnInput = document.querySelector(".search__btn");
// Удаление фильма из списка
spisocFilms.addEventListener("click", function(e) {
    const btn = e.target.closest(".crestic");
    if (btn) btn.parentElement.remove(); // Удаляет родительский элемент <li> при клике на crestic
});
// Ставим на фильме знак "прочитано" (вешаем активный класс)
spisocFilms.addEventListener("click", function(e) {
    const film = e.target.closest(".film");
    if (film && !e.target.closest(".crestic")) film.classList.toggle("ready"); // Переключаем класс "ready" для элемента <li>
});
//Добавление фильма в список
function inputSend(e) {
    e.preventDefault();
    // HTML-код нового элемента li
    let newLiHTML = `<li class="film"><span class="circle"></span>${inputAdd.value}<span class="crestic"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M22.3575 3.74463L14.6021 11.5L22.3575 19.2554C22.7689 19.6667 23 20.2247 23 20.8064C23 21.3882 22.7689 21.9462 22.3575 22.3575C21.9462 22.7689 21.3882 23 20.8064 23C20.2247 23 19.6667 22.7689 19.2554 22.3575L11.5 14.6022L3.74463 22.3575C3.33326 22.7689 2.77532 23 2.19355 23C1.61179 23 1.05385 22.7689 0.642476 22.3575C0.231106 21.9462 7.3961e-07 21.3882 7.3961e-07 20.8064C7.3961e-07 20.2247 0.231106 19.6667 0.642476 19.2554L8.39785 11.5L0.642476 3.74463C0.231106 3.33326 0 2.77532 0 2.19355C0 1.61179 0.231106 1.05385 0.642476 0.642477C1.05385 0.231106 1.61178 7.3961e-07 2.19355 7.3961e-07C2.77532 7.3961e-07 3.33326 0.231106 3.74463 0.642477L11.5 8.39785L19.2554 0.642477C19.6667 0.231106 20.2247 0 20.8064 0C21.3882 0 21.9462 0.231106 22.3575 0.642477C22.7689 1.05385 23 1.61178 23 2.19355C23 2.77532 22.7689 3.33326 22.3575 3.74463Z" fill="#F3F6F9"/></svg></span></li>`;
    // Добавляем новый элемент в конец ul
    spisocFilms.insertAdjacentHTML("beforeend", newLiHTML);
    // Очищаем input после добавления
    inputAdd.value = "";
}
btnInput.addEventListener("click", inputSend);

//# sourceMappingURL=index.3b2c5e89.js.map
