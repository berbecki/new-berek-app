import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var posts = this.store.findAll('post');
    return posts;
  }
});
