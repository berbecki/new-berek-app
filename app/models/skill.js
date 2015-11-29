import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  percentage: DS.attr('string')
});
