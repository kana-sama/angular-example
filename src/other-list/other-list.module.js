import angular from "angular";

import otherList from "./other-list.directive";

export default angular
  .module("other-list", [])
  .directive("otherList", otherList);
