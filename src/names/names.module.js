import angular from "angular";

import NamesService from "./names.service";

export default angular
  .module("names", [])
  .service("NamesService", NamesService);
