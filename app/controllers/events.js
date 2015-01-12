var application = require('application');

$.frankiesFunhouseExpanded.hide();
$.frankiesFunhouseExpandedContainer.height = "100dp";

function close() {
  var homeView = application.loadController('home');
  application.showContent(homeView.getView());
}

function frankiesFunhouseClick() {
  $.frankiesFunhouseExpanded.show();
  $.frankiesFunhouseExpandedContainer.height = "260dp";
}

function frankiesFunhouseExpandedClick() {
  $.frankiesFunhouseExpanded.hide();
  $.frankiesFunhouseExpandedContainer.height = "100dp";
}
