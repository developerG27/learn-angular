import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public page_title: string;
  public user: User;

  constructor(
    private _userService: UserService
  ){ 
    this.page_title = 'Registrati';
    this.user = new User(1, '', '', 'ROLE_USER', '', '', '', '');

    /*
    public id: number,
    public name: string,
    public surname: string,
    public role: string,
    public email: string,
    public password: string,
    public description: string,
    public image: string
    */
  }

  ngOnInit() {
    console.log('il componente register è stato caricato')
    console.log(this._userService.test());
  }

  onSubmit(form){
    console.log(this.user);
    form.reset();
  }

}
