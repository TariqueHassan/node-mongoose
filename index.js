const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connected Correctly to server');

    Dishes.create({
        name: 'Uthappizza',
        description: 'test (mongoose)'
    })
    .then((dish) => {
        console.log(dish);

        return Dishes.findByIdAndUpdate(dish._id,{
            $set: {description: 'Updated test (mongoose)'}
        },{
            new: true
        }).exec();
    })
    .then((dish) => {
        console.log(dish);

        dish.comments.push({
            rating: 5,
            comment: 'I\'m getting a sinking feeling!',
            author: 'Leonardo di Carpaccio'
        });

        return dish.save();
    })
    .then((dish) =>{
        console.log(dish);

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

//             return Dishes.find({}).exec();
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