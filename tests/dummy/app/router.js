import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('catchAll', {path: '*:'});
  this.route('boot');
});

export default Router;
