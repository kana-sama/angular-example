import angular from "angular";

import names from "../names/names.module";
import myList from "./my-list.directive";

export default angular.module("my", [names.name]).directive("myList", myList);
