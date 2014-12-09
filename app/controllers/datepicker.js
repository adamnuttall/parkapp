var application = require('application');

function clickContinue(e) { 
  var homeView = application.loadController('home');
  application.showContent(homeView.getView());
}