## What is ExpressJS?

With our any web framework we need to write all functionality again and again, it is complex for big project and as well as small project so we use framework for web development. Framework is nothing but collection of functions, classes, set of rules.

In backend project we think only our business logic so we use express to reduce complexity of our project and time.

## What is middleware in ExpressJS ?

Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next function in the application's request-response cycle.

In ExpressJS Middleware work in top to bottom when request accept it.

## Use of Next in Middleware

next is used for call next middleware

## Use of res.send in Express

res.send is function which accept content data which we want to send.

If Content inside function is string, Express will add it's Content type as text/html

> For Object we need to pass content-type

## app.listen

app.listen is used for set port for our backend server
