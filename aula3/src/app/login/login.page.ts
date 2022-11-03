import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: Router, private UserService: UserService) { }
  public email: string = undefined;
  public password: string = undefined;


  ngOnInit() {
  }

  onSubmit(){
    const data = {
      email: this.email,
      password: this.password
    }
    this.UserService.userLogin(data).subscribe( data => {
      this.route.navigate(['/regioes']);
    });
  }

  goToPage() {
    this.route.navigate(['/register']);
  }

}
