
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {

  @Output() goToCashReceiptGenerationPage = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onSubmission():void{
    this.goToCashReceiptGenerationPage.emit()
  }

}
