import template from "./my-list.template.html";
import controller from "./my-list.controller";

export default function() {
  return {
    selector: "my-list",
    template,
    controller
  };
}
