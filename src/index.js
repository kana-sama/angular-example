import angular from "angular";

import names from "./names/names.module";
import otherList from "./other-list/other-list.module";

angular
  .module("app", [names.name, otherList.name])
  .controller("myCtrl", function($scope, NamesService) {
    $scope.names = NamesService.data;
    $scope.otherNames = NamesService.data;

    $scope.remove = function(name) {
      NamesService.remove(name);
    };
  });
