var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function(string) {
    var roomFunc = _.template(
      '<div class="rooms">' +
        '<div></div>' +
      '</div>'
    )

    let html = '';
    html = roomFunc(string);
    console.log(html)

    $(this.$select).append(html);

  }

};
