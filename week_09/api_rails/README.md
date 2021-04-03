# Rails Api for a blog

This is an API created with Rails for a blog.
It has articles with comments, and users that can be authenticated with devise-jwt.

## Installation

Clone this repository
Bundle install
Run `rails db:create db:migrate db:seed`
Create a .env with a secret key
`DEVISE_JWT_SECRET_KEY=your_secret_key`
Run `rails server`

You can import the file `Insomnia_2021-03-02.json` (which is at the root of the project) in your Insomnia app.
All request and environment dev are already set up.

- See all articles `GET /articles`
- Sign up `POST /signup`
- Login `POST /login`
- Create an article `POST /articles` (an article is public by default, to make it private use the params `"is_private": true`)
- See an article` GET /articles/article_id`
- Edit an article (will works only if it's yours) `PATCH /articles/article_id`
- Delete an article (will works only if it's yours) `DELETE /articles/article_id`
- Try to create a user without email or an article without a title or content
- Try to visit a private article that is yours, and one that is not yours
- See comments of an article `GET /articles/article_id/comments`
- Add a comment to an article `POST /articles/article_id/comments`
- Edit a comment (will works only if it's yours) `PATCH /articles/article_id/comments/comment_id`
- Delete a comment (will works only if it's yours) `DELETE /articles/article_id/comments/comment_id`
