import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  loggedInUser!: User;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem('user') || '{}');
    console.log(this.loggedInUser);
  }

  // logout(){
  //   sessionStorage.clear();
  //   this.router.navigate([""]);
  // }

}
