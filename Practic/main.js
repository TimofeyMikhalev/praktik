//1
function multiple(a, b) {
    return a * b
}

multiple(2, 5)

//2
function buildDate(day, month, year) {
    return `${day}/${month}/${year}`
}

buildDate(5, 3, 2020)

//3
function isAdult(age) { 
    return (age >= 18) ? true : false
}

isAdult(24)
isAdult(12)

//4
function getMonthByNumber(monthNumber) {
    switch(monthNumber) {
        case 1:
            return 'Январь'
        case 2: 
            return 'Февраль'
        case 3: 
            return 'Март'
        case 4:
            return 'Апрель'
        case 5: 
            return 'Май'
        case 6: 
            return 'Июнь'
        case 7:
            return 'Июль'
        case 8: 
            return 'Август'
        case 9: 
            return 'Сентябрь'
        case 10:
            return 'Октябрь'
        case 11: 
            return 'Ноябрь'
        case 12: 
            return 'Декабрь'
            default: return 'Не верное число'
    }
}   

getMonthByNumber(4)

//5

function convertRub(valueRub, currency) {

    let valuta = {
        usd: 97,
        eur: 105,
        kz: 4.9,
        aed: 26.5
    }

    switch(currency) {
        case 'USD':
            return valueRub * valuta.usd
        case 'EUR': 
            return valueRub * valuta.eur
        case 'KZN': 
            return valueRub * valuta.kz
        case 'AED': 
            return valuta * valuta.aed
            default: 'Не знаю такую валюту'

    }
}

convertRub(15, 'USD')

//6

function printNumbers() {
    for(let i = -10; i <= 10;i++ ) {
        return i
    }
}

printNumbers()

//7

function printNumbersByRange(start, end) {
    for(let i = start; i <= end; i++) {
        return i
    }
}

printNumbersByRange(-3, 2)

//8

function calculateNumbersSum(numbers) {
    let sum = 0;

    for(let i = 0;i < numbers.length;i++) {
        sum += numbers[i]
    }

    return sum
}

calculateNumbersSum([0, 1, 2, 4, 8])

//9

function includes(numbers, number) {
    let result = false

    for(let key of numbers) {
        if(key === number) {
            return true
        } 
    }

    return result
}

includes([0, 1, 2, 4, 8], 80)


//10
let arr = []   

function createPerson(name, surname, age) {
    let obj = {
        name: name,
        surname: surname,
        age: age
    }
    arr.push(obj)
}   

createPerson('Tima', 'Smith', 20)
createPerson('Dan', 'Fillin', 3)
createPerson('Tina', 'Smith', 40)
createPerson('Dani', 'Fillin', 93)

//11

function findOldest(people) {
    return people.reduce((a, b) => {
        return (b.age > a.age) ? b : a
    })
} 

findOldest(arr).name