import { Component, OnInit , Input, Output,EventEmitter } from '@angular/core';
import { Order } from './../order';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  @Input() order: Order;
  @Output() updateOrderEvent = new EventEmitter();
  orderEdit: Order= new Order();

  constructor() { }

  ngOnInit() {
    Object.assign(this.orderEdit, this.order);
    //console.log(this.orderEdit);
  }

  update(){
    
    this.orderEdit.editable = false;
    this.updateOrderEvent.emit({original:this.order, edited:this.orderEdit});

  }

}
