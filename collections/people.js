
People = new Meteor.Collection('people');

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

People.attachSchema(new SimpleSchema({

  story_a: {
    label: 'Pregunta 1',
    type: String
  },
  story_b: {
    label: 'Pregunta 2',
    type: String
  },
  story_c: {
    label: 'Pregunta 3',
    type: String
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
