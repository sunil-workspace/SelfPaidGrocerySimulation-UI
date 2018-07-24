
import { Payment } from './../payment';

import { PaymentDetailsService } from '../services/payment-details.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.css']
})
export class GiftCardComponent implements OnInit {

  finishAndPay: boolean;
  giftCardNumber: number;
  giftCardCode: number;
  giftCardExpDate: string;

  @Output() goToGiftReceiptGenerationPage = new EventEmitter<any>();
  constructor(private paymentDetailsService: PaymentDetailsService, private payment: Payment) { }

  ngOnInit() {
  }

  passGiftCardDetails(): void {
    console.log("Sending Gift Card details: CardNumber: " + this.giftCardNumber + " CardCode: " + this.giftCardCode + " GiftCardxpiryDate: " + this.giftCardExpDate);


    this.payment.cardNumber = this.giftCardNumber;
    this.payment.cardExpiryDate = this.giftCardExpDate;
    this.payment.securityCode = this.giftCardCode;
    this.payment.paymentMode = "Gift Card";

    this.paymentDetailsService.postGiftCardDetails(this.payment).subscribe((response) => {
      console.log("Response came to paymentDetailsService method. Is Card Details Inserted:: ", response.isCardDetailsInserted);
      if (response.isCardDetailsInserted == true) {
        console.log("Gift Card Details Inserted");
        //this.finishAndPay = false;
        this.onSubmission();
      } else if (response.isValidMember == false) {
        console.log("gift Card Details Not Inserted");
      }
    });
  }

  onSubmission(): void {
    this.goToGiftReceiptGenerationPage.emit()
  }

}
