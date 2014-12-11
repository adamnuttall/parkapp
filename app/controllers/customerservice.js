var application = require('application');

function init() {
  $.reasonForEnquiryView.hide();
  $.reasonForEnquiryView.setVisible(false);
}

function formHeaderContainerClick() {
  console.log($.reasonForEnquiryView.visble);
  if($.reasonForEnquiryView.visble) {
    $.reasonForEnquiryView.setVisible(false);
    $.reasonForEnquiryView.hide();
  } else {
    $.reasonForEnquiryView.show();
    $.reasonForEnquiryView.setVisible(true);
  }
}

function close() {
  var homeView = application.loadController('home');
  application.showContent(homeView.getView());
}

function clickContact() {
  var homeView = application.loadController('home');
  application.showContent(homeView.getView());
}

init();
