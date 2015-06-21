
People = new Meteor.Collection('people');

People.random = function () {
  var count = People.find().count();
  var rand = Math.random() * count;
  var person = People.findOne({}, {skip: rand});
  return person;
}

People.attachSchema(new SimpleSchema({

  story_a: {
    label: 'Pregunta 1',
    type: String
  },
  story_b: {
    label: 'Pregunta 2',
    type: String,
    optional: true
  },
  story_c: {
    label: 'Pregunta 3',
    type: String,
    optional: true
  },

  preceptions: {
    type: [String],
    optional: true
  },

  tags: {
    type: [String],
    optional: true
  },

  picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        label: 'A picture of you' // optional
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
