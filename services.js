angular.module('devMtnSocial').service('services', function () {

var user = {};

user.info = [];

user.add = function (userInfo) {
  user.info.push(
    {
      name: user.name,
      tagLine: user.tagLine,
      imgUrl: user.imgUrl,
      bio: user.bio
    });
}


this.getUsers = function () {
  return user.info;
}

});
