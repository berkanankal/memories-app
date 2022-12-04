# Mern App

A mern stack project where you can share your memories, interact and socialize with the memories of others.

## Demo

https://mern-memories-app-berkan-ankal.herokuapp.com/posts

## Tech Stack
### Frontend
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Redux Toolkit](https://redux-toolkit.js.org/) - Tools that helps simplify Redux development. Redux is simply a store to store the state of the variables in your app.
- [Material UI](https://mui.com/) - An open-source React component library that implements Google's Material Design.
- [React Router](https://reactrouter.com/en/main) - A standard library for routing in React.
- [Formik](https://formik.org/) - Third party React form library.
- [Yup](https://www.npmjs.com/package/yup) - JavaScript object schema validator.
- [Moment](https://momentjs.com/) - JavaScript library which helps is parsing, validating, manipulating and displaying date/time in JavaScript in a very easy way.
- [Axios](https://axios-http.com/docs/intro) - Javascript library used to make HTTP requests from node.
- [Jwt Decode](https://www.npmjs.com/package/jwt-decode) - A small browser library that helps decoding JWTs token which are Base64Url encoded.
- [React Toastify](https://www.npmjs.com/package/react-toastify) - Allows you to add notifications to your app with ease.

### Backend
- [MongoDB](https://www.mongodb.com/home) - Document-oriented NoSQL database used for high volume data storage.
- [Express.js](https://expressjs.com/) - Node.js web application framework.
- [Node.js](https://nodejs.org/en/) - Open-source, cross-platform JavaScript runtime environment.
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - Optimized bcrypt in JavaScript with zero dependencies.
- [Mongoose](https://www.npmjs.com/package/mongoose) - MongoDB object modeling tool designed to work in an asynchronous environment.
- [Multer](https://www.npmjs.com/package/multer) - Middleware designed to handle multipart/form-data in forms.
- [Express Async Handler](https://www.npmjs.com/package/express-async-handler) - Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero-dependency module that loads environment variables from a .env file into process.env.
- [Nodemon](https://www.npmjs.com/package/nodemon) - Tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [Json Web Token](https://jwt.io/) - Open standard used to share security information between two parties — a client and a server.
- [Cors](https://www.npmjs.com/package/cors) - Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [AWS SDK](https://www.npmjs.com/package/aws-sdk) - Collection of software tools for the creation of applications and libraries that use Amazon Web Services (AWS) resources.

## Environment Variables

To run this project, you will need to add the following environment variables to your /server/.env file.

`MONGO_URI`: Your MongoDB URI. <br>
`JWT_SECRET_KEY`: Anything you can think of. <br><br>
`AWS_BUCKET_NAME`
`AWS_BUCKET_REGION`
`AWS_ACCESS_KEY`
`AWS_SECRET_KEY`
<br>

You can watch the video below from the 4:36th minute to the 11:28th minute for aws account opening and configuration processes.
<br>
https://www.youtube.com/watch?v=NZElg91l_ms&t=1s

## Run Locally

First clone this repository.

```bash
git clone https://github.com/berkanankal/mern-app.git
```

Go to the project directory.

```bash
cd mern-app
```

Go to the server directory. Install dependencies and run server. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.

```bash
cd server
npm install
npm start
```


Go to the client directory. Install dependencies and run client.

```bash
cd client
npm install
npm start
```

## Screenshots

![1](https://user-images.githubusercontent.com/67144252/205496400-ecb3a877-07f8-4324-8d5a-989dd11bbaff.png)
<br>
<br>
![image](https://user-images.githubusercontent.com/67144252/205118117-82c67642-63ff-43c7-8dd5-17bac2b55406.png)
<br>
<br>
![image](https://user-images.githubusercontent.com/67144252/205118385-3bf364bc-dd20-47c6-8835-0ce9f6a9a78e.png)
<br>
<br>
![image](https://user-images.githubusercontent.com/67144252/205118450-e8ae9ea6-2255-4b37-b042-2eea3ffbb914.png)
<br>
<br>
![2](https://user-images.githubusercontent.com/67144252/205496405-5e85a7c8-3260-4d04-837a-276ae54117bf.png)






