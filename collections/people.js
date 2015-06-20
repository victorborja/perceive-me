
People = new Meteor.Collection('people');


People.attachSchema(new SimpleSchema({

  story_a: {
    label: 'Pregunta 1',
    type: 'String'
  },
  story_b: {
    label: 'Pregunta 2',
    type: 'String'
  },
  story_c: {
    label: 'Pregunta 3',
    type: 'String'
  }

}))