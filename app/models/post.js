import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  intro: DS.attr('string'),
  body: DS.attr('string'),
  created_at: DS.attr('date'),
  updatedAt: DS.attr('date')
});
