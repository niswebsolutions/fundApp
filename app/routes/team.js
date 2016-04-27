import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.get('store').getTeamMembers();
	},
	store: Ember.inject.service('store')
});
