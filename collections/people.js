
People = new Meteor.Collection('people');

People.getOneToShow = function () {
  var person = People.findOne({}, {sort: {reviewsCount: -1}});
  console.log("Showing", person);
  return person;
}

People.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId) {
    return true;
  }
});

People.attachSchema(new SimpleSchema({

  story_a: {
    type: String,
  },
  story_b: {
    type: String,
    optional: true
  },
  story_c: {
    type: String,
    optional: true
  },
  story_d: {
    type: String,
    optional: true
  },
  story_e: {
    type: String,
    optional: true
  },
  story_f: {
    type: String,
    optional: true
  },

  reviewsCount: {
    type: Number,
    min: 0,
    optional: true
  },

  preceptions: {
    type: [String],
    optional: true,
    autoValue: function() {
      return [];
    }
  },

  tags: {
    type: [String],
    optional: true,
    autoValue: function() {
      return [];
    }
  },

  picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
      }
    }
  }

}));


Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {})]
});

Images.allow({
  insert: function (userId, doc) {
    return true;
  },
  download: function (userId) {
    return true;
  }
});
