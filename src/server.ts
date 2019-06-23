import App from './app';
import PostsController from './post/post.controller';
 
const app = new App(
  [
    new PostsController(),
  ],
  5000,
);
 
app.listen();