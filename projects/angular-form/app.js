// MODULE
var formApp = angular.module('formApp', ['ngRoute', 'ngMessages']);

/****************
*****************

Object structure:
====
{
  "name"    : "Sherlock Holmes",
  "gender"  : "male",
  "email"   : "sherlock@holmes.com",
  "phone"   : "1234 56789",
  "addresses" : [
    {
      "number"  : 221,
      "street"  : "Baker Street",
      "city"    : "London",
      "zipcode" : "123456"
    }
  ]
}

To Do:
====
- Make an object to push to the database - ✔︎
- Form validation - ✔︎
- Regex tests email and zipcode ✔︎
- Fix routing - ✔︎
- Properly formatted database output - ✔︎
- Tests - ✗

*****************
****************/