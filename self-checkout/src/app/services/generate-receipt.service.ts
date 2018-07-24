import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GenerateReceiptService {

  constructor(public http:Http) { }

  getReceiptService(){
    return this.http.get('http://localhost:8080/selfpaidgrocerysystem/generateReceipt/').map(res => res.json());
    
  }

}
