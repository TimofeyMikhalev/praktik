class Animal {
    constructor(name) {
        this.name = name
    }

    getAnimal() {
        return `${this.name} hello`
    }
}

const aimal = new Animal('Tima')
console.log(aimal.getAnimal())


//Классы могут наследоваться друг от друга с использованием ключевого слова 'extends'.
class Dog extends Animal {
    constructor(name) {
        super(name, 'dog')
        this.name = name
    }

    bark() {
        return `${this.name} hi`
    }
}

const myDog = new Dog('Rich')
console.log(myDog.getAnimal())
console.log(myDog.bark())


//Методы, помеченные как 'static', вызываются на самом классе, а не на экземплярах.
class MathHelp {
    static squre(num) {
        return num * num
    }
}

console.log(MathHelp.squre(4))

//Используйте 'get' и 'set' для определения свойств, доступ к которым осуществляется как к обычным.
class Circle {
    constructor(radios) {
        this.radios = radios
    }

    get diametr() {
        return this.radios * 2
    }

    set diametr(diametr) {
        this.radios = diametr / 2
    }
}

const circle = new Circle(5)
console.log(circle.diametr)
circle.diametr = 20
console.log(circle.radios)

//Для создания приватных свойств используйте '#'
class BankAccount {
    #balance;

    constructor(initalBalance) {
        this.#balance = initalBalance
    }

    getBalance() {
        return this.#balance
    }

    deposit(amount) {
        this.#balance += amount
    }
}

const account = new BankAccount(100);
console.log(account.getBalance())
account.deposit(50)
console.log(account.getBalance())



//Праактика
//1
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    option() {
        return `Бренд: ${this.brand}, Модель: ${this.model}, Год: ${this.year} `
    }
}

const autoCar = new Car('BMW', 'X5', 2020)
console.log(autoCar.option())

//2
class ElectricCar extends Car {
    constructor(brand, model, year, batteryCapacity) {
        super(brand, model, year) 
        this.batteryCapacity = batteryCapacity
    }

    batteryEnergi() {
        return `Батарея: ${this.batteryCapacity}`
    }



}

const cars = new ElectricCar('Reno', 'F-50', 1810, 50)
console.log(cars.option())
console.log(cars.batteryEnergi())


//3
class Caru {

    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    get area() {
        return this.year
    } 

    set area(value){
        if(value < 1889) {
            console.log('No')
        } else {
            this.year = value
        }
    }
}

const carsi = new Caru('Reno', 'F-50', 1810)
carsi.area = 2110;
console.log(carsi)


//temperatura
//Представьте, что вы хотите создать класс для управления температурой, но температура в градусах Цельсия должна быть между -273.15 и 1000.
class Temperature {
    constructor(celsius) {
        this._celsius = celsius
    }

    // Геттер для температуры
    get celsius() {
        return this._celsius
    }

    // Сеттер с проверкой
    set celsius(value){
        if(value < -273) {
            console.log("Температура не может быть ниже абсолютного нуля!")
        } else if(value > 1000) {
            console.log("Перебор!")
        } else {
            this._celsius = value
        }
    }
}

const temp = new Temperature(300)
console.log(temp.celsius)
temp.celsius = 500; 
console.log(temp.celsius); // 500


//Задача: Управление банковским счётом
class BankAccountBig {
    // Приватное свойство для хранения баланса
    #balance = 0
    
    // Геттер для получения текущего баланса
    get balance() {
        return this.#balance
    }   

    // Сеттер для установки нового баланса
    set balance(value) {
        if(value < 0) {
            console.error("Ошибка: баланс не может быть отрицательным");
        } else {
            this.#balance = value
        }
    }
    // Метод для пополнения счёта
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Баланс пополнен на ${amount}`);
        } else {
            console.error("Ошибка: сумма для пополнения должна быть положительной");
        }
    }

    // Метод для снятия денег со счёта
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Со счёта снято ${amount}`);
        } else if (amount > this.#balance) {
            console.error("Ошибка: недостаточно средств");
        } else {
            console.error("Ошибка: сумма для снятия должна быть положительной");
        }
    }
}

// const cash = new BankAccountBig()
// // Пополняем счёт
// cash.deposit(1000)
// console.log(cash.balance); 
// // Снимаем деньги
// cash.withdraw(500);
// console.log(cash.balance); // 500

// // Пытаемся установить отрицательный баланс
// cash.balance = -100; // Ошибка: баланс не может быть отрицательным

// // Пытаемся снять больше, чем есть
// cash.withdraw(600); // Ошибка: недостаточно средств
// console.log(cash.balance); // 500




//Пример MVC на JavaScript

//Model (работает с данными):
class TaskModel {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
    }

    getTasks() {
        return this.tasks;
    }
}

//View (отображение данных):
class TaskView {
    constructor() {
        this.app = document.querySelector("#app");
        this.taskInput = document.createElement("input");
        this.taskInput.type = "text";
        this.addButton = document.createElement("button");
        this.addButton.textContent = "Добавить";
        this.taskList = document.createElement("ul");

        this.app.append(this.taskInput, this.addButton, this.taskList);
    }

    displayTasks(tasks) {
        this.taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const taskItem = document.createElement("li");
            taskItem.textContent = task;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Удалить";
            deleteButton.dataset.index = index;
            taskItem.append(deleteButton);
            this.taskList.append(taskItem);
        });
    }

    bindAddTask(handler) {
        this.addButton.addEventListener("click", () => {
            handler(this.taskInput.value);
            this.taskInput.value = "";
        });
    }

    bindDeleteTask(handler) {
        this.taskList.addEventListener("click", (event) => {
            if (event.target.tagName === "BUTTON") {
                const index = event.target.dataset.index;
                handler(index);
            }
        });
    }
}

//Controller (управление данными):
class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddTask(this.handleAddTask.bind(this));
        this.view.bindDeleteTask(this.handleDeleteTask.bind(this));

        this.updateView();
    }

    handleAddTask(task) {
        this.model.addTask(task);
        this.updateView();
    }

    handleDeleteTask(index) {
        this.model.removeTask(index);
        this.updateView();
    }

    updateView() {
        const tasks = this.model.getTasks();
        this.view.displayTasks(tasks);
    }
}

// Инициализация
const app = new TaskController(new TaskModel(), new TaskView());



//Задача 1: Простое счётчик (учимся разделять логику)
class ModelStetchik {
    constructor() {
        this.sum = 0
    }
    minusSum(value) {
        this.sum += value
    }
    plusSum() {
        this.sum -= value
    }
    sumSum() {
        return this.sum
    }
}

class ViewStetchik {
    constructor() {
        this.shectik = document.querySelector('#schetchik')
        this.display = document.createElement('div')
        this.plusBtn = document.createElement('button')
        this.plusBtn.textContent = '+'

        this.shectik.append(this.display, this.plusBtn)
    }

    displayChechik(sum) {
        this.display.innerHTML = ''
    }
}

class ControllerStetchik {
    constructor(model, view) {
        this.model = model
        this.view = view

        
    }
}

// Инициализация
const shetchik = new ControllerStetchik(new ModelStetchik(), new ViewStetchik());