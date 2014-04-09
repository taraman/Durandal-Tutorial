﻿define(['plugins/router', 'global', 'knockout'], function( router, global, ko ) {
    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId: 'ko',
            fromParent:true
        }).map([
            { route: ['', 'helloWorld'], moduleId: 'helloWorld/index', title: 'Hello World', type: 'intro', nav: true },
            { route: 'helloWorld2', moduleId: 'helloWorld2/index', title: 'Hello World', type: 'fiddle', nav: true},
            { route: 'clickCounter', moduleId: 'clickCounter/index', title: 'Click Counter', type: 'intro', nav: true},
            { route: 'simpleList', moduleId: 'simpleList/index', title: 'Simple List', type: 'intro', nav: true },
            { route: 'betterList', moduleId: 'betterList/index', title: 'Better List', type: 'intro', nav: true},
            { route: 'controlTypes', moduleId: 'controlTypes/index', title: 'Control Types', type: 'intro', nav: true },
            { route: 'collections', moduleId: 'collections/index', title: 'Collection', type: 'intro', nav: true },
            { route: 'pagedGrid', moduleId: 'pagedGrid/index', title: 'Paged Grid', type: 'intro', nav: true },
            { route: 'animatedTrans', moduleId: 'animatedTrans/index', title: 'Animated Transition', type: 'intro', nav: true },
            { route: 'contactsEditor', moduleId: 'contactsEditor/index', title: 'Contacts Editor', type: 'detailed', nav: true },
            { route: 'gridEditor', moduleId: 'gridEditor/index', title: 'Grid Editor', type: 'detailed', nav: true },
            { route: 'shoppingCart', moduleId: 'shoppingCart/index', title: 'Shopping Cart', type: 'detailed', nav: true },
            { route: 'twitterClient', moduleId: 'twitterClient/index', title: 'Twitter Client', type: 'detailed', nav: true}
        ]).buildNavigationModel();

    return {
        global: global,
        router: childRouter,
        getItemsByCategoryId: function( categoryId ) {
            return ko.utils.arrayFilter(childRouter.navigationModel(), function( route ) {
                return route.type === categoryId;
            });
        }
    };
});