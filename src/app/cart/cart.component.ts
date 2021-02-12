import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  res:any[]=[];
  @Input('parentData') public name:any;
  cnt:boolean=false;

  constructor() { 
   
  }
  check()
  {
    if(this.name.length!==0)
    {
      this.res.push(this.name);
      this.name="";
      
    }
    return false;
  }
  checkout()
  {
    this.res.splice(0,this.res.length);
  }

  ngOnInit(): void {
  }

}
