import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from '../../post.service';
import { Response } from '@angular/http';
import { CommunicatorService } from '../../communication-service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  post: Post;
  posts: Post[] = [];
  postCounter: number;
  idFromDashBoard: string;
  constructor(private postService: PostService, private communicatorService: CommunicatorService) {
    this.post = new Post(0, 0, '', '', '');
  }

  ngOnInit(): void {
    this.communicatorService.cast.subscribe(res => this.idFromDashBoard = res );

    this.getData();
  }
  getData() {
    this.postService.getData().subscribe((response: Response) => {
      this.posts = response.json();
      this.postCounter = this.posts.length;
      console.log(this.postCounter);
    });
  }
}
