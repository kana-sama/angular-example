export default () => ({
  selector: "other-list",
  scope: {
    items: "=",
    onClick: "&"
  },
  template: `
    <ul>
      <li
        ng-repeat="item in items"
        ng-bind="item"
        ng-click="onClick({ item: item })"
      />
    </ul>
  `
});
