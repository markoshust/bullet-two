Template.main.rendered = function() {
  var status = Meteor.status();
  var banner = $('#ddp-status');
  if(status.connected) {
    banner.css('visibility', 'visible');
  } else {
    banner.css('visibility', 'hidden');
  }
};