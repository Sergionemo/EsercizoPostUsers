import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../models/post';
import { User } from '../models/user';
import * as postService from '../posts.service';
import { UsersService } from '../users.service';


@Component({
  template: `
    <div>
      <h1>{{ posts[id - 1].author }}</h1>
      <h3>{{ posts[id - 1].title }}</h3>
    </div>
  `,
  styles: [],
})
export class PostDetailsComponent implements OnInit {
  posts: Post[] = [];
  id!: number;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);

    this.posts = postService.getPosts();
  }
}
