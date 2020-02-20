## DEMO: https://mern31-6.herokuapp.com/posts
### Post Blog App

### Description:
Full-stack application in React, Redux, connected to MongoDB. 
The app was created with ```create-react-app```.
Application contains: main website with all posts, sub-website with single post, sub-website with form to add post and make commments.

### Technologies used for the project:
* Mongo.db (Mongoose)
* Express
* React (Redux, React Router)
* Node.js
* Webpack, Babel, Axios

### Structure of the app:
- Front-end files are located in the ```client/src``` directory, built version in ```client/build```
- Back-end files are located in the server directory
- Database is hosted on MongoDB Atlas Cluster (data is also available in ```server/testData.js```)

### Init project:
Clone project and after cloning use command ```npm install```.

All needed source files are in ```src/```.

### NPM Scripts:
2 main scripts:

- build: built project in ```build/``` based on files from ```src/```.

- start: start project, watch on change and rebuilt after changes.
 
 ### MongoDB
-connected to external database MongoDB Atlas, do not need to have installed  db locally.
