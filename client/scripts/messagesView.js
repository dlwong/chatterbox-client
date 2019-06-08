var MessagesView = {

  $chats: $('#chats'),
  
  initialize: function() {

  },

  render: function(message) {
    Parse.create(message); 
    
    // let html = '';
    // html = MessageView.render(message)
    // console.log(html);

    $(this.$chats).append('<p>' + message + '</p>');
  }

};

//'<p>' + message.text + '</p>'