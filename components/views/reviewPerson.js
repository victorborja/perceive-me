
if (Meteor.isClient) {

  Template.reviewPerson.helpers({
    image_url: function () {
      if (!this.picture) {
        return;
      }
      return Images.findOne(this.picture).url();
    }
  });


}

