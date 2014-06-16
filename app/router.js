import Ember from 'ember';

var Router = Ember.Router.extend({
  location: WgeWorkshopENV.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('people', function(){
    this.route('new');
    this.route('show', {path: ':person_id'});  // path is expecting a person object, we want id property off that
  });
});

export default Router;
