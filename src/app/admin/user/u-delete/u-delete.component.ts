import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-u-delete',
  templateUrl: './u-delete.component.html',
  styleUrls: ['./u-delete.component.css'],
})
export class UDeleteComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    //subscribe :(souscrire à un Observable) on se brache sur le canal par lequel va passer les données
    this.activatedRoute.params.subscribe((data) => {
      console.log(data);
    });
  }
}
