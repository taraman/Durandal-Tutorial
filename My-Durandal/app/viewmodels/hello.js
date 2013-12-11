define(['durandal/app', 'durandal/system', 'knockout'], function (app, system, ko) {
    var name = ko.observable("Taraman");
    var canSayHello = ko.computed(function () {
        return name() ? true : false;
    });

    return {
        displayName: 'What is your name?',
        name: name,
        sayHello: function() {
            app.showMessage('Hello ' + name() + '!', 'Greetings');
        },
        canSayHello: canSayHello,

        canActivate: function (view, parent) {
        	window.console && console.log('Lifecycle : canActivate');
        	return app.showMessage('Are you sure you want to Enter this page?', 'Navigate To', ['Yes', 'No']);
        },

        activate: function () {
        	window.console && console.log('Lifecycle : activate');
        },

        //viewUrl: "views/hello.html",
        
        getView: function () {
        	window.console && console.log('Lifecycle : getView');
        	return "views/hello.html";
        },

        binding: function (view) {
        //binding: function (child, parent, settings) {
        	window.console && console.log('Lifecycle : binding');
            return { cacheViews:false }; //cancels view caching for this module, allowing the triggering of the detached callback
        },

		
        bindingComplete: function (view) {
        	window.console && console.log('Lifecycle : bindingComplete');
        },


    	//attached(child, parent, settings)
        attached: function (view, parent) {
        	window.console && console.log('Lifecycle : attached');
        },


    	//compositionComplete: function (view) {
        compositionComplete: function (view, parent) {
        	window.console && console.log('Lifecycle : compositionComplete');
        },
        

        canDeactivate: function (view, parent) {
        	window.console && console.log('Lifecycle : canDeactivate');
        	return app.showMessage('Are you sure you want to leave this page?', 'Navigate Away', ['Yes', 'No']);
        },

        deactivate: function () {
        	window.console && console.log('Lifecycle : deactivate');
        },

        detached: function (view) {
        	window.console && console.log('Lifecycle : detached');
        }
    };
});