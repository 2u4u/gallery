# Gallery

This project is created on MERN (MongoDB, Express, React, Node) stack.

Works with <code>node version v15.9.0</code> and <code>npm version 7.5.3</code>

* [Full MERN based project](#full)
* [Backend side](#backend)
* [Client side](#client)
* [Functionality and features](#features)
* [Description](#description)
* [How to start](#howto)
* [Test data](#testdata)

<h2 id="full">Full MERN based project:</h2>

* [TypeScript](https://www.typescriptlang.org/)
* [Concurrently](https://www.npmjs.com/package/concurrently) - to start backend and frontend concurrently
* [Nodemon](https://www.npmjs.com/package/nodemon) - hot reload for node app

<h2 id="backend">Backend side:</h2>

Backend was created in order to see full functionality on client side.

Libraries/frameworks
* Node.js
* [Express.js](https://expressjs.com/) - web framework for node.js
* [Multer](https://github.com/expressjs/multer) - middleware for handling multipart/form-data for node.js
* [Mongoose](https://mongoosejs.com/) - mongodb object modeling for node.js

Cloud based solutions for backend:
* [mongodb.com](mongodb.com) - to store database
* [Amazon S3](https://aws.amazon.com/s3/) - to store images

Backend implementation details (my articles on medium):
* [How to deploy MERN application on Amazon AWS EC2](https://medium.com/@2u4u/how-to-deploy-mern-application-on-amazon-aws-ec2-9f5f98b12ba0)
* [How to upload images to Amazon S3 using Node and Multer?](https://medium.com/@2u4u/how-to-upload-images-to-amazon-s3-using-node-and-multer-2a26922f31f9)

<h2 id="client">Frontend side:</h2>

Libraries/frameworks:
* [React](https://create-react-app.dev/) - create-react-app based react app
* [React-dropzone](https://react-dropzone.js.org/) - react library to create drag and drop zone
* [Redux Toolkit](https://redux.js.org/) - state container for React
* [SASS](https://sass-lang.com/) - extends css
* [Axios](https://axios-http.com/) - http client
* [Eslint](https://eslint.org/) - linter to check for errors and make code style clean
* [Jest](https://jestjs.io/) - testing helpers and snapshot testing of components

Methodologies:
* [Feature Sliced Architecture](https://feature-sliced.design/) - architecture approach for frontend. Mix off [atomic design](https://atomicdesign.bradfrost.com/) and Onion architecture
* [BEM](https://en.bem.info/methodology/) - naming convention for styles

<h2 id="features">Functionality and features:</h2>

* Select manually files or drag and drope images to upload (Accepted types: .jpeg, .png, .mpeg, .wav, .mp4, .webm, .mp3)
* Change view of uploaded files grid/list
* Filter files by names or types
* Open any file in File Viewer, navigate inside File Viewer, download files from it
* Reponsive design

Tests

* Helpers are tested with jest
* Amotic components (entities) are tested with snapshot testing
```
cd client
npm run test
```

<h2 id="description">Description:</h2>

Works with HTML5 <code>video</code>, <code>audio</code>

<p>Object structure:</p>
```json
[
{
    "id": 1,
    "type": "image",
    "name": "Demo image",
    "url": "demo.url.com/images/one.jpg",
    "date": "Fri Apr 19 2019 09:00:56 GMT+0200",
    "duration": "00:12"
},
```

Works with modern browsers. Can work in IE, but not tested.

<h2 id="howto">How to start:</h2>

Install dependencies:

```
npm run client:install
```

Start project:

```
npm run client:dev
```

or go to client folder

Install dependencies:

```
npm install
```

Start project:

```
npm run start
```

This project can be started locally with backend, but needs some extra actions.

1. Set S3 bucket for test project
    * [How to upload images to Amazon S3 using Node and Multer?](https://medium.com/@2u4u/how-to-upload-images-to-amazon-s3-using-node-and-multer-2a26922f31f9)
2. Set [mongodb cloud database](mongodb.com)
3. Put credentials to <code>server/src/config/index.example.ts</code> and rename it to <code>index.ts</code>
4. Install backend dependencide <code>npm run server:install</code>
5. Run both server and client <code>npm run dev</code>

<h2 id="testdata">Test data:</h2>

Some images, videos and audio provided in <code>test data</code> folder