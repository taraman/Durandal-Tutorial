define(
	[
		'durandal/app',
		'durandal/system',
		'knockout'
	],
	
	function(app, system, ko) {
		window.console && console.log('module-exports-function.js: Life Cycle: Loading');
		
		var viewmodel = function() {
			var self = this;

			self.Name = ko.observable("Module Exports Function");
			self.CanSayHello = ko.computed(function () {
				return self.Name() ? true : false;
			});
			self.SayHello = function () {
				app.showMessage('Hello ' + self.Name() + '!', 'Greetings');
			};
			self.Countries = ko.observableArray();			


			self.canActivate = function(view, parent) {
				window.console && console.log('module-exports-function.js: Life Cycle: canActivate');
				//return app.showMessage('Are you sure you want to Enter this page?', 'Navigate To', ['Yes', 'No']);
				return true;
			};

			self.activate = function() {
				window.console && console.log('module-exports-function.js: Life Cycle: activate');
				self.Countries.push('Egypt');
				self.Countries.push('USA');
				self.Countries.push('Canada');
			};

			//self.viewUrl: "views/life-cycle.html",
			self.getView = function() {
				window.console && console.log('module-exports-function.js: Life Cycle: getView');
				return 'views/module-export';
			};

			self.binding = function(view) {
				//binding: function (child, parent, settings) {
				window.console && console.log('module-exports-function.js: Life Cycle: binding');
				return { cacheViews: false }; //cancels view caching for this module, allowing the triggering of the detached callback
			};

			self.bindingComplete = function(view) {
				window.console && console.log('module-exports-function.js: Life Cycle: bindingComplete');
			};

			self.attached = function(view, parent) {
				//attached(child, parent, settings)
				window.console && console.log('module-exports-function.js: Life Cycle: attached');
			};

			self.compositionComplete = function(view, parent) {
				//compositionComplete: function (view) {
				window.console && console.log('module-exports-function.js: Life Cycle: compositionComplete');
			};

			self.canDeactivate = function(view, parent) {
				window.console && console.log('module-exports-function.js: Life Cycle: canDeactivate');
				//return app.showMessage('Are you sure you want to leave this page?', 'Navigate Away', ['Yes', 'No']);
				return true;
			};

			self.deactivate = function() {
				window.console && console.log('module-exports-function.js: Life Cycle: deactivate');
			};

			self.detached = function(view) {
				window.console && console.log('module-exports-function.js: Life Cycle: detached');
			};
		};
	
		return viewmodel;
	});