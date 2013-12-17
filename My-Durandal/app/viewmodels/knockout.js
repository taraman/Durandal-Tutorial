define(
	[
		'durandal/app',
		'durandal/system',
		'knockout'
	],
	
	function(app, system, ko) {

		var viewmodel = function() {
			var planets = ko.observableArray([
				{ name: "Mercury", type: "rock" },
				{ name: "Venus", type: "rock" },
				{ name: "Earth", type: "rock" },
				{ name: "Mars", type: "rock" },
				{ name: "Jupiter", type: "gasgiant" },
				{ name: "Saturn", type: "gasgiant" },
				{ name: "Uranus", type: "gasgiant" },
				{ name: "Neptune", type: "gasgiant" },
				{ name: "Pluto", type: "rock" }
			]);
			

			var typeToShow = ko.observable("all");

			var addPlanet = function (type) {
				planets.push({
					name: "New planet",
					type: type
				});
			};
			

			var planetsToShow = ko.computed(function () {
				var desiredType = typeToShow();
				if (desiredType == "all") return planets();
				return ko.utils.arrayFilter(planets(), function (planet) {
					return planet.type == desiredType;
				});
			});


			var showPlanetElement = function (elem) {
				if (elem.nodeType === 1)
					$(elem).hide().slideDown();
			};

			var hidePlanetElement = function (elem) {
				if (elem.nodeType === 1)
					$(elem).slideUp(function () {
						$(elem).remove();
					});
			};


			var self = this;
			self.typeToShow = typeToShow;
			self.addPlanet = addPlanet;
			self.planetsToShow = planetsToShow;
			self.showPlanetElement = showPlanetElement;
			self.hidePlanetElement = hidePlanetElement;


			//self.Name = ko.observable("XXX");
			//self.CanSayHello = ko.computed(function () {
			//	return self.Name() ? true : false;
			//});
			//self.SayHello = function () {
			//	app.showMessage('Hello ' + self.Name() + '!', 'Greetings');
			//};
			//self.Countries = ko.observableArray();

			////self.viewUrl = 'views/module-export.html';

			//self.activate = function () {
			//	window.console && console.log('Module Exports Function : activate');
			//	self.Countries.push('Egypt');
			//	self.Countries.push('USA');
			//	self.Countries.push('Canada');
			//};

			//self.binding = function (view) {
			//	window.console && console.log('Module Exports Function : binding');
			//	return { cacheViews: false }; //cancels view caching for this module, allowing the triggering of the detached callback
			//};

			//self.attached = function (view, parent) {
			//	window.console && console.log('Module Exports Function : attached');
			//};


			//self.addPlanet = function (type) {
			//	alert(type);
			//};


		};
	
		return viewmodel;
	});