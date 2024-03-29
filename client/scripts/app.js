var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.stopSpinner();
    App.fetch();

  },

  fetch: function(callback = (obj)=>{
    console.log(obj);
    MessagesView.render(obj)
  }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      for (var i = data.results.length-1 ; i >= 0; i--) {  
        callback(data.results[i])
      }
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
