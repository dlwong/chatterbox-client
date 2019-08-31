var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function(callback = (obj)=>{
    if ( obj.roomname && !Rooms.names.includes(obj.roomname) ) {
      Rooms.names.push(obj.roomname);
      this.$select.append('<option value = ' + obj.roomname + '>' + obj.roomname + '</option>');

    }
  }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      for (var i = 0; i < data.results.length; i++) {  
        callback(data.results[i])
      }
    });
  },

  render: function(string) {
    this.$select.append('<option value = ' + string + '>' + string + '</option>');
    Rooms.names.push(string);

    RoomsView.initialize();
  }

};
