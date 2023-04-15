// прототипне наслідування, класи, екземпляри, інтерфейс

// const objA = {
//     a: 8
// }

// const objB = Object.create(objA)

// objB.b = 9

// const objC = Object.create(objB)

// objC.c = 10

// console.log(objC.b)

// створюємо лічильник

// const decrementBtn = document.querySelector('[data-action="decrement"]')
// const incrementBtn = document.querySelector('[data-action="increment"]')
// const valueEl = document.querySelector("#value")

// incrementBtn.addEventListener("click", increment)
// decrementBtn.addEventListener("click", decrement)

// let counterValue = 0

// function increment() {
//     counterValue += 1
//     valueEl.textContent = counterValue
// }

// function decrement () {
//     counterValue -= 1
//     valueEl.textContent = counterValue
// }

// кінець створення ^



// клас, інтерфейс, екземпляр

// клас

// class Car { 
//   constructor(model, price, year, color){
//     this.model = model
//     this.price = price
//     this.year = year
//     this.color = color
//   }
//   getModel(){
//         console.log(this.model)
//     }

//     changePrice(newPrice){
//         this.price = newPrice
//     }

// }


// екземпляр

// const audi = new Car( 'A5', 40000, 2020, 'black')
// audi.getModel()
// audi.changePrice(45000)
// console.log(audi)

// const mazda = new Car('mazda-3', 35000, 2022, 'red')
// console.log(mazda)


// Створіть клас Person, що містить властивості firstName та lastName. 
// Додайте метод getFullName(), який повертає повне ім'я у форматі "firstName, lastName".
// const person1 = new Person('John', 'Doe');
// console.log(person1.getFullName()); // John Doe

// class Person {
//     constructor(firstName, lastName, age ){
//         this._firstName = firstName
//         this.lastName = lastName
//         this._age = age
//     }
//     get firstName() {
//         console.log(this._firstName)
//     }
//     set age(newAge) {
//         this._age = newAge
//         console.log(this._age)
//     }
//     getFullName () {
//         console.log(`${this.firstName} ${this.lastName} ${this.age}`)
//     }
// }

// let person1 = new Person('John', 'Doe', 32)
// person1.getFullName()

// person1.firstName
// person1.age = 45

// використали сеттер і геттер

// Створіть клас Rectangle, що містить властивості width та height. 
// Додайте метод getArea(), який повертає площу прямокутника.
// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.getArea()); // 50

// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }
//     getArea () {
//         console.log(this.width * this.height)
//     }
// }

// const rectangle1 = new Rectangle(10, 5);
// rectangle1.getArea()

// const rectangle2 = new Rectangle(20, 10)
// rectangle2.getArea()

// геттер, сеттер

// class Car { 
//   constructor(model, price, year, color){
//     this._model = model
//     this._price = price
//     this.year = year
//     this.color = color
//   }
//   get model(){ // пишеться роздільно, і не може співпадаити з model та іншим(ставте _)
//         console.log(this._model) // це геттер
//     }

//     set price(newPrice){ // це сеттер
//         this._price = newPrice
//     }

// }

// const audi = new Car( 'A5', 40000, 2020, 'black')
// console.log(audi.model) // використання сеттера і геттера
// // audi.getModel()
// audi.price = 45000
// console.log(audi)

// const mazda = new Car('mazda-3', 35000, 2022, 'red')
// console.log(mazda)