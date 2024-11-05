const mongoose = require('mongoose');

main().then((result)=>{
    console.log('connection successful');
}). catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    marks: Number,
});

const User = mongoose.model("User",userSchema);

// const user1 = new User({name: "karthik", age: 21, marks: 91});
// const user2 = new User({name: "Maruthi", age: 23, marks: 81});
// const user3 = new User({name: "sethu", age: 31, marks: 77});
// const user4 = new User({name: "nikhil", age: 11, marks: 67});

// user4.save().then(res=>{
//     console.log('inserted successfully');
// }).catch(err=>{
//     console.log(err);
// });

// User.insertMany([
//     {name: "Poojitha", age: 21, marks: 99},
//     {name: "Preethan", age: 22, marks: 100},
//     {name: "Pudhota", age: 24, marks: 78}
// ]);

// User.find({}).then(res=>{
//     console.log(res);
// });

// User.find({age: {$eq: 21}}).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// });


// User.updateOne({name: "Poojitha"}, {marks: 100}).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// });

// User.findOne({marks: 100}).then(res=>{
//     console.log(res);
// });


User.deleteOne({marks: 100}).then(res=>{
    console.log(res)
});