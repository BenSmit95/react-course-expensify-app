import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDUp4MLgdQNeOSCxOwkiVql6NatRTfeywQ",
    authDomain: "expensify-da48f.firebaseapp.com",
    databaseURL: "https://expensify-da48f.firebaseio.com",
    projectId: "expensify-da48f",
    storageBucket: "expensify-da48f.appspot.com",
    messagingSenderId: "528473846866"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    });
    console.log(expenses);
});

const expensesList = [{
    description: 'rent',
    note: 'fucking rent man...',
    amount: 40050,
    createdAt: 0
}, {
    description: 'Buy cheese',
    note: 'jummy!',
    amount: 4000000,
    createdAt: 2000000000
}, {
    description: 'Hookers',
    note: '',
    amount: 100040,
    createdAt: 1000140201
}]
// database.ref('expenses').push(expenses[0]);

// database.ref('notes').push({
//     title: 'todo',
//     body: 'RUN!'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const value = snapshot.val();
//     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}.`)
// })

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.log('Error fetching data', error);
//     });

// database.ref().set({
//     name: 'Benjamin Smit',
//     age: 22,
//     stressLevel: 6,
//     job: {
//         title:'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Katwijk',
//         country: 'Netherlands'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('This failed.', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((error) => {
//         console.log('error!', error);
//     });