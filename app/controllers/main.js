var application = require('application');

exports.showView = function(view) {
  if (this.currentView) {
    if (this.currentView == view) {
      return;
    }
    $.container.remove(this.currentView);
  }

  this.currentView = view;
  $.container.add(this.currentView);
};

exports.setTitle = function(title) {
  $.headerTitle.setText(title ? title.toUpperCase() : "");
};

function toggleMenu() {
  application.toggleMenu();
}

function home() {
  var homeView = application.loadController('home');
  application.showContent(homeView.getView());
}