import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Button } from 'protractor';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

// import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-frm',
  templateUrl: './frm.component.html',
  styleUrls: ['./frm.component.scss']
})
export class FrmComponent implements OnInit {
  personalform = this.fb.group({

    Referenceid: ['', Validators.required],
    firstname: ['', Validators.required],
    middlename: ['', Validators.required],
    lastname: ['', Validators.required],
    phno:['',Validators.required],
    alt:['',Validators.required],
    aad:['',Validators.required],
    pan:['',Validators.required],
   
   
    
  });
  personal = this.fb.group({

   one: ['', Validators.required],
    two: ['', Validators.required],
    three: ['', Validators.required],
    four: ['', Validators.required],
    five:['', Validators.required]
   
  });


  constructor(private fb: FormBuilder, private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
 
    // private snackbar: MatSnackBar
) { }

  ngOnInit(): void {
  }

}
