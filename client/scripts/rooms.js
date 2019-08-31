var Rooms = {
    names: [],

    add: function(event) {
        event.preventDefault();
        var room = $(".room-input").val()
        RoomsView.render(room)
    }
};