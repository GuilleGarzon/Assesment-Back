FAVS API with JS
Favs is a new company that aims to provide a better way to organize your favorite things: music, clothes, courses, etc., all in one place.

To register you need an email and password, the email has to be valid. For this, in Postman, (POST: http://localhost:8000/api/users) and if you want login, so, (POST: http://localhost:8000/auth/local/login).

Example: 
Authentication user /auth/local/login:
Request Body:
json
{
"email": "kz@mz.com",
"password": "12345"
}

Response:
json
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFjNjM1MTljZjlkNTQ5YjA3YWU2NTEiLCJpYXQiOjE2MjE5MTMyNjIsImV4cCI6MTYyMTk5OTY2Mn0.WkptwtzkfxNu5sQ28idbt4bJ7RDbXvVNlZXF0Z0ht-0"
}

Following you see the requests that you can do:

To create your list (POST: http://localhost:8080/api/lists). In Postman, you must give a name to the list.

To find lists for your user (GET: http://localhost:8080/api/lists)

To find one list for unique id (GET: http://localhost:8080/api/lists/id)

To delete one list for unique id (DELETE: http://localhost:8080/api/lists/id)

To create your fav with an unique id to the list (POST: http://localhost:8080/api/favs/idFavs
