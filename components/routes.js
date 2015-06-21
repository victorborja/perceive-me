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
  onBeforeAction: function () {
    Session.set('reviewPerceptions', ['JAJA']);
    this.next();
  },
  data: function () {
    return {
      person: function () {
        return People.random();
      },
      reviewPerceptions: function () {
        return Session.get('reviewPerceptions');
      }
    }
  }
})