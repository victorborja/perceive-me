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

Router.route('showPerson', {
  path: '/they',
  template: 'showPerson',
  onBeforeAction: function () {
    Session.set('reviewPerceptions', []);
    Session.set('meetingPerson', false);
    this.next();
  },
  data: function () {
    return {
      person: function () {
        return People.getOneToShow();
      },
      reviewPerceptions: function () {
        return Session.get('reviewPerceptions');
      },
      meetingPerson: function () {
        return Session.get('meetingPerson');
      }
    }
  }
})