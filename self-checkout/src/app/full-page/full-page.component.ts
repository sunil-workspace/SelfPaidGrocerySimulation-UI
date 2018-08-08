import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { ItemDetailsService } from '../services/item-details.service';

@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.css']
})
export class FullPageComponent implements OnInit {

  /* //Default values
   displayLeftRight : boolean = true;
   lookupFinishPayButtons : boolean = false;
   lookupFinishFlow : boolean = false;*/

  //For Testing
  displayLeftRight: boolean = true;
  lookupFinishPayButtons: boolean = false;
  lookupFinishFlow: boolean = false;
  finishAndPay : boolean = false;

  @Output() emitToTable = new EventEmitter<any>();

  itemDetails: any;
  itemDetailsArr: any = [];

  isItemFound: boolean = false;
  itemFoundIndex: number;

  membershipResponse : any;
  memberId : any;

  totalPrice : number = 0;

  constructor(private itemDetailsService : ItemDetailsService) { }

  ngOnInit() {
  }

  onClickingMemberButton(membershipResponse) {
    console.log("response: ", membershipResponse);
    this.membershipResponse = membershipResponse;
    this.displayLeftRight = false,
    this.lookupFinishPayButtons = true
  }

  onClickingLookupButton() {
    this.lookupFinishPayButtons = false,
    this.lookupFinishFlow = true
  }

  onClickingFinishPay(membershipResponse) {
    console.log("============================1st came here============", membershipResponse)
    if(membershipResponse == "Guest"){
      this.itemDetailsService.postItemDetails(this.itemDetailsArr, "Guest").subscribe((response) => {
        console.log("Response came to paymentDetailsService method. Is Card Details Inserted:: ", response.isInserted);
        if (response.isInserted == true) {
          console.log("Items Selected are inserted into DB");
          this.lookupFinishPayButtons = false
          this.finishAndPay=true
        } else if (response.isInserted == false) {
          console.log("Items Selected are not inserted into DB");
          alert("Items Selected are not inserted into DB");
        }
      });
    } else{
    console.log("============================came here============", membershipResponse.membershipId)
    this.itemDetailsService.postItemDetails(this.itemDetailsArr, membershipResponse.membershipId).subscribe((response) => {
      console.log("Response came to paymentDetailsService method. Is Card Details Inserted:: ", response.isInserted);
      if (response.isInserted == true) {
        console.log("Items Selected are inserted into DB");
        this.lookupFinishPayButtons = false
        this.finishAndPay=true
      } else if (response.isInserted == false) {
        console.log("Items Selected are not inserted into DB");
        alert("Items Selected are not inserted into DB");
      }
    });
  }
  }
  onClickingItem(itemDetails) {
    //console.log("Event came from lookup item component: ", itemDetails);
    this.lookupFinishFlow = false;
    this.lookupFinishPayButtons = true;

    //Before adding, check if the same item exists, if exists, 
    //get the Quantity and increase the quantity by 1
    //Calculate the price, Price * Quantity
    if (this.itemDetailsArr.length == 0) {
      console.log("Inside if condition for firsttime");
      this.itemDetailsArr.push(itemDetails);
      //this.totalPrice = Math.round(this.totalPrice +itemDetails["PRICE"]* 100 + Number.EPSILON ) / 100;
      this.totalPrice = Number((this.totalPrice +itemDetails["PRICE"]).toFixed(2));
  console.log("totallllll price"+this.totalPrice);
      
      
    } else {
      for (this.itemFoundIndex = 0; this.itemFoundIndex < this.itemDetailsArr.length; this.itemFoundIndex++) {
        if (this.itemDetailsArr[this.itemFoundIndex]["NAME"] === itemDetails["NAME"]) {
          this.isItemFound = true;
          break;
        }
      }
      this.callAMethod(itemDetails);
    }
  }

  callAMethod(itemDetails) {
    this.totalPrice = this.totalPrice +itemDetails["PRICE"];
    console.log("this.isItemFound: ", this.isItemFound, " Index: ", this.itemFoundIndex);
    if (this.isItemFound == true) {
      console.log("Found matching item");
      let quantity = this.itemDetailsArr[this.itemFoundIndex]["QUANTITY"];
      quantity = ++quantity;
      this.itemDetailsArr[this.itemFoundIndex]["QUANTITY"] = quantity;
      this.itemDetailsArr[this.itemFoundIndex]["PRICE"] = quantity * itemDetails["PRICE"];
    } else {
      console.log("Not found matching item");
      this.itemDetailsArr.push(itemDetails);
    }
    this.isItemFound = false;
  }
  
  passMemberIdToLookUpItem(memberId){
    console.log("came to passMemberIDToLookUpItem: ", memberId);
    this.memberId = memberId;
  }
 


}

