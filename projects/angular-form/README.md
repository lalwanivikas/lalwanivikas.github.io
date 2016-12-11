#angular-form
---
####Simple form built using AngularJS


##Getting Started
Download the file and `cd` into the downloaded folder. Then:

```
cd app
python -m SimpleHTTPServer 9000
```

Now go to `http://localhost:9000/` to see the form.

**Note:**You can use any other sever as well to serve the folder.

##Features
This form is designed to allow users to enter valid details.

* Allows a user to enter his or her data and see the current database.
* Throws error if a user leaves a required field unfilled.
* Gives useful hints if email or ZIP code are filled incorrectly.
* Doesn't allow submitting an incorrect form.
* Allows a user to add multiple addresses (but only primary one gets displayed in the database).
* Responsive - because Bootstrap `¯\_(ツ)_/¯`.

##Directory
```
.
├── README.md
├── app
│   ├── app.css
│   ├── app.js
│   ├── controllers.js
│   ├── index.html
│   ├── pages
│   │   ├── database.html
│   │   └── form.html
│   ├── routes.js
│   └── services.js
├── karma.conf.js
├── package.json
└── test
    └── test.js

```
##How it was built
Brief about the code:

* Backend is mocked through `userService` service. It has methods for adding one user at a time and getting all the users present in the database. You can find the code for the same in `services.js` file.
* Two pages of the app are 'form' and 'database'. HTML for the same in available in respective files `form.html` and `database.html` under `pages` folder.
* Routing is done through AngularJS' inbuilt `ngRoute` module.
* Rest of the app's logic lives under `controllers.js` file. It has two controllers - `formController` and `databaseController`:
  * `formController` relies on `$location` and `userService`. It contains logic and variables for form page.
  * `databaseController` has just one method on its scope called `getUsers`, which fetches all the users in the database. It is also dependent on `userService`.

###Thank you.