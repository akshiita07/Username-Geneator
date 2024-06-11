# Username-Geneator

### Description:
The Simple Username Generator is a web application built with Node.js and Express. It allows users to enter their first and last names, combines them to create a username, and displays the generated username on the same page. The application leverages EJS for templating and Bootstrap for styling, ensuring a responsive and user-friendly interface. Middleware such as body-parser is used for handling form data.

### Implementation Details:

#### 1. Project Initialization and Setup
- **Initialize NPM Project**: `npm init`
- **Install Dependencies**:
  - Express: `npm i express`
  - Body-Parser: `npm i body-parser`
  - Path: `npm i path`
  - URL: `npm i url`
  - EJS: `npm i ejs`

#### 2. Server Application
The server application is written in `index.js` and includes the following key parts:

1. **Module Imports**:
   ```javascript
   import express from "express";
   import bodyParser from "body-parser";
   import ejs from "ejs";
   import { dirname } from "path";
   import { fileURLToPath } from "url";
   ```

2. **Express App Setup**:
   ```javascript
   const app = express();
   const port = 3000;

   app.use(express.static('public'));
   app.use(bodyParser.urlencoded({ extended: true }));

   const __dirname = dirname(fileURLToPath(import.meta.url));
   ```

3. **Route Handling**:
   - **GET Request for Home Page**:
     ```javascript
     app.get("/", (req, res) => {
         res.render("index.ejs");
     });
     ```

   - **POST Request for Username Submission**:
     ```javascript
     app.post("/submit", (req, res) => {
         const userName = req.body.first + req.body.last;
         res.render("index.ejs", { outputName: userName });
     });
     ```

   - **POST Request for Resetting the Form**:
     ```javascript
     app.post("/reset", (req, res) => {
         res.render("index.ejs");
     });
     ```

4. **Server Listening**:
   ```javascript
   app.listen(port, () => {
       console.log(`Server running at ${port}`);
   });
   ```

#### 3. Front-End Implementation
The front-end is implemented using an HTML file (`index.ejs`) and a CSS file (`style.css`).

1. **HTML Form (index.ejs)**:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Form</title>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
       <link rel="stylesheet" href="style.css">
   </head>
   <body>
       <% if(locals.outputName){ %>
           <h1>Your username is: </h1>
           <h2 class="answer"><%= outputName %></h2>
           <form action="/reset" method="post">
               <input type="submit" class="btn btn-success" value="Reset">
           </form>
       <% } else { %>
           <h1>Username Generator</h1>
           <form action="/submit" method="post">
               <label for="first">First Name:</label>
               <input type="text" class="form-control" id="first" name="first" required>
               <label for="last">Last Name:</label>
               <input type="text" class="form-control" id="last" name="last" required>
               <input type="submit" class="btn btn-success" value="Submit">
           </form>
       <% } %>
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
   </body>
   </html>
   ```

2. **CSS Styling (style.css)**:
   ```css
   h1 {
       text-align: center;
       color: green;
       margin-bottom: 50px;
   }

   form {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
   }

   .form-control {
       margin-left: 20px;
       width: 50%;
   }

   .btn {
       margin-top: 30px;
   }

   .answer {
       text-align: center;
       font-style: italic;
       color: orange;
   }
   ```

### Running the Application
1. **Start the Server**: Use `nodemon` for automatic restarts: `nodemon index.js`
2. **Access the Application**: Open a web browser and navigate to `localhost:3000`.

### Summary
The Simple Username Generator is a straightforward Node.js application that demonstrates the basics of setting up an Express server, handling form submissions, rendering dynamic content with EJS, and using middleware for parsing request bodies. The application is styled using Bootstrap and includes basic CSS for additional styling.
