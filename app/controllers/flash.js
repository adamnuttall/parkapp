var application = require('application');

var facebook = Alloy.Globals.Facebook;
facebook.appid = 630583603718386;
// facebook.permissions = [FACEBOOK_APP_PERMISSIONS];
$.fbButton.style = facebook.BUTTON_STYLE_WIDE;

function clickGoogle(e) { 
  var datepickerView = application.loadController('home');
  application.showContent(datepickerView.getView());
}

function clickSkip(e) { 
  var homeView = application.loadController('home');
  application.showContent(homeView.getView());
}