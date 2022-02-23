import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-card',
  template: `
    <div
      [ngClass]="{
        'bg-warning': post.type == 'news',
        'bg-info': post.type == 'education',
        'bg-dark': post.type == 'politic',
        'text-white': post.type == 'politic'
      }" class="mb-4"
    ><h5 class="card-header">Post</h5>
    <div class="card-body">
      <h5 class="card-title">{{post.title}}</h5>
      <p class="card-text">{{post.body}}</p>
      <p class="card-title">{{post.author}}</p>
      <ng-content></ng-content>
    </div>
  </div>
  `,
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {

  @Input() post!: Post;
  @Input() bgColor!: string;

  constructor() {}

  ngOnInit(): void {}
}
