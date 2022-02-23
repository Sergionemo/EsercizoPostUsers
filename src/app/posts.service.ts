import { Post } from "./models/post";

let posts: Post[] = [
  {
    id: 1,
    title: 'primo post',
    body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    active: false,
    type: 'news',
    author: 'filippo',
  },
  {
    id: 2,
    title: 'second post',
    body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    active: true,
    type: 'politic',
    author: 'marco',
  },
  {
    id: 3,
    title: 'terzoo post',
    body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    active: false,
    type: 'education',
    author: 'giuseppe',
  },
  {
    id: 4,
    title: 'quarto post',
    body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    active: false,
    type: 'politic',
    author: 'antonio',
  },
  {
    id: 5,
    title: 'quinto post',
    body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    active: true,
    type: 'news',
    author: 'ernesto',
  },
];

export function getPosts(){
  return posts;
}

export function updatePosts(data: Partial<Post>, id: number) {
  posts = posts.map(post => post.id == id ? { ...post, ...data } : post);
  return posts.find(post => post.id == id) as Post;
}


