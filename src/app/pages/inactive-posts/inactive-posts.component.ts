import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import * as postsSrv from 'src/app/posts.service';

@Component({
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent implements OnInit {
  posts!: Post[];

  constructor() {}

  ngOnInit(): void {
    const posts = postsSrv.getPosts();
    this.posts = posts;
    console.log(this.posts);
  }

  onActivePosts(id: number, i: number) {
    postsSrv.updatePosts({ active: true }, id);
    this.posts.splice(i, 1);
  }
}
