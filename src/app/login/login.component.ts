import {Component} from '@angular/core';
import {MdDialog} from '@angular/material';
import { LoaderComponent } from '../common/loader.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: 'login.component.html',
})
export class LoginComponent {

    constructor(private dialog: MdDialog, private router: Router) {}

    onLogin(e: any, formCtrl: any): boolean {
        console.log(formCtrl, formCtrl.controls, formCtrl.value);
        e.preventDefault();
        this.dialog.open(LoaderComponent, {disableClose: true});
        setTimeout(() => {
            this.dialog.closeAll();
            this.router.navigate(['home']);
        }, 2000);
        return false;
    }
}
