var application = require('application');

function close() {
  var homeView = application.loadController('home');
  application.showContent(homeView.getView());
}

function directionClick() {
  Ti.Platform.openURL("http://maps.apple.com/?q=Grondre%20Vale%20Holiday%20Park%20Ltd");
}

function callClick() {
  Ti.Platform.openURL("tel:0161000000");
}
