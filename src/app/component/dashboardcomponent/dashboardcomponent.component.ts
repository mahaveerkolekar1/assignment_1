import { Component, OnInit } from '@angular/core';
import { DashBoard } from './dashboard';
import { PostService } from '../../post.service';
import { Response } from '@angular/http';
import { CommunicatorService } from '../../communication-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboardcomponent',
  templateUrl: './dashboardcomponent.component.html',
  styleUrls: ['./dashboardcomponent.component.css']
})
export class DashboardcomponentComponent implements OnInit {
  dashBoard: DashBoard;
  dashBoards: DashBoard[] = [];
  postCounter: number;
  constructor(private postService: PostService, private communicatorService: CommunicatorService, private router: Router) {

    this.dashBoard = new DashBoard(0, 0, '', '');
   }

  ngOnInit() {
    this.getDashBoardDta();
  }
getDashBoardDta() {
  this.postService.getDashboardData().subscribe((response: Response) => {
    this.dashBoards = response.json();
    this.postCounter = this.dashBoards.length;
    console.log(this.postCounter);
  });
}
sendId(e) {
  this.communicatorService.passData(e);
  this.router.navigate(['details']);
  console.log(e);
}
}
