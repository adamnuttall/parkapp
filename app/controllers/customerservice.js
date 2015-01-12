var application = require('application');

function init() {
  $.reasonForEnquiryView.hide();
  $.yourDetailsView.hide();
  $.yourMessageView.hide();
  $.blockOneClose.hide();
  $.blockTwoClose.hide();
  $.blockThreeClose.hide();
}

function close() {
  var homeView = application.loadController('home');
  application.showContent(homeView.getView());
}

function blockOneOpenImageClick() {
  
  $.blockOneContainer.height = "215dp";
  $.blockTwoContainer.height = "60dp";
  $.blockThreeContainer.height = "60dp";
  
  $.reasonForEnquiryView.show();
  $.yourMessageView.hide();
  $.yourDetailsView.hide();
  
  $.blockOneClose.show();
  $.blockOneOpen.hide();
  
  $.blockTwoOpen.show();
  $.blockTwoClose.hide();
  
  $.blockThreeOpen.show();
  $.blockThreeClose.hide();
}

function blockOneCloseImageClick() {
  $.reasonForEnquiryView.hide();
  $.blockOneClose.hide();
  $.blockOneOpen.show();
  $.blockOneContainer.height = "60dp";
}

function blockTwoOpenImageClick() {
  $.yourDetailsView.show();
  $.blockTwoContainer.height = "160dp";
  
  $.blockOneContainer.height = "60dp";
  $.blockThreeContainer.height = "60dp";
  
  $.reasonForEnquiryView.hide();
  $.yourMessageView.hide();
  
  $.blockOneOpen.show();
  $.blockOneClose.hide();
  
  $.blockTwoClose.show();
  $.blockTwoOpen.hide();
  
  $.blockThreeOpen.show();
  $.blockThreeClose.hide();
}

function blockTwoCloseImageClick() {
  $.yourDetailsView.hide();
  $.blockTwoClose.hide();
  $.blockTwoOpen.show();
  $.blockTwoContainer.height = "60dp";
}

function blockThreeOpenImageClick() {
  $.blockOneContainer.height = "60dp";
  $.blockTwoContainer.height = "60dp";
  $.blockThreeContainer.height = "215dp";
  
  $.reasonForEnquiryView.hide();
  $.yourDetailsView.hide();
  $.yourMessageView.show();  
  
  $.blockOneOpen.show();
  $.blockOneClose.hide();
  
  $.blockTwoOpen.show();
  $.blockTwoClose.hide();
  
  $.blockThreeClose.show();
  $.blockThreeOpen.hide();
}

function blockThreeCloseImageClick() {
  $.yourMessageView.hide();
  $.blockThreeClose.hide();
  $.blockThreeOpen.show();
  $.blockThreeContainer.height = "60dp";
}

function clickContact() {
  var homeView = application.loadController('home');
  application.showContent(homeView.getView());
}

function yourReviewFocus() {
  $.yourReviewTextArea.value = "";
}

function alert() {
  console.log('click');
}

function contactUsClick() {
  var submitView = application.loadController('submit');
  application.showContent(submitView.getView());
}

init();
