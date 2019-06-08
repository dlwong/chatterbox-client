var MessagesView = {

  $chats: $('#chats'),
  
  initialize: function() {
  },

  render: function(message) {
    if (!message.username) {
      message.username = ''
    };

    if (!message.text) {
      message.text = ''
    };

    // var $userClick = message.username;

    $('.username').click(function() {
      Friends.toggleStatus(message);
    })
    
    var m = MessageView.render(message)
    
    $(this.$chats).append(m);
  }

};