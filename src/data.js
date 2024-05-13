const data = [
    {
        name: 'pawel',
        city: 'krakow',
        age: 39,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'mati',
        city: 'gdansk',
        age: 23,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'mateusz',
        city: 'gdansk',
        age: 32,
        hobbies: ['fantasy', 'games', 'football']
    },
    {
        name: 'denys',
        city: 'warsaw',
        age: 27,
        hobbies: ['js', 'python', 'not drugs']
    },
    {
        name: 'adas',
        city: 'szczecin',
        age: 29,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'mikolaj',
        city: 'rozwady',
        age: 23,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'bartek',
        city: 'bielsko',
        age: 25,
        hobbies: ['js', 'python', 'code']
    },
    {
        name: 'maciej',
        city: 'lublin',
        age: 27,
        hobbies: ['dziwki', 'dragi', 'lasery']
    },
    {
        name: 'filip',
        city: 'torun',
        age: 26,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'karol',
        city: 'lidzba',
        age: 32,
        hobbies: ['music', 'martial arts', 'drugs']
    },
    {
        name: 'filip',
        city: 'gdansk',
        age: 28,
        hobbies: ['binge-watching', 'rpg games', 'definitely drugs']
    },
    {
        name: 'agnieszka',
        city: 'warsaw',
        age: 38,
        hobbies: ['music', 'books', 'python']
    },
    {
        name: 'vlad',
        city: 'warszawa',
        age: 19,
        hobbies: ['it', 'games', 'python']
    },
    {
        name: 'kuba',
        city: 'lodz',
        age: 21,
        hobbies: ['js', 'python', 'guitar']
    },
    {
        name: 'karol',
        city: 'krakow',
        age: 39,
        hobbies: ['js', 'piłka', 'ping-pong']
    },
    {
        name: 'maciej',
        city: 'Zielonka',
        age: 23,
        hobbies: ['drugs']
    },
    {
        name: 'mateusz',
        city: 'Warszawa',
        age: 21,
        hobbies: ['coding', 'Ai', 'python']
    }
]

// console.log(data.length);

//policz srednia wieku
//
// function calcAvgAge(people) {
//     let totalAge = 0;
//
//     for (let i = 0; i < people.length; i++) {
//         totalAge += people[i].age;
//
//     }
//     return Math.round(totalAge / people.length)
// }
//
// function calcAvgAge2(people) {
//     return people
//         .map((person) =>person.age)
//         .reduce((acc, ce) => acc + ce) / people.length
// }
//
// const calcAvgAge3 = (people) => people
//     .map((person) => person.age)
//     .reduce((acc, ce) => acc + ce) / people.length;
//
// const calcAvgAge4 = (people) => people
//     .reduce((acc, ce) => acc + ce.age, 0) / people.length;
//
// const result = calcAvgAge(data);
// console.log(result);
//
// // policzyć średnia wieku dla ludzi spoza warszawy
//
// function calcAvgAgeCustom(people) {
//     let totalAge = 0;
//     let counter = 0;
//
//     for (let i = 0; i < people.length; i++) {
//         if (!(people[i].city.toLowerCase() !== 'warsaw' || people[i].city.toLowerCase() !== 'warsaw'))
//         totalAge += people[i].age;
//         counter ++;
//
//     }
//     return Math.round(totalAge / people.length);
// }
//
// const calcAvgAgeCustom2 = function(people) {
//     const ageOfPeople = people
//         .filter((person) => !(person.city.toLowerCase() === 'warsaw' || person.city.toLowerCase() === 'warszawa'))
//         .map((person) => person.age);
//     return ageOfPeople.reduce((acc, ce) => acc+ ce) /ageOfPeople.length;
//
// }

//czy jest ktos z krakowa

const isCracowHere = function(people) {
    const isCracow = people.some((person) => person.city.toLowerCase() === 'krakow' || person.city.toLowerCase() === 'cracow');
    return isCracow;
};

const result = isCracowHere(data);
console.log(result);