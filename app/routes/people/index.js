import Ember from 'ember';

export default Ember.Route.extend({       // extending a route object
  model: function() {
    return this.store.find('person');
    // when we visit route for a first time, model function kicked off automatically
    // inside, accessing the store (part of ember data)
    // off data store, attempting to find all models of type person
    // ember data is aware of this because we declared a person model
  }
});
