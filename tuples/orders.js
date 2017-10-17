const mongoose =require('mongoose');

const OrderSchema =new mongoose.Schema(
    {
    orderId: String,
    companyName: String,
    customerAddress: String,
    orderedItem: String,
    orderCost: String,
    orderDate:String

    }
);

const Order= module.exports = mongoose.model('Order', OrderSchema);

module.exports.addOrder =function(orders ,callback) 
{
    orders.save (callback);
}

module.exports.getOrders =function(callback)
{
    Order.find({} , callback);
}

module.exports.getOrder = function(id, callback)
{
    Order.findById (id, callback);
}

module.exports.deleteOrder =function(id, callback)
{
    Order.findById(id, (err,orders) => {
        orders.remove(callback);
    });
}

module.exports.updateOrder=function(id, orders, callback)
{
   Order.findByIdAndUpdate({_id :id}, orders,callback) 

}
