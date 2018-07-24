import { Component, OnInit } from '@angular/core';
import { GenerateReceiptService } from '../services/generate-receipt.service';

@Component({
  selector: 'app-receipt-generation',
  templateUrl: './receipt-generation.component.html',
  styleUrls: ['./receipt-generation.component.css']
})
export class ReceiptGenerationComponent implements OnInit {

  isReceiptGenerated : boolean = false;

  constructor(private generateReceiptService : GenerateReceiptService) { }

  ngOnInit() {
  }

  generateReceipt():void{
    this.generateReceiptService.getReceiptService().subscribe((response) => {
      console.log("Response came to generateReceiptService method. Response: ", response.isReceiptGenerated);
      if(response.isReceiptGenerated=="true"){
        this.isReceiptGenerated = true;
      } else{
        this.isReceiptGenerated = false;
      }
    });
  }
}

