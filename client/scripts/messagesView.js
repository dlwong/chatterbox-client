var MessagesView = {

  $chats: $('#chats'),
  
  initialize: function() {
    // if (!message.username) {
    //   message.username = ''
    // };

    // if (!message.text) {
    //   message.text = ''
    // };

    //Parse.create(message); 

    // var m = MessageView.render(message)
    // $(this.$chats).append(m);
  },

  render: function(message) {
    if (!message.username) {
      message.username = ''
    };

    if (!message.text) {
      message.text = ''
    };

    //Parse.create(message); 

    var m = MessageView.render(message)
    $(this.$chats).append(m);
  }

};

//'<p>' + message.text + '</p>'