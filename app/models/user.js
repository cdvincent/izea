import Model from '@ember-data/model';
import DS from 'ember-data';

const { 
    attr,
    hasMany
 } = DS;

export default Model.extend({
    post: hasMany('post'),

    name: attr('string'),
    username: attr('string'),
    email: attr('string'),
    address: attr(),
    phone: attr('string'),
    website: attr('string'),
    company: attr()
});
