define(
	[
		'durandal/app',
		'durandal/system',
		'knockout'
	],
	
	function (app, system, ko) {
		window.console && console.log('module-exports-object.js: Life Cycle: Loading');

		var name = ko.observable("Taraman");
		
		var canSayHello = ko.computed(function() {
			return name() ? true : false;
		});

		var sayHello = function() {
			app.showMessage('Hello ' + name() + '!', 'Greetings');
		};

		var countries = ko.observableArray();


		return {
			Name: name,
			CanSayHello: canSayHello,
			SayHello: sayHello,
			Countries: countries,
			
			canActivate: function (view, parent) {
				window.console && console.log('module-exports-object.js: Life Cycle: canActivate');
				//return app.showMessage('Are you sure you want to Enter this page?', 'Navigate To', ['Yes', 'No']);
				return true;
			},

			activate: function () {
				window.console && console.log('module-exports-object.js: Life Cycle: activate');
				countries.push('Egypt');
				countries.push('USA');
				countries.push('Canada');
			},

			//viewUrl: "views/life-cycle.html",
			getView: function () {
				window.console && console.log('module-exports-object.js: Life Cycle: getView');
				return 'views/module-export';
			},

			binding: function (view) {
				//binding: function (child, parent, settings) {
				window.console && console.log('module-exports-object.js: Life Cycle: binding');
				return { cacheViews: false }; //cancels view caching for this module, allowing the triggering of the detached callback
			},

			bindingComplete: function (view) {
				window.console && console.log('module-exports-object.js: Life Cycle: bindingComplete');
			},
			
			attached: function (view, parent) {
				//attached(child, parent, settings)
				window.console && console.log('module-exports-object.js: Life Cycle: attached');
			},
			
			compositionComplete: function (view, parent) {
				//compositionComplete: function (view) {
				window.console && console.log('module-exports-object.js: Life Cycle: compositionComplete');
			},

			canDeactivate: function (view, parent) {
				window.console && console.log('module-exports-object.js: Life Cycle: canDeactivate');
				//return app.showMessage('Are you sure you want to leave this page?', 'Navigate Away', ['Yes', 'No']);
				return true;
			},

			deactivate: function () {
				window.console && console.log('module-exports-object.js: Life Cycle: deactivate');
			},

			detached: function (view) {
				window.console && console.log('module-exports-object.js: Life Cycle: detached');
			}
		};
	});