import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {AuthService} from "../../../../services/auth/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  submitted = false;
  form = this.fb.group({
    phone_number: ['', [Validators.required, Validators.pattern(/(^(01)[3-9]\d{8})$/)]],
    password: ['', Validators.required],
  })

  get f() {
    return this.form.controls;
  }

  matcher = new MyErrorStateMatcher();
  server_errors: any = []

  submit_form() {
    if (this.form.valid) {
      this.authService.sellerLogin(this.form.value).subscribe(
        (response) => {
        },
        (error: HttpErrorResponse) => {
          if (error.status === 200) {
            this.router.navigate(['/seller/dashboard'])
          }

          if (error.status === 400 || error.status === 422) {
            this.server_errors.push(error.error)
          }
        },
      )
    }
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
