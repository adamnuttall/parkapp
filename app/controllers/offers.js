var application = require('application');

function close() {
  var homeView = application.loadController('home');
  application.showContent(homeView.getView());
}var args = arguments[0] || {};