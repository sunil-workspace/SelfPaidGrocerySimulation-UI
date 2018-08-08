import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MemberidValidatorService } from '../services/memberid-validator.service';


@Component({
  selector: 'app-onload-right',
  templateUrl: './onload-right.component.html',
  styleUrls: ['./onload-right.component.css']
})
export class OnloadRightComponent implements OnInit {

  @Output() onClicking = new EventEmitter<any>();
  @Output() goToLookupItemPage = new EventEmitter<any>();

memberId : string = "";
notAvalidMember : string = "";

  constructor(private memberidValidatorService : MemberidValidatorService) { } 

  ngOnInit() {
  }

  displayLookupFinishPayButtonsForGuest() {
    console.log("Inside displayLookupFinishPayButtonsForGuest");
    this.onClicking.emit();
    this.goToLookupItemPage.emit("Guest");
  }

  displayLookupFinishPayButtonsForMember(memberId) {
    console.log("Inside displayLookupFinishPayButtonsForMember: ", memberId);
    this.memberidValidatorService.memberIdValidator(memberId).subscribe((response) => {
      console.log("Response came to displayLookupFinishPayButtonsForMember method. Is Member:: ", response.isValidMember); 
      if(response.isValidMember=="true"){
        console.log("MembershipId: ", response.membershipId);
        console.log("MemberName: ", response.memberName);
        this.onClicking.emit(response);
        this.goToLookupItemPage.emit(this.memberId);
        
      } else if(response.isValidMember == "false"){
        this.notAvalidMember="The entered Member ID is not valid!";
      } else{
        this.notAvalidMember = response.isValidMember;
        this.memberId = "";
      }

    });


   
    
    
  }


}
