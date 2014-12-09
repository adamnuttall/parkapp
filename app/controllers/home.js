var application = require('application');

function clickCustomerService(e) { 
  var customerserviceView = application.loadController('customerservice');
  application.showContent(customerserviceView.getView());
}

function clickInfo(e) { 
  var infoView = application.loadController('info');
  application.showContent(infoView.getView());
}

function clickSocial(e) { 
  var socialView = application.loadController('social');
  application.showContent(socialView.getView());
}

function clickEvents(e) { 
  var eventsView = application.loadController('events');
  application.showContent(eventsView.getView());
}

function clickOffers(e) { 
  var offersView = application.loadController('offers');
  application.showContent(offersView.getView());
}