// SERVICES
formApp.service('userService', function(){

  var usersList = [{
    "name"    : "Sherlock Holmes",
    "gender"  : "male",
    "email"   : "sherlock@holmes.com",
    "phone"   : "1111222222",
    "addresses" : [
      {
        "number"  : '221B',
        "street"  : "Baker Street",
        "city"    : "London",
        "zipcode" : "1234SH"
      }
    ]
  }, {
    "name"    : "Bruce Wayne",
    "gender"  : "male",
    "email"   : "bruce@wayne.com",
    "phone"   : "6666777777",
    "addresses" : [
      {
        "number"  : '1007',
        "street"  : "Mountain Drive",
        "city"    : "Gotham",
        "zipcode" : "7777BW"
      }
    ]
  }];

  this.setUser = function(user) {
    usersList.push(user);
  }

  this.getUsers = function() {
    return usersList;
  }

});