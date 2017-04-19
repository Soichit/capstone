import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { SigninService } from "./signin.service";
import { Http } from "@angular/http";


@Component({
  selector: 'app-login-new',
  // encapsulation: ViewEncapsulation.None,
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css'],
  providers: [SigninService]
})
export class LoginNewComponent implements OnInit {

  constructor(private signinService: SigninService) { }

  ngOnInit() {
  }

  // onSubmit(email: string, password: string) {
  //   console.log("SUBMIT");
  //   this.signinService.sendData({email: email, password: password})
  // }

}
