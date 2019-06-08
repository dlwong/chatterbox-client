var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    
  },

  render: function(string) {
    html = roomFunc(string);
    $(this.$select).append();

  }

};
