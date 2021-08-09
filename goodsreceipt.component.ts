import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goodsreceipt',
  templateUrl: './goodsreceipt.component.html',
  styleUrls: ['./goodsreceipt.component.css']
})
export class GoodsreceiptComponent implements OnInit {
  uname:any;
  head:any;
  item:any;
  header:any;
  loader:any;
  // headval:any;

  filtereddata:any;

 
   constructor(private http: HttpClient, private router: Router) {
     this.uname = sessionStorage.getItem('uname');
     //alert(this.uname);
     if (this.uname == null) {
       // alert('hello');
       this.router.navigate(['']);
     }
   }
 
   ngOnInit(): void {
     // this.uname = localStorage.getItem('uname');
     this.header=true;
     this.uname = sessionStorage.getItem("uname");
     
     this.http.post('http://localhost:3000/goods', { uname: this.uname }).subscribe((data:any) => {
       console.log(data);
       this.head = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_GOODS_RECEIPT_KNH.Response']['IT_FLOW']['item'];
       this.item = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_GOODS_RECEIPT_KNH.Response']['IT_FLOW']['item'];
       this.loader=false;
     })
   }  
showitem(headval:any){
  this.header=false;
  console.log(headval);
  this.filtereddata=this.item.filter((x:any)=>x.MAT_DOC._text==headval);
  this.loader=false;
}
 
goback(){
  this.header=true;
}


}
