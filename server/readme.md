# Template for Full Stack with JWT authentication 

## Tech Stack: Node JS, Express JS, MongoDB, JWT and ejs

### Packages:

- express
- mongoose
- jsonwebtoken
- cookie-parser
- validator
- bcrypt
- ejs

to install these packages/node modules simply copy the command below and paste it into your terminal

```
npm i express mongoose jsonwebtoken cookie-parser bcrypt validator ejs
```

## Config

    ! important note: do not use sensitive data in plain text and in the same file, save it to a separate file, such as .env or config.js (these files should be added to the .gitignore)

### MongoDB connection

In *configTemplate.js*, you can find an example of how MongoDB URI is stored in a separate file.

```
// URI to be replaced by yours

mongodb+srv://username:password@cluster0.9fg0m.mongodb.net/database
```

### JWT secret key

The secret key for jwt should be the same in *authController.js* and *authMiddleware.js* files.


---

:mortar_board: Learning from The Net Ninja tutorials :) :+1:

:computer: YouTube channel of The Net Ninja: https://www.youtube.com/c/TheNetNinja/featured

---
