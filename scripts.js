angular.module('gh-pages', ['ngResource'])
 
  .factory('Commits', function($resource) {
    return $resource('https://api.github.com/repos/openpgh/pgh.io/commits?sha=gh-pages', {});
  })

  .controller('GitLogCtrl', function($scope, Commits) {
    $scope.data = {};

    Commits.query(function(response) {
      $scope.data.commits = response;
    });
  })

;