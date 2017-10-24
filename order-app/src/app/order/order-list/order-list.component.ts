import {Order} from './../order';
import { Component, OnInit ,Output, Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input () orders;
  @Output () deleteOrderEvent = new EventEmitter();
  @Output () updateOrderEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  delete(order: Order){
    this.deleteOrderEvent.emit(order);

  }
   
  update (orders){
    this.updateOrderEvent.emit(orders)
  }
}
