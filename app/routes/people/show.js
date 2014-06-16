import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {                   //add a params (this is default regardless of nesting)
    return this.store.find('person', params.person_id);  // I will look up in the store a mode with person and id
  }
});
