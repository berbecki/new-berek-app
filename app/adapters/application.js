import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  //host: 'http://pikturo.pl',
  namespace: 'api'
});
