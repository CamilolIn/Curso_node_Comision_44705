const mongoose = require('mongoose');
const product = require('./product')
const cart = require('./cart')

const connect = async () => {
  //if (this.connection) return this.connection;
  return mongoose.connect('mongodb+srv://coder:123456ca@clustercodermongo.m5px3pd.mongodb.net/codermongodb', { useUnifiedTopology: true, useNewUrlParser: true }).then(async (connection) => {
    this.connection = connection;
    console.log('Conexion a DB exitosa');
    // product.create({
    //   name:"Televisor",
    //   price:5142,
    //   category:"Hogar",
    //   stock:30
    // })
    // cart.create({
    //   date:"06/06/2023",
    // })

    cart.find()
      .then(p => console.log(JSON.stringify(p, null, '\t')))
      .catch(error => console.log(error));


    // let cart1 = await cart.findOne({_id:"64823cbb2e2462f37e71a629"})
    
    // cart1.products.push({product:"64768b938808c118229a15ba"})
    // await cart.updateOne({_id:"64823cbb2e2462f37e71a629"}, cart1)
  }).catch(err => console.log(err))
}

connect()