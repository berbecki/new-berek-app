import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('skills', function() {});
  this.route('posts', {path: 'blog'}, function() {
    this.route('post', {path: '/:post_slug'}, function() {});
  });


  //this.route('blog');

  this.route('bad_url', { path: '/*badurl' }, function() {}); // Catch everything else!
});

export default Router;
