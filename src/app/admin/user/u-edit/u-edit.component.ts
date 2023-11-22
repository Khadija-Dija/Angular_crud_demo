import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/_interfaces/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css'],
})
export class UEditComponent implements OnInit {
  user: IUser = {
    id: 0,
    nom: '',
    prenom: '',
    pseudo: '',
    email: '',
    password: '',
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    let uid = this.activatedRoute.snapshot.paramMap.get('uid');
    console.log(uid);
    //recuperer user
    this.userService.getUser(uid).subscribe((data: any) => {
      console.log(data);
      this.user = data.data;
    });
  }
  onSubmit() {
    this.userService
      .updateUser(this.user)
      .subscribe((data) => console.log(data.message));
  }

  // //subscribe :(souscrire à un Observable) on se brache sur le canal par lequel va passer les données
  // this.activatedRoute.params.subscribe((data) => {
  //   console.log(data);
  // });
}
