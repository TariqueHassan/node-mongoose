const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connected Correctly to server');

    Dishes.create({
        name: 'Uthappizza (mongoose)',
        description: 'test (mongoose)'
    })
    .then((dish) => {
        console.log("Dish: "+dish);

        Dishes.find({}).exec();
    })
    .then((dishes) => {
        console.log("Dishes: "+dishes);

        return Dishes.deleteMany({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    })
});


// const mongoose = require('mongoose');

// const Dishes = require('./models/dishes');

// const url = 'mongodb://localhost:27017/conFusion';
// const connect = mongoose.connect(url);

// connect.then((db) => {
//     console.log('Connected Correctly to server');

//     var newDish = Dishes({
//         name: 'Uthappizza (mongoose)',
//         description: 'test (mongoose)'
//     });

//     newDish.save()
//         .then((dish) => {
//             console.log("Dish: "+dish);

//             Dishes.find({}).exec();
//         })
//         .then((dishes) => {
//             console.log("Dishes: "+dishes);

//             return Dishes.deleteMany({});
//         })
//         .then(() => {
//             return mongoose.connection.close();
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });