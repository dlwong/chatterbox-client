var Friends = {
  friendArr: [],

  toggleStatus: function(obj) {
    if ( obj.username !== undefined && !this.friendArr.includes(obj.username) ) {
      this.friendArr.push(obj.username);
    }
  }

};