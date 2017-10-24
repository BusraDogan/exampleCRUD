export class Order {
    constructor(
        public _id:number= Math.floor(Math.random()*100),
        public orderId: String= "",
        public  companyName: String= "",
        public customerAddress: String= "",
        public  orderedItem: String= "",
        public orderCost: String= "",
        public orderDate:String= "",
        public  editable:boolean =false
    )
    {}
}
