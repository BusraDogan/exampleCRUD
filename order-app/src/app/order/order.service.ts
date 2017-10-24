import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { Order } from './order';
import {Observable} from 'rxjs';
import "rxjs";


@Injectable()
export class OrderService {

  constructor(private _http: Http) { }

  create(order: Order){
    return this._http.post("/orders", order)
    .map(data => data.json()).toPromise()
  }
  delete(order: Order){
    return this._http.delete("/orders" +order._id)
    .map(data => data.json()).toPromise()
      }
  update(order: Order){
    return this._http.put("/orders" +order._id, order)
    .map(data => data.json()).toPromise()   
          }
  getOrders(){
    return this._http.get("/orders")
    .map(data => data.json()).toPromise()
           }

  getOrder(order: Order){
    return this._http.get("/orders"+order._id)
    .map(data => data.json()).toPromise() 
  }










}
