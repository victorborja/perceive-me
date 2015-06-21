
if (Meteor.isClient) {

  Template.showPerson.helpers({
    image_url: function () {
      if (!this.picture) {
        return;
      }
      return Images.findOne(this.picture).url();
    }
  });


  Template.showPerson.events({

    'keyup [data-review-person] input[data-perceptions]': function (e) {
      var re = /[,\t\n\r]/i;
      var keyCodes = [188, 13, 32];
      var capture = keyCodes.indexOf(e.keyCode) > -1;
      if (capture) {
        var tag = e.target.value.replace(/[,\t\n\r]/, '').trim();
        if (tag.length == 0) { return; }
        var perceptions = Session.get('reviewPerceptions');
        if (perceptions.indexOf(tag) < 0) {
          perceptions.push(tag);
        }
        e.target.value = '';
        Session.set('reviewPerceptions', perceptions);
      }
    },

    'click [data-review-person] [data-label].delete': function (e) {
      var perceptions = Session.get('reviewPerceptions');
      var tag = e.target.getAttribute('data-label');
      var idx = perceptions.indexOf(tag);
      perceptions.splice(idx, 1);
      Session.set('reviewPerceptions', perceptions);
    },

    'click [data-review-person] button': function () {
      Session.set('meetingPerson', true);
      console.log(arguments);
    }

  })

}

