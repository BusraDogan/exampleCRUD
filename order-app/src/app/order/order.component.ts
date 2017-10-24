import { OrderService } from './order.service';
import { Component, OnInit } from '@angular/core';
import {Order} from './order';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Array<Order>= [
    new Order(1, "1", "DataTeam", "Bilkent", "11","12.1","1234"),
    new Order(2, "2","DataTeam", "Bilkent", "11","12.1","1234"),
    new Order(3, "3","DataTeam", "Bilkent", "11","12.1","1234"),
    new Order(4, "4", "DataTeam", "Bilkent", "11","12.1","1234"),
    new Order(5, "5", "DataTeam", "Bilkent", "11","12.1","1234"),
    new Order(6, "6","DataTeam", "Bilkent", "11","12.1","1234")

  ];

  constructor(private _orderService: OrderService) { }

  ngOnInit() 
  {
   // this.getOrders();
  }

  create(order: Order)
  {
     this.orders.push(order);
  }


   delete(order: Order)
   {
     const i =this.orders.indexOf(order);
     this.orders.splice(i,1);
   }
    
   update (orders:any){
     console.log (orders);
     const i= this.orders.indexOf(orders.original);
     this.orders[i] = orders.edited;
   }

  getOrders() 
  {
   //this._orderService.getOrders()
    //.then(orders => this.orders = orders)
  }

}
