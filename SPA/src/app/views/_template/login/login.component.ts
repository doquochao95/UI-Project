import { AuthService } from './../../../core/service/auth.service';
import { IconSetService } from '@coreui/icons-angular';
import { UserForLoginParam } from './../../../core/helpers/params/user-for-login.param';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/service/common.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { NgSnotifyService } from 'src/app/core/service/ng-snotify.service';
import { CaptionConstants, MessageConstants } from 'src/app/core/helpers/enums/message.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public userForLoginParams: UserForLoginParam = <UserForLoginParam>{};
  public LoginFormData = this.formbuilder.group({
    _username: ['', Validators.required],
    _password: ['', Validators.required],
    _remember_me: [''],
  });
  constructor(
    private common: CommonService,
    private formbuilder: FormBuilder,
    private spinnerService: NgxSpinnerService,
    private authService: AuthService,
    private snotifyService: NgSnotifyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForLoginParams.remember_me = false;
  }
  logIn() {
    this.spinnerService.show();
    console.log('Login Params : ' + this.userForLoginParams);
    this.authService.login(this.userForLoginParams).subscribe(
      (resp) => {
      this.spinnerService.hide();
      this.snotifyService.success(MessageConstants.LOGGED_IN, CaptionConstants.LOGIN_SUCCESS);
      this.router.navigate(['/dashboard']);},
      (erro)=> {
        this.spinnerService.hide();
        this.snotifyService.error(MessageConstants.LOGIN_FAILED, CaptionConstants.LOGIN_FAILED);}
      );
  }
}
