import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    userName: new FormControl(''),
    Password: new FormControl('')
  });
  constructor(
    private router: RouterModule,
    private userService: UsersService) { }

  handleSubmit() {
    var formData = this.loginForm.value;
    var data = {
      userName: formData.userName,
      password: formData.Password
    }
    this.userService.login(data);
  }
  
}
