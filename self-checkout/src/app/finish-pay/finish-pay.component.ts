
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-finish-pay',
  templateUrl: './finish-pay.component.html',
  styleUrls: ['./finish-pay.component.css']
})
export class FinishPayComponent implements OnInit {

  selectPaymentType: boolean = true;
  cash: boolean = false;
  creditCard: boolean = false;
  debitCard: boolean = false;
  giftCard: boolean = false;
  CreditCardSubmit: boolean = false;
  DebitCardSubmit: boolean = false;
  GiftCardSubmit: boolean = false;
  CashSubmit: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  cashSelected(): void {
    console.log("Cash payment option selected");
    this.selectPaymentType = false;
    this.cash = true;
  }

  creditCardSelected(): void {
    console.log("Credit Card payment option selected");
    this.selectPaymentType = false;
    this.creditCard = true;
  }

  debitCardSelected(): void {
    console.log("Debit Card payment option selected");
    this.selectPaymentType = false;
    this.debitCard = true;
  }

  giftCardSelected(): void {
    console.log("Gift Card payment option selected");
    this.selectPaymentType = false;
    this.giftCard = true;
  }

  onClickingCreditSubmit(): void{
    console.log("Credit Card Details submitted");
    this.selectPaymentType = false;
    this.creditCard = false;
    this.CreditCardSubmit = true;
  }

  onClickingDebitSubmit(): void{
    console.log("Credit Card Details submitted");
    this.selectPaymentType = false;
    this.debitCard = false;
    this.DebitCardSubmit = true;
  }

  onClickingGiftSubmit(): void{
    console.log("Credit Card Details submitted");
    this.selectPaymentType = false;
    this.giftCard = false;
    this.GiftCardSubmit = true;
  }

  onClickingCashSubmit(): void{
    console.log("Credit Card Details submitted");
    this.selectPaymentType = false;
    this.cash = false;
    this.CashSubmit = true;
  }

}
