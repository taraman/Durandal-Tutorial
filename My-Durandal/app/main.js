requirejs.config({
	urlArgs: 'bust=' + (new Date()).getTime(),
	//urlArgs: 'version=1.0.0', //for depolyment on live
	paths: {
        'text': '../lib/require/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-2.3.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-1.9.1'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
       }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],  function (system, app, viewLocator) {
    
	//>>excludeStart("build", true);
	system.debug(true);
	//>>excludeEnd("build");
    
    app.title = 'My Durandal';

    app.configurePlugins({
    	router: true,
    	dialog: true,
    	widget: true,
    	observable: true
    });

    app.start().then(function() {
        viewLocator.useConvention();
		app.setRoot('shell', 'entrance');
    });
});