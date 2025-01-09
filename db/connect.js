const mongoose = require('mongoose');

const connection =(url)=>{
  return mongoose.connect(url).then(()=>{
  console.log("connected to db")
}).catch((err)=>{
    console.log(err)
})
}
module.exports= connection;