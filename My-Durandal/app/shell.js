define(['plugins/router', 'durandal/app', 'knockout'], function (router, app, ko) {

	router.on('router:navigation:complete').then(function (instance, instruction) {
		window.console && console.log('shell.js: Event: router:navigation:complete');
		//window.console && console.log(ko.toJSON(instance));
		window.console && console.log('shell.js: Data: instruction: ' + ko.toJSON(instruction));
	});

	return {
		
		


		router: router,
		search: function () {
			//It's really easy to show a message box.
			//You can add custom options too. Also, it returns a promise for the user's response.
			app.showMessage('Search not yet implemented...');
		},
		activate: function () {
			router.map([
                { route: ['', 'welcome'],	title: 'Welcome',		moduleId: 'viewmodels/welcome', nav: true },
	            { route: 'lifeCycle', title: 'Life Cycle', moduleId: 'viewmodels/life-cycle', nav: true },
				{ route: 'moduleExportsObject', title: 'Module Exports Object', moduleId: 'viewmodels/module-exports-object', nav: true },
				{ route: 'moduleExportsFunction',	title: 'Module Exports Function',	moduleId: 'viewmodels/module-exports-function', nav: true },
				{ route: 'gridPaged',	title: 'Paged Grid',		moduleId: 'viewmodels/grid-paged', nav: true },
				{ route: 'knockout',	title: 'Knockout',			moduleId: 'viewmodels/knockout', nav: true },
                { route: 'flickr',								moduleId: 'viewmodels/flickr',		nav: true }
			]).buildNavigationModel();

			return router.activate();
		}
	};
});