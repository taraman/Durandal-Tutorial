define(
	[
		'durandal/app',
		'durandal/system',
		'knockout'
	],
	function(app, system, ko) {
		var name = ko.observable("Taraman");

		var canSayHello = ko.computed(function() {
			return name() ? true : false;
		});

		var countries = ko.observableArray();

		return {
			Name: name,
			SayHello: function() {
				app.showMessage('Hello ' + name() + '!', 'Greetings');
			},
			CanSayHello: canSayHello,
			Countries: countries,

			canActivate: function(view, parent) {
				window.console && console.log('Life Cycle : canActivate');
				return app.showMessage('Are you sure you want to Enter this page?', 'Navigate To', ['Yes', 'No']);
			},

			activate: function() {
				window.console && console.log('Life Cycle : activate');
				countries.push('Egypt');
				countries.push('USA');
				countries.push('Canada');
			},

			//viewUrl: "views/life-cycle.html",
			getView: function() {
				window.console && console.log('Life Cycle : getView');
				return "views/life-cycle.html";
			},

			binding: function(view) {
				//binding: function (child, parent, settings) {
				window.console && console.log('Life Cycle : binding');
				return { cacheViews: true }; //cancels view caching for this module, allowing the triggering of the detached callback
			},

			bindingComplete: function(view) {
				window.console && console.log('Life Cycle : bindingComplete');
			},


			//attached(child, parent, settings)
			attached: function(view, parent) {
				window.console && console.log('Life Cycle : attached');
			},
			
			//compositionComplete: function (view) {
			compositionComplete: function(view, parent) {
				window.console && console.log('Life Cycle : compositionComplete');
			},

			canDeactivate: function(view, parent) {
				window.console && console.log('Life Cycle : canDeactivate');
				return app.showMessage('Are you sure you want to leave this page?', 'Navigate Away', ['Yes', 'No']);
			},

			deactivate: function() {
				window.console && console.log('Life Cycle : deactivate');
			},

			detached: function(view) {
				window.console && console.log('Life Cycle : detached');
			}
		};
	});