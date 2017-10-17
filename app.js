const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise= global.Promise;

mongoose.connect('mongodb://localhost:27017/AngularEx', {useMongoClient :true});

mongoose.connection.on('connected', () =>
  {
  console.log('Database connection is successful!');
  }
);

mongoose.connection.on('error', (error) =>
  {
  console.log('Database connection has an error! , error:' +error);
  }
);

const app = express();

const port =process.env.port || 3000;

app.use(bodyParser.json());

const mycrud = require ('./routes/mycrud');


app.use('/order/create',mycrud);
app.use('/order/read'  ,mycrud);
app.use('/order/update',mycrud);
app.use('/order/delete',mycrud);

app.get('/order/create', (req, res) => 
{
    orders.save (callback);
}
);
 
app.get('/order/read', (req, res) => 
{
    Order.findById (id, callback)
}
);

app.get('/order/update', (req, res) => 
{
    Order.findByIdAndUpdate({_id :id}, orders,callback) 
}
);

app.get('/order/delete', (req, res) => 
{
    Order.findById(id, (err,orders) =>
    {
        orders.remove(callback);
    });
}
);


app.listen (port ,  ()=> 
  {
console.log('My server was started via '+ port +' port' );
  }
);
 
