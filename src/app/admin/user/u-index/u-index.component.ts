import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/_interfaces/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-u-index',
  templateUrl: './u-index.component.html',
  styleUrls: ['./u-index.component.css'],
})
export class UIndexComponent implements OnInit {
  userList: IUser[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users) => {
      console.log(users), (this.userList = users.data);
    });
  }

  trash(id: number | undefined) {
    console.log(id);
    this.userService.trashUser(id).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }

  untrash(id: number | undefined) {
    this.userService.untrashUser(id).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }
  delete(id: number | undefined) {
    this.userService.deleteUser(id).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }
}
