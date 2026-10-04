//1. Создаём массив из 5 чисел
let numbers = [10, 5, 8, 3, 12];

console.log("Исходный массив:", numbers);
numbers.push(20);
console.log("После добавления 20:", numbers);
numbers.shift();
console.log("После удаления первого элемента:", numbers);
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Чётные числа:", evenNumbers);
let multipliedNumbers = numbers.map(number => number * 5);
console.log("Числа, умноженные на 5:", multipliedNumbers);
let sum = numbers.reduce((total, number) => total + number, 0);
let average = sum / numbers.length;

console.log("Среднее арифметическое:", average);
let sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log("Массив по возрастанию:", sortedNumbers);

//2. Создаём массив из 10 знаменитостей
let celebrities = [
    {
        name: "Michael Jackson",
        age: 50,
        role: "singer"
    },
    {
        name: "Leonardo DiCaprio",
        age: 51,
        role: "actor"
    },
    {
        name: "Taylor Swift",
        age: 36,
        role: "singer"
    },
    {
        name: "Cristiano Ronaldo",
        age: 41,
        role: "footballer"
    },
    {
        name: "Tom Holland",
        age: 30,
        role: "actor"
    },
    {
        name: "Billie Eilish",
        age: 24,
        role: "singer"
    },
    {
        name: "Lionel Messi",
        age: 39,
        role: "footballer"
    },
    {
        name: "Zendaya",
        age: 30,
        role: "actress"
    },
    {
        name: "Justin Bieber",
        age: 32,
        role: "singer"
    },
    {
        name: "Millie Bobby Brown",
        age: 22,
        role: "actress"
    }
];


// 1. Выводим массив только с именами
let names = celebrities.map(celebrity => celebrity.name);

console.log("Имена знаменитостей:");
console.log(names);



let descriptions = celebrities.map(celebrity => {
    return `${celebrity.name} is a ${celebrity.role}`;
});

console.log("Описание знаменитостей:");
console.log(descriptions);


let oldest = celebrities.reduce((oldest, celebrity) => {
    return celebrity.age > oldest.age ? celebrity : oldest;
});

console.log("Самый старший:", oldest);


let youngest = celebrities.reduce((youngest, celebrity) => {
    return celebrity.age < youngest.age ? celebrity : youngest;
});

console.log("Самый младший:", youngest);


let ageDifference = oldest.age - youngest.age;

console.log("Разница в возрасте:", ageDifference);


let hasMinor = celebrities.some(celebrity => celebrity.age < 18);

console.log("Есть ли несовершеннолетний:", hasMinor);


let olderThan20 = celebrities.filter(celebrity => celebrity.age > 20);

console.log("Знаменитости старше 20 лет:");
console.log(olderThan20);