+function() {

  if (Meteor.isClient) {

    function personPictureUrl() {
        if (!this.picture) {
          return;
        }
        return Images.findOne(this.picture).url();
    }

    Template.reviewPerson.helpers({
      image_url: personPictureUrl
    });

    Template.meetPerson.helpers({
      image_url: personPictureUrl
    });


    Template.showPerson.events({
      'blur [data-perceptions-input] input': function (e) {
        var tag = (e.target.value + "").trim();
        if (tag != '')  {
          var perceptions = Session.get('reviewPerceptions');
          if (perceptions.indexOf(tag) < 0) {
            perceptions.push(tag);
          }
          e.target.value = '';
          Session.set('reviewPerceptions', perceptions);
        }
      },

      'keyup [data-perceptions-input] input': function (e) {
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

      'click [data-label].delete': function (e) {
        var perceptions = Session.get('reviewPerceptions');
        var tag = e.target.getAttribute('data-label');
        var idx = perceptions.indexOf(tag);
        perceptions.splice(idx, 1);
        Session.set('reviewPerceptions', perceptions);
      },

      'click [data-done-review]': function () {
        var perceptions = Session.get('reviewPerceptions');
        console.log("new perceptions: ", perceptions);

        People.update(this._id, {
          $inc: {reviewsCount: 1}, 
          $addToSet: { perceptions: { $each: {perceptions: perceptions} }}});

        this.reviewsCount += 1;
        this.perceptions = _.union(this.perceptions || [], perceptions);

        Session.set('meetingPerson', true);
        Session.set('reviewPerceptions', []);
      },

      'click [data-show-other]': function () {
        window.location.reload();
      }

    })

  }


}();