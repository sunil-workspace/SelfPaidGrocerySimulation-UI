import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-lookup-finishpay',
  templateUrl: './lookup-finishpay.component.html',
  styleUrls: ['./lookup-finishpay.component.css']
})
export class LookupFinishpayComponent implements OnInit {

  @Output() onClickLookup= new EventEmitter<boolean>();
  @Output() onClickingFinishPay= new EventEmitter<boolean>();

  @Input('membershipResponse') membershipResponse: any;


  constructor() { }

  ngOnInit() {
  }

  displaylookupItems(){
    this.onClickLookup.emit() 
  }

  displayPayOptions(){
   this.onClickingFinishPay.emit(this.membershipResponse)
  }
}
