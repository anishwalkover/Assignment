import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
products:string[]=[];
productsduplicate:string[]=[];
names:string="";
results:string="";
temp:string="";
check:boolean=true;
  constructor() {
    this.products=["Rat","Ratdrier","Mouse","Pen","Pencil"];
   }


  ngOnInit(): void {
  
  }
 search(event:any)
 {
   this.check=false;
  this.results=(<HTMLInputElement>event.target).value;
   this.productsduplicate=this.products.filter(res=>
    {
      return res.toLocaleLowerCase().match(this.results.toLocaleLowerCase());
    })
 }
 onclick(st:string)
 {
 
   this.temp=st;
   this.childEvent.emit(this.temp);

 }
  @Output() public childEvent=new EventEmitter();

}
