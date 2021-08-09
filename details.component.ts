import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  fname:any;
  lname:any;
  city:any;
  country:any;
  state:any;
  pincode:any;
  street:any;
  mobile:any;
  uname:any;


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


    this.http.post('http://localhost:3000/details', { uname: this.uname }).subscribe((data:any) => {
      // this.fname = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_KNH.Response']['E_IT_OUTPUT'].._text;
      this.fname = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_KNH.Response']['E_IT_OUTPUT'].NAME._text;
      this.lname = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_KNH.Response']['E_IT_OUTPUT'].LNAME._text;
      this.city = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_KNH.Response']['E_IT_OUTPUT'].CITY._text;
      this.street = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_KNH.Response']['E_IT_OUTPUT'].ADDRESS._text;
      this.state = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_KNH.Response']['E_IT_OUTPUT'].CITY._text;
      this.pincode = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_KNH.Response']['E_IT_OUTPUT'].DISTRICT._text;
      this.mobile = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_KNH.Response']['E_IT_OUTPUT'].PINCODE._text;
      this.country = data['SOAP:Envelope']['SOAP:Body']['ns0:ZMM_VENDOR_DETAILS_KNH.Response']['E_IT_OUTPUT'].COUNTRY._text;


      sessionStorage.setItem("fname", this.fname);
      sessionStorage.setItem("lname", this.lname);
      sessionStorage.setItem("city", this.city);
      sessionStorage.setItem("street", this.street);
      sessionStorage.setItem("state", this.state);
      sessionStorage.setItem("pincode", this.pincode);
      sessionStorage.setItem("mobile", this.mobile);
      sessionStorage.setItem("country", this.country);
    })

    console.log(this.fname);
  }  


  }
