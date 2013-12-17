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

		var sayHello = function() {
			app.showMessage('Hello ' + name() + '!', 'Greetings');
		};

		var countries = ko.observableArray();


		return {
			viewUrl: "views/module-export",
			
			activate: function () {
				window.console && console.log('Module Exports Object: activate');
				countries.push('Egypt');
				countries.push('USA');
				countries.push('Canada');
			},
			
			binding: function (view) {
				window.console && console.log('Module Exports Object : binding');
				return { cacheViews: false }; //cancels view caching for this module, allowing the triggering of the detached callback
			},
			
			attached: function (view, parent) {
				window.console && console.log('Module Exports Object: attached');
			},
			
			Name: name,
			CanSayHello: canSayHello,
			SayHello: sayHello,
			Countries: countries,
		};
	});