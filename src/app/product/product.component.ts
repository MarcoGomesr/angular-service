import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../my-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private newService: MyDataService){}

  ngOnInit() {
  	// this.newService.obj.name = "John";
  	// console.log(this.newService.obj.name);
  }

}