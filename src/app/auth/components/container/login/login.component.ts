import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errors: string[] = [];
  constructor(
    private service: AuthService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  onLogin($event: any) {
    this.service.proceedLogin($event).subscribe((res: any) => {
      console.log(res);
      if (res.success == true) {
        localStorage.setItem('token', res.jwt);
        var _extractedToken = res.jwt.split('.')[1];
        var _atobdata = atob(_extractedToken);
        var _finaldata = JSON.parse(_atobdata);
        for (const key in _finaldata) {
          localStorage.setItem(key, _finaldata[key]);
        }
        console.log(localStorage)
        this.router.navigate(['']);
      } else {
        this.errors = res.errors;
      }
    }
    )
  }
}
