Router.configure({
  layoutTemplate: 'layout'
});

Router.route('home', {
  path: '/',
  template: 'home',
  data: function() {
    return {
      people: People.find()
    }
  }
});

Router.route('newPerson', {
  path: '/you',
  template: 'newPerson'
});

Router.route('reviewPerson', {
  path: '/they',
  template: 'reviewPerson',
  data: function () {
    return {
      // return a random person to review
      person: function () {
        var count = People.find().count();
        var rand = Math.random() * count;
        var person = People.findOne({}, {skip: rand});
        return person;
      }
    }
  }
})