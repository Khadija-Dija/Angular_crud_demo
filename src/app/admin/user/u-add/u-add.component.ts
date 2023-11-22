import { TokenService } from 'src/app/_services/token.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { IUser } from 'src/app/_interfaces/user';

@Component({
  selector: 'app-u-add',
  templateUrl: './u-add.component.html',
  styleUrls: ['./u-add.component.css'],
})
export class UAddComponent implements OnInit {
  user: IUser = {
    nom: '',
    prenom: '',
    pseudo: '',
    email: '',
    password: '',
  };
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  onSubmit() {
    this.userService
      .addUser(this.user)
      .subscribe((data) => console.log(data.message));
  }
}
