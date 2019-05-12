import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { map } from 'rxjs/operators';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-fedex',
  templateUrl: './fedex.component.html',
  styleUrls: ['./fedex.component.css']
})

export class FedexComponent implements OnInit {

 ano=99;
 url:string;
 date1:any;
   arrBirds: Object [];
   arrBirds1: Object [];
    hashNo: Object [];

 dialogRef;
   len:number;
   arr:Array<any> = [];
   shp1:string='';
prd1: string='';
pc1:number=0;
wt1:string='';
no1:number=0;

 
  wgt1: number=0;
  vol1: number=0;
newAttributeCode1:string;
newAttributeName1:string;
sacno1:number=0;
scode1:number=0;
ex1:string;
ep1:string;
rp1:string;
rt1:string;
sacname1:string;
sad1:string;
scity1:string;
scntry1:string;
sState1:string;
cacname1:string;
cad1:string;
ccity1:string;
ccntry1:string;
cState1:string;
cacno1:number=0;
ccode1:number=0;
ch1:string='';
at1:number=0;
unit1:string='';
shpd1 : string='';
shprc1: string='';
shpr1: string='';
shppc1: number=0;
shpcw1:number=0;
shpwt1:string='';
status1:string='';
loading:boolean=false;
  show: boolean = false;
  hno:string;
 
  constructor (private httpService: HttpClient,private router:Router, private dialog: MatDialog , private http:Http) { }
  

   
  

  ngOnInit () {
    this.list_display();
  }
  list_display(){
    this.httpService.get('http://13.250.111.95:80/listDisplay').subscribe(
      data => {
        console.log(data);
         this.arrBirds = Array.of(data);	 // FILL THE ARRAY WITH DATA.
         this.len=Object(data).length;
        
for (var _i = 0; _i < this.len; _i++) 
this.arr[_i]=_i;
         
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
   openModal(template:TemplateRef<any>, bird: any, i:any) :void {
 const dialogConfig = new MatDialogConfig();

this.ano=bird[i].AWBNumber;
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };

this.dialogRef=    this.dialog.open(template, dialogConfig);
this.url="http://13.250.111.95:80/getAWB/"+this.ano;
this.httpService.get(this.url).subscribe(
      data => {
         this.arrBirds1 = Array.of(data);	
         this.shp1= this.arrBirds1[0]["proDetails"].shipmentType; 
this.prd1= this.arrBirds1[0]["proDetails"].productType;
        this.no1= +(this.arrBirds1[0]["proDetails"].AWBNumber);
this.pc1= +(this.arrBirds1[0]["proDetails"].tPieces);
 this.wt1= this.arrBirds1[0]["proDetails"].tWeight;
  this.status1= this.arrBirds1[0]["proDetails"].status;

 
this.wgt1= +(this.arrBirds1[0]["DimensionDetails"].tDimWeight);
  this.vol1= +(this.arrBirds1[0]["DimensionDetails"].tVolume);
  this.ex1= this.arrBirds1[0]["exDateandPlace"].excDate;
this.ep1= this.arrBirds1[0]["exDateandPlace"].excPlace;
this.rp1= this.arrBirds1[0]["exDateandPlace"].recptDate;
this.rt1= this.arrBirds1[0]["exDateandPlace"].recptTime;
this.newAttributeCode1= this.arrBirds1[0]["routing"].destination;
this.newAttributeName1= this.arrBirds1[0]["routing"].carrier;
this.sacno1= +(this.arrBirds1[0]["shipperLabel"].accountNumber);
this.scode1=+(this.arrBirds1[0]["shipperLabel"].postalCode);
this.sacname1= this.arrBirds1[0]["shipperLabel"].name;
this.sad1= this.arrBirds1[0]["shipperLabel"].Address;
this.scity1= this.arrBirds1[0]["shipperLabel"].city;
this.scntry1= this.arrBirds1[0]["shipperLabel"].country;
this.sState1= this.arrBirds1[0]["shipperLabel"].state;

this.cacno1= +(this.arrBirds1[0]["consignee"].accountNumber);
this.ccode1= +(this.arrBirds1[0]["consignee"].postalCode);
this.cacname1= this.arrBirds1[0]["consignee"].name;
this.cad1= this.arrBirds1[0]["consignee"].Address;
this.ccity1= this.arrBirds1[0]["consignee"].city;
this.ccntry1= this.arrBirds1[0]["consignee"].country;
this.cState1= this.arrBirds1[0]["consignee"].state;

 this.ch1= this.arrBirds1[0]["chargeDetails"].mode;
this.at1= +(this.arrBirds1[0]["chargeDetails"].amount);
this.unit1= this.arrBirds1[0]["chargeDetails"].unit;       
       
       this.shppc1= +(this.arrBirds1[0]["shipmentDetails"].pieces);
  this.shpwt1= this.arrBirds1[0]["shipmentDetails"].weight;
  this.shpcw1= +(this.arrBirds1[0]["shipmentDetails"].chargeableWeight);
this.shprc1= this.arrBirds1[0]["shipmentDetails"].rateClass;
this.shpr1= this.arrBirds1[0]["shipmentDetails"].rate;
this.shpd1= this.arrBirds1[0]["shipmentDetails"].description;
      },
      
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
     
    ); 
     console.log(this.arrBirds1);


    }
  

shpd : string='';
shprc: string='';
shpr:string='';
shppc: string='';
shpcw: string='';
shpwt: string='';

shp : string='';
prd: string='';
pc:number=0;
ch : string='';
rd : string='';
wdt:number=0;
wt:number=0;
no:number=0;
ht:number=0;
lt:number=0;
nopc:number=0;
 vol: number=0;
  wgt: number=0;
  at: number=0;
  unit: string='';
  twgt: number=0;
  tvol: number=0;
newAttributeCode:string;
newAttributeName:string;
sacno:number=0;
scode:number=0;
cacno:number=0;
ccode:number=0;
//private fieldArray: Array<any> = [];
 //   private newAttribute: any = {};
close(){
       this.dialogRef.close();

   }
 
logout() : void {
  localStorage.removeItem('Customs');
        localStorage.removeItem('fedex');
   this.router.navigate(["login"]);
}
volume() : void{
this.vol=this.wdt*this.ht*this.lt;
this.wgt=this.wdt+this.ht+this.lt;

}
awb() : void{
  if(this.shp==''|| this.prd==''||this.rd==''|| this.no==undefined||this.wt==undefined)
alert("Fill all the credantials");
}


    
 submit(value:any){
  
var awb_entry={
  "proDetails":{
        "shipmentType":value.shp,
        "productType":value.prd,
        "AWBNumber":value.no.toString(),
        "tPieces":value.pc.toString(),
        "tWeight":value.wt.toString(),
        "status":"New"
    },
    "DimensionDetails":{
     "tDimWeight":value.wgt.toString(),
     "tVolume":value.vol.toString()
    
    },

   "exDateandPlace":{
         "excDate":value.ex,
         "excPlace":value.ep,
        "recptDate":value.rp,
        "recptTime":value.rt
    },
    "routing":{
      "srno":"1",
         "destination":value.newAttributeCode,
         "carrier":value.newAttributeName
    },
     "shipperLabel": {
          "accountNumber":value.sacno.toString(),
          "name":value.sacname,
          "creditStatus":"right",
          "Address":value.sad,
          "city":value.scity,
          "state":value.sState,
          "country":value.scntry,
          "postalCode":value.scode.toString()
    },
    "consignee": {
          "accountNumber":value.cacno.toString(),
          "name":value.cacname,
          "creditStatus":"right",
          "Address":value.cad,
          "city":value.ccity,
          "state":value.cState,
          "country":value.ccntry,
          "postalCode":value.ccode.toString()
    },

    "chargeDetails":{
"mode":value.ch,
"amount":value.at.toString(),
"unit":value.unit
},
    "Routing":{
     
         "destination":value.newAttributeCode,
         "carrier":value.newAttributeName
    },

 "shipmentDetails": {
        "pieces":value.shppc,
        "weight":value.shpwt,
        "rateClass":value.shprc,
        "chargeableWeight":value.shpcw,
        "rate":value.shpr,
        "description":value.shpd }

  };
console.log(JSON.stringify(awb_entry));
window.scrollTo(0,0);
document.getElementById("text_content").style.display="none";
document.getElementById("inner").style.display="block";
this.loading=true;
 let headers = new Headers();
        headers.append('Content-Type','application/json');
       
        let options = new RequestOptions({headers:headers});
  this.http.post('http://13.250.111.95:80/createAWB', awb_entry,options).subscribe(
        res => {

this.loading=false;
this.hno=res["_body"];
 var str="You've successfully submitted the data!";
document.getElementById("inner").style.display="none";
document.getElementById("text_content").style.display="block";
document.getElementById("hash").style.display="block";
document.getElementById("text_content").className="textcolour";
document.getElementById("text_content").textContent=str;
document.getElementById("hash").textContent="Hash value:"+this.hno;
document.getElementById("hash").className="hashcolour";

var f=<HTMLFormElement>document.getElementById("myForm");
f.reset();
this.list_display();

console.log(res); 


},

err => {
this.loading=false;
document.getElementById("inner").style.display="none";
document.getElementById("text_content").style.display="block";
document.getElementById("text_content").className="textcolour";
document.getElementById("text_content").textContent="Oops! Error occured";
var f=<HTMLFormElement>document.getElementById("myForm");
f.reset();
//f.setAttribute(this.status,"New");

this.list_display();
console.log("Error occured"); 

  });         

   //  alert("You have successfully submitted the data");
  //location.reload();
}



submit1(value1:any){
  

var awb_entry1={
  "proDetails":{"shipmentType":value1.shp1,
  "productType":value1.prd1,
        "AWBNumber":value1.no1.toString(),
        "tPieces":value1.pc1.toString(),
        "tWeight":value1.wt1,
        "status":"New"
    },
    "DimensionDetails":{
     "tDimWeight":value1.wgt1.toString(),
     "tVolume":value1.vol1.toString()
    
    },

   "exDateandPlace":{
         "excDate":value1.ex1,
         "excPlace":value1.ep1,
        "recptDate":value1.rp1,
        "recptTime":value1.rt1
    },
    "routing":{
      "srno":"1",
         "destination":value1.newAttributeCode1,
         "carrier":value1.newAttributeName1
    },
     "shipperLabel": {
          "accountNumber":value1.sacno1.toString(),
          "name":value1.sacname1,
          "creditStatus":"right",
          "Address":value1.sad1,
          "city":value1.scity1,
          "state":value1.sState1,
          "country":value1.scntry1,
          "postalCode":value1.scode1.toString()
    },
    "consignee": {
          "accountNumber":value1.cacno1.toString(),
          "name":value1.cacname1,
          "creditStatus":"right",
          "Address":value1.cad1,
          "city":value1.ccity1,
          "state":value1.cState1,
          "country":value1.ccntry1,
          "postalCode":value1.ccode1.toString()
    },
    "chargeDetails":{
"mode":value1.ch1,
"amount":value1.at1.toString(),
"unit":value1.unit1
},
    "Routing":{
     
         "destination":value1.newAttributeCode1,
         "carrier":value1.newAttributeName1
    },

  "shipmentDetails": {
        "pieces":value1.shppc1.toString(),
        "weight":value1.shpwt1,
        "rateClass":value1.shprc1,
        "chargeableWeight":value1.shpcw1.toString(),
        "rate":value1.shpr1,
        "description":value1.shpd1 }

 

  };
console.log(JSON.stringify(awb_entry1));
    window.scrollTo(0,0);

document.getElementById("text_content").style.display="none";
document.getElementById("hash").style.display="none";
document.getElementById("inner").style.display="block";
this.loading=true;
 let headers = new Headers();
        headers.append('Content-Type','application/json');
       
        let options = new RequestOptions({headers:headers});
  this.http.post('http://13.250.111.95:80/createAWB', awb_entry1,options).subscribe(
        res => {
          this.loading=false;
 this.hno=res["_body"];
 var str="You've successfully updated the data!";
 //alert("Hash value:\n"+this.hno);
document.getElementById("inner").style.display="none";
document.getElementById("text_content").style.display="block";
document.getElementById("hash").style.display="block";
document.getElementById("text_content").className="textcolour";
document.getElementById("text_content").textContent=str;
document.getElementById("hash").textContent="Hash value:"+this.hno;
document.getElementById("hash").className="hashcolour";
 this.list_display();
          console.log(res);
         
          console.log(res["_body"][0]);
        },
        err => {
          this.loading=false;

document.getElementById("inner").style.display="none";
document.getElementById("text_content").style.display="block";
document.getElementById("text_content").className="textcolour";
//alert("You've successfully submitted the data.");
document.getElementById("text_content").textContent="Oops! Error occured";
 this.list_display();
          console.log("Error occured");
        }
      );
  
    
      this.dialogRef.close();
    
}
blockHash:string;
blockNumber:string;
contractAddress:string;
cumulativeGasUsed:string;
from:string;
to:string;
root:string;
gasUsed:string;
transactionHash:string;
transactionIndex:string;
logsBloom:string;
logs:Array<any>;



hash(hno:any){
  this.hno=hno;
var hurl=" http://13.250.111.95:80/getTransaction/"+this.hno;
 this.httpService.get(hurl).subscribe(
      data => {
         this.hashNo = Array.of(data);	
          //this.loading=false;
          this.blockHash=data["blockHash"];
this.blockNumber=data["blockNumber"];
this.contractAddress=data["contractAddress"];
this.cumulativeGasUsed=data["cumulativeGasUsed"];
this.from=data["from"];
this.to=data["to"];
this.root=data["root"];
this.gasUsed=data["gasUsed"];
this.transactionHash=data["transactionHash"];
this.transactionIndex=data["transactionIndex"];
this.logsBloom=data["logsBloom"];
this.logs=data["logs"];
          console.log(this.to);    
                    console.log(data);     
 
        },
        err => {
          console.log("Error occured");
        }
      );
      console.log(this.hashNo);
  this.show = true;

}






}

  
