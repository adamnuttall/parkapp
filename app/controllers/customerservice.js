var application = require('application');

function init() {
  $.reasonForEnquiryView.hide();
  $.blockOneClose.hide();
  $.blockTwoClose.hide();
  $.blockThreeClose.hide();
}

function close() {
  var homeView = application.loadController('home');
  application.showContent(homeView.getView());
}

function blockOneOpenImageClick() {
  $.reasonForEnquiryView.show();
  $.blockOneClose.show();
  $.blockOneOpen.hide();
  $.blockOneContainer.height = "215dp";
}

function blockOneCloseImageClick() {
  $.reasonForEnquiryView.hide();
  $.blockOneClose.hide();
  $.blockOneOpen.show();
  $.blockOneContainer.height = "60dp";
}

function blockTwoOpenImageClick() {
}

function blockTwoCloseImageClick() {
}

function blockThreeOpenImageClick() {
}

function blockThreeCloseImageClick() {
}

function clickContact() {
  var homeView = application.loadController('home');
  application.showContent(homeView.getView());
}

init();
