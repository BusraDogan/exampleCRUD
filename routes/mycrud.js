const express = require ('express');
const router = express.Router();

const Order = require('../tuples/orders');

//url: /order/read
router.get('/', (req , res) =>{
Order.getOrders ((err,mycrud) =>
{
    res.json(mycrud);
});
});

router.get ('/:id' ,(req, res) =>
{
   Order.getOrder(req.params.id , (err, orders)  =>
   {
       res.json(orders);
});
});


//url: /order/create
 router.post('/', (req , res) =>
   {
    let newOrder = new Order(
    
    {

       orderId: req.body.orderId,
       companyName: req.body.companyName,
       customerAddress:req.body.customerAddress,
       orderedItem:req.body.orderedItem,
       orderCost:req.body.orderCost,
       orderDate:req.body.orderDate

    }
);
   
      Order.addOrder (newOrder,(err, orders) =>
        { 
            if (err) {
              res.json ({
                  success: false,
                  message:'Received an error code while recording an order ',
                  error:err
            });
        }
          
            else {
              res.json ({
                  success: true,
                  message:'Successful recording for an order',
                  data:orders
            });
              
        }
    });
});


// url :/order/update
 router.put('/:id', (req ,res)=>{
   let newOrder = {

    orderId: req.body.orderId,
    companyName: req.body.companyName,
    customerAddress:req.body.customerAddress,
    orderedItem:req.body.orderedItem,
    orderCost:req.body.orderCost,
    orderDate:req.body.orderDate

};

    Order.updateOrder (req.params.id, newOrder, (err,orders) =>
       {
            if (err){
              res.json({
                  success:false,
                  message:'Received an error while updating an order',
                  error:err

            });
        }
            else {
              res.json({
                  success:true,
                  message: 'Updating is Successful! ',
                  data:newOrder
        
            });
        }

    });
});


// url: /order/delete
  router.delete('/:id', (req,res) => {
      Order.deleteOrder(req.params.id , (err,orders) => 
       {
            if(err){
              res.json({
                  success: false,
                  message: 'Received an error while deleting an order',
                  error: err

            });
        } 
            else {
              res.json({
                  success:true,
                  message: ' Order has been deleted '

            });
        }

    });
});

//module.express =router;
module.exports = router;
