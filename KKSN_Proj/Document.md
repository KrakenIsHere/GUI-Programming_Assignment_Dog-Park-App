React Frontend
Node.js Backend

After download remember:
```npm install```

Functionality & and user friendlyness:
- UX (http://ui-patterns.com/patterns)
  - Making functions as opbvious as possible
  - Making sure text is readable (No colliding colors)
  - Use of bootstrap (It looks nice)
  - Adding maps to visualize locations


RESTful API:
- GEOnames
  - Pulling location names

- Nodemailer (OAuth 2.0 with G-mail)
  - Sending E-Mails


Architechture:
- ViewModel/DTO
  - Inserting data from local json files and the GEOnames API into the corresponding select as option objects

- Router / Routing:
  - Specifies the URL and page to load, which allows for the linking of a page from within components
  - Telling the program that a route exists and what to show on the given route


Database:
- MongoDB
  - Pushing user data to database on sign-up
  - Pulling data to validate the user doesn't exist
  - Pulling user data to validate session
  - Pushing user data to validate password on login

  - User login data
    - Username
    - Password (encrypted)
    - Deleted (is the user still available)
    - Sign-up date

  - User session data
    - SessionID
    - Login Time
    - Deleted (have the user logged out and ended the session)


Error Handeling and Testing:
- Status codes
  - Page load OK (200)
  - Sign-up success (201)
  - Login success (202)
  - Can't send Mail (400)
  - Invalid password (401)
  - Page not found (404)
  - Invalid e-mail (406)
  - E-Mail already exists (409)

- Tests
  - Sending requests
    - A user cant send a request without own and recipient e-mails
    - A user cant send a request without a park selected
    - A user cant send a request without a message
    - A user cant send a request without being logged in

  - Login
    - A user cant login without a valid E-mail
    - A user cant login without a valid Password

  - Sign-up
       - A user cant sign-up without a valid E-mail
       - A user cant sign-up without a good enough password
       - E-mail is not a duplicate

  - Logout
       - A user can logout at any time

- Validation
  - User passwords on login
  - User session on page load
  - E-Mails on Sign-up (Existence)

- Thourugh explained
  - See map.js - parkSelectClick()
