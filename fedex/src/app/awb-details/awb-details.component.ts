import { Component, OnInit, Inject,Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-awb-details',
  templateUrl: './awb-details.component.html',
  styleUrls: ['./awb-details.component.css']
})
export class AwbDetailsComponent implements OnInit {
 form: FormGroup;
    description:string;
arrBirds: Object [];

 
    constructor(
      private httpService: HttpClient,private router:Router,
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<AwbDetailsComponent>,
        @Inject(MAT_DIALOG_DATA) data) {

        this.description = data.description;
    }

    ngOnInit() {
     
        this.form = this.fb.group({
            description: [this.description, []],
          
        });
 this.httpService.get('http://13.250.111.95:80/getAWB/12').subscribe(
      data => {
//console.log(data);
         this.arrBirds = Array.of(data);	 // FILL THE ARRAY WITH DATA.
       
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    }

    close() {
        this.dialogRef.close();
    }
}
