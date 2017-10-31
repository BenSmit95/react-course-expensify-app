// OBJECT DESTRUCTURING
console.log('destructuring.js');

const person = {
    name: 'Benjamin',
    age: 22,
    location: {
        city: 'Katwijk',
        temp: 14
    }
};

const {name = 'Anonymous', age = 0} = person;

console.log(`${name} is ${age}.`);

const {temp: temperature = 12, city: town} = person.location;
console.log(`It's ${temperature}C in ${town}`);

const book = {
    title: 'Meditations',
    author: 'Marcus Aurelius',
    publisher: {
        //name: 'Some roman dude'
    }
};

const { name: publisherName = 'Self published' } = book.publisher;
console.log(publisherName)

// ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [, city, state] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee', '$2.00', '$2.50', '$2.75'];

const[itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium}.`);