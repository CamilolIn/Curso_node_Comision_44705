const mongoose = require('mongoose');
const Pizza = require('./pizza')
const cart = require('./cart')

const connect = async () => {
  //if (this.connection) return this.connection;
  return mongoose.connect('mongodb+srv://coder:123456ca@clustercodermongo.m5px3pd.mongodb.net/codermongodb', { useUnifiedTopology: true, useNewUrlParser: true }).then(async (connection) => {
    this.connection = connection;
    console.log('Conexion a DB exitosa');

    // let order = await Pizza.aggregate([
    //   {
    //     $match:{size:'medium'}
    //   },
    //   {
    //     $group:{_id:'$name', totalQly:{$sum:'$quantity'} }
    //   },
    //   {
    //     $sort:{totalQly:-1 }
    //   },
    //   {
    //     $group:{_id:1, orders:{$push:'$$ROOT'} }
    //   },
    //   {
    //     $project:{'_id':0, orders:'$orders'} 
    //   },
    //   {
    //     $merge:{'into':'reports'} 
    //   }
      
    // ])
    // console.log(order)
    let res= await Pizza.paginate({}, {limit:4})
    console.log(res)
  }).catch(err => console.log(err))
}

connect()