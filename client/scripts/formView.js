var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    RoomsView.$button.on('click', Rooms.add)
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    //console.log(event) //event is the jquery.Event
    event.preventDefault();
    var txt = $("#message").val();
    var obj = {
      text: txt,
      username: App.username
    }
    
    Parse.create(obj, App.fetch);
    // App.fetch();    
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};