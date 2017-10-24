import { Order } from '../order';
import { Component, OnInit, Output ,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.css']
})
export class OrderNewComponent implements OnInit {
  newOrder = new Order();
  @Output() createNewOrderEvent = new EventEmitter();



  constructor() { }

  ngOnInit()
  {
  }
  //call server 
   create( ) 
   {
    this.createNewOrderEvent.emit(this.newOrder);
    this.newOrder = new Order () ;
   }
    

}
