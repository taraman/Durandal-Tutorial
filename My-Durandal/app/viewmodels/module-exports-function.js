define(
	[
		'durandal/app',
		'durandal/system',
		'knockout'
	],
	
	function(app, system, ko) {

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

			self.viewUrl = 'views/module-export.html';

			self.activate = function () {
				window.console && console.log('Module Exports Function : activate');
				self.Countries.push('Egypt');
				self.Countries.push('USA');
				self.Countries.push('Canada');
			};

			self.binding = function (view) {
				window.console && console.log('Module Exports Function : binding');
				return { cacheViews: false }; //cancels view caching for this module, allowing the triggering of the detached callback
			};

			self.attached = function (view, parent) {
				window.console && console.log('Module Exports Function : attached');
			};

		};
	
		return viewmodel;
	});