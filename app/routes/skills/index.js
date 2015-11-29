import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var skills = this.store.findAll('skill');
    return skills;
  }
});
