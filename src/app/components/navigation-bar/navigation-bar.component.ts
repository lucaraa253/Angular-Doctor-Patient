import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(
    public router : Router,
    public user : UserService) { }

  ngOnInit(): void {
  }

  onClick() {
     this.user.resetUser();
     this.router.navigate(['DoctorFinder']);
  }

}
