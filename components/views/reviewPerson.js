
if (Meteor.isClient) {

  Template.reviewPerson.helpers({
    image_url: function () {
      if (!this.picture) {
        return;
      }
      return Images.findOne(this.picture).url();
    }
  });


  Template.reviewPerson.events({

    'keyup input[data-perceptions]': function (e) {
      var re = /[,\t\n\r]/i;
      var keyCodes = [188, 13, 32];
      var capture = keyCodes.indexOf(e.keyCode) > -1;
      if (capture) {
        var tag = e.target.value.replace(/[,\t\n\r]/, '').trim();
        var perceptions = Session.get('reviewPerceptions');
        if (perceptions.indexOf(tag) < 0) {
          perceptions.push(tag);
        }
        e.target.value = '';
        Session.set('reviewPerceptions', perceptions);
      }
    },

    'click [data-label].delete': function (e) {
      var perceptions = Session.get('reviewPerceptions');
      var tag = e.target.getAttribute('data-label');
      var idx = perceptions.indexOf(tag);
      perceptions.splice(idx, 1);
      Session.set('reviewPerceptions', perceptions);
    }

  })

}

