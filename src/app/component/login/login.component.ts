import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../post.service';
import { DashBoard } from '../dashboardcomponent/dashboard';
import { Response  } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: boolean;
  UserId: number;
  Id: number;
  dashBoards: Array<DashBoard>;
  constructor(private router: Router, private postService: PostService) {
    this.msg = false;

    this.dashBoards = null;
  }

  ngOnInit() {

    this.getDashBoardDta();
  }



  getDashBoardDta() {
    this.postService.getDashboardData().subscribe((response: Response) => {
      this.dashBoards = response.json();

    });
  }
  login() {
   // this.dashBoards.filter(x.userId=>this.userName)
  const data   = this.dashBoards.filter(x => x.userId == this.UserId && x.id == this.Id);
    console.log('length' + data.length);
  if ( data.length > 0) {
    console.log(this.UserId + ' ' + this.Id);
    this.router.navigate(['dashboard']);
  } else {
    console.log(this.UserId + ' ' + this.Id);
    this.msg = true;
  }
  }
}
