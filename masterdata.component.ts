import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.css']
})
export class MasterdataComponent implements OnInit {
  // data:any;
  
  // excel:any;
  // // const excel = Array();

  // sra=[] as any;
  // filename:any;
  // uname:any;
  // constructor(private http:HttpClient) {​​​​​ }​​​​​
 
  
  //   ngOnInit(): void {
  //     this.uname=sessionStorage.getItem('uname');
  //   }
  //   onFileChange(evt: any) {
  //     /* wire up file reader */
  //     const target: DataTransfer = <DataTransfer>(evt.target);
  //     if (target.files.length !== 1) throw new Error('Cannot use multiple files');
  //     const reader: FileReader = new FileReader();
  //     reader.onload = (e: any) => {
  //       /* read workbook */
  //       const bstr: string = e.target.result;
  //       const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        
  //       /* grab first sheet */
  //       const wsname: string = wb.SheetNames[0];
  //       const ws: XLSX.WorkSheet = wb.Sheets[wsname];
  //       console.log(wb);
  //       this.filename=wb;
  //       /* save data */
  //       this.data = (XLSX.utils.sheet_to_json(ws, { header: 2 }));
  //       console.log(this.data);
  //     };
  //     reader.readAsBinaryString(target.files[0]);
  //   }
  //   getupload(){
  //   for(let knhs of this.data){
  //         // console.log(this.data);
  //       // console.log(knhs);
  //       this.http.post("http://localhost:3000/master",knhs).subscribe((response_data:any)=>{
          
  //         this.excel=response_data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_MASTERDATAKNH.Response']['E_CUSTOMERID']._text;
  //         console.log(response_data);
  //         this.sra.push(this.excel);
          
  //         // console.log(this.sra);
         
          
          
  //       })
  //     }
  //     console.log(this.sra); 
  //   }

  data:any;
  excel:any;
  ashok=[] as any;
    constructor(private http:HttpClient) { }
  
    ngOnInit(): void {
    }
    
    onFileChange(evt: any) {
  
      /* wire up file reader */
  
      const target: DataTransfer = <DataTransfer>(evt.target);
  
      if (target.files.length !== 1) throw new Error('Cannot use multiple files');
  
      const reader: FileReader = new FileReader();
  
      reader.onload = (e: any) => {
  
        /* read workbook */
  
        const bstr: string = e.target.result;
  
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
  
  
  
        /* grab first sheet */
  
        const wsname: string = wb.SheetNames[0];
  
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
  
  
  
        /* save data */
  
        this.data = (XLSX.utils.sheet_to_json(ws, { header: 2 }));
  
        console.log(this.data);
  
      };
  
      reader.readAsBinaryString(target.files[0]);
  
    }
    getupload(){
      alert("file uploaded sucessfully");
      console.log(this.data);
      for( let chs of this.data){
        console.log(chs);
        
        this.http.post("http://localhost:3000/master",chs).subscribe((response_data:any)=>{
         
  
          
  
          this.excel=response_data['SOAP:Envelope']['SOAP:Body']['ns0:ZSD_MASTERDATAKNH.Response']['E_CUSTOMERID']._text;
  
  
  
          this.ashok.push(this.excel);
  
          console.log(this.ashok);
  
          
  
        })
  
      }
    }
  }