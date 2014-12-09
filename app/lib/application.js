var Application = {
  initialize: _.once(function() {
    this.main = Alloy.createController('main');
    var mainView = this.main.getView();
    
    var mainWindow = Titanium.UI.createWindow({
        fullscreen: true
      });
    mainWindow.add(mainView);
    
    var view = this.loadController('home');
    this.showContent(view.getView());
    // var loginView = this.loadController('login');
    // this.showContent(loginView.getView());
    
    mainWindow.open();
  }),
  showContent: function(view, title) {
    this.main.showView(view);
  },
  
  loadController: _.memoize(function(name, args) {
    return Alloy.createController(name,args);
  })
};

module.exports = Application;