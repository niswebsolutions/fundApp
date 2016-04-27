import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('companies');
  this.route('news');
  this.route('team');
});

export default Router;
