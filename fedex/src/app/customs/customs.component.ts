import { Component, OnInit, TemplateRef } from '@angular/core';

import { Router} from '@angular/router';
import {MatDialog, MatDialogConfig,MatDialogRef} from "@angular/material";
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FedexComponent} from '../fedex/fedex.component';

@Component({
  selector: 'app-customs',
  templateUrl: './customs.component.html',
  styleUrls: ['./customs.component.css']
})
export class CustomsComponent implements OnInit {
 
ano=99;
   len:number;
   arr:Array<any> = [];
   url:string;
    dialogRef;
     shp1:string='';
prd1: string='';
pc1:string='';
wt1:string='';
no1:string='';

 
  wgt1: string='';
  vol1: string='';
newAttributeCode1:string;
newAttributeName1:string;
sacno1:string='';
scode1:string='';
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
cacno1:string='';
ccode1:string='';
status:string="New";
ch1:string='';
at1:string='';
unit1:string='';
shpd1 : string='';
shprc1: string='';
shpr1: string='';
shppc1: string='';
shpcw1: string='';
shpwt1: string='';
loading:boolean=false;
  constructor(private httpService: HttpClient,private router:Router, private dialog: MatDialog ,
  private http:Http) { }

  
   openModal(template:TemplateRef<any>, bird: any, i:any) :void {
 const dialogConfig = new MatDialogConfig();

this.ano=bird[i].AWBNumber;
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };
/////
  this.dialogRef =  this.dialog.open(template, dialogConfig);
this.url="http://13.250.111.95:80/getAWB/"+this.ano;
this.httpService.get(this.url).subscribe(
      data => {
       console.log(data);
         this.arrBirds1 = Array.of(data);	 // FILL THE ARRAY WITH DATA.
           this.shp1= this.arrBirds1[0]["proDetails"].shipmentType; 
this.prd1= this.arrBirds1[0]["proDetails"].productType;
        this.no1= this.arrBirds1[0]["proDetails"].AWBNumber;
this.pc1= this.arrBirds1[0]["proDetails"].tPieces;
 this.wt1= this.arrBirds1[0]["proDetails"].tWeight;
 this.status=this.arrBirds1[0]["proDetails"].status;
this.wgt1= this.arrBirds1[0]["DimensionDetails"].tDimWeight;
  this.vol1= this.arrBirds1[0]["DimensionDetails"].tVolume;
  this.ex1= this.arrBirds1[0]["exDateandPlace"].excDate;
this.ep1= this.arrBirds1[0]["exDateandPlace"].excPlace;
this.rp1= this.arrBirds1[0]["exDateandPlace"].recptDate;
this.rt1= this.arrBirds1[0]["exDateandPlace"].recptTime;
this.newAttributeCode1= this.arrBirds1[0]["routing"].destination;
this.newAttributeName1= this.arrBirds1[0]["routing"].carrier;
this.sacno1= this.arrBirds1[0]["shipperLabel"].accountNumber;
this.scode1= this.arrBirds1[0]["shipperLabel"].postalCode;
this.sacname1= this.arrBirds1[0]["shipperLabel"].name;
this.sad1= this.arrBirds1[0]["shipperLabel"].Address;
this.scity1= this.arrBirds1[0]["shipperLabel"].city;
this.scntry1= this.arrBirds1[0]["shipperLabel"].country;
this.sState1= this.arrBirds1[0]["shipperLabel"].state;

this.cacno1= this.arrBirds1[0]["consignee"].accountNumber;
this.ccode1= this.arrBirds1[0]["consignee"].postalCode;
this.cacname1= this.arrBirds1[0]["consignee"].name;
this.cad1= this.arrBirds1[0]["consignee"].Address;
this.ccity1= this.arrBirds1[0]["consignee"].city;
this.ccntry1= this.arrBirds1[0]["consignee"].country;
this.cState1= this.arrBirds1[0]["consignee"].state;

this.ch1= this.arrBirds1[0]["chargeDetails"].mode;
this.at1= this.arrBirds1[0]["chargeDetails"].amount;
this.unit1= this.arrBirds1[0]["chargeDetails"].unit; 

this.shppc1= this.arrBirds1[0]["shipmentDetails"].pieces;
  this.shpwt1= this.arrBirds1[0]["shipmentDetails"].weight;
  this.shpcw1= this.arrBirds1[0]["shipmentDetails"].chargeableWeight;
this.shprc1= this.arrBirds1[0]["shipmentDetails"].rateClass;
this.shpr1= this.arrBirds1[0]["shipmentDetails"].rate;
this.shpd1= this.arrBirds1[0]["shipmentDetails"].description;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );  
    }
 
    arrBirds: Object [];
   arrBirds1: Object [];

ngOnInit() {
  this.list_display();
}
list_display(){this.httpService.get('http://13.250.111.95:80/listDisplay').subscribe(
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
  close(){
       this.dialogRef.close();

   }
logout() : void {
  localStorage.removeItem('Customs');
        localStorage.removeItem('fedex');
   this.router.navigate(["login"]);
}
  model: any = {};

   sub():void{
         //this.service.saveData(bird.awb); 

        this.router.navigate(["awb-details"]);

   }
  

  submit1(value1:any){
  this.status=value1;
var awb_entry1={
  "proDetails":{"shipmentType":this.shp1,
  "productType":this.prd1,
        "AWBNumber":this.no1,
        "tPieces":this.pc1,
        "tWeight":this.wt1,
        "status":this.status
    },
    "DimensionDetails":{
     "tDimWeight":this.wgt1,
     "tVolume":this.vol1
    
    },

   "exDateandPlace":{
         "excDate":this.ex1,
         "excPlace":this.ep1,
        "recptDate":this.rp1,
        "recptTime":this.rt1
    },
    "routing":{
      "srno":"1",
         "destination":this.newAttributeCode1,
         "carrier":this.newAttributeName1
    },
     "shipperLabel": {
          "accountNumber":this.sacno1,
          "name":this.sacname1,
          "creditStatus":"right",
          "Address":this.sad1,
          "city":this.scity1,
          "state":this.sState1,
          "country":this.scntry1,
          "postalCode":this.scode1
    },
    "consignee":{
          "accountNumber":this.cacno1,
          "name":this.cacname1,
          "creditStatus":"right",
          "Address":this.cad1,
          "city":this.ccity1,
          "state":this.cState1,
          "country":this.ccntry1,
          "postalCode":this.ccode1
    },
     "chargeDetails":{
"mode":this.ch1,
"amount":this.at1,
"unit":this.unit1
},
    "Routing":{
     
         "destination":this.newAttributeCode1,
         "carrier":this.newAttributeName1
    },

 "shipmentDetails": {
           "pieces":this.shppc1,
        "weight":this.shpwt1,
        "rateClass":this.shprc1,
        "chargeableWeight":this.shpcw1,
        "rate":this.shpr1,
        "description":this.shpd1 }

  };
console.log(JSON.stringify(awb_entry1));

window.scrollTo(0,0);


document.getElementById("text_content").style.display="none";
document.getElementById("inner").style.display="block";
this.loading=true;
 let headers = new Headers();
        headers.append('Content-Type','application/json');
       
        let options = new RequestOptions({headers:headers});
  this.http.post('http://13.250.111.95:80/createAWB', awb_entry1,options).subscribe(
        res => {
           this.loading=false;

document.getElementById("inner").style.display="none";
document.getElementById("text_content").style.display="block";
document.getElementById("text_content").className="textcolour";
//alert("You've successfully submitted the data.");
document.getElementById("text_content").textContent="You've successfully updated the data!";
 this.list_display();
          console.log(res);
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
          console.log("Error occured");
        }
    
}
