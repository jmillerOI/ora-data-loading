import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  createdAt: DS.attr('date'),

  user: DS.belongsTo('user')
});
