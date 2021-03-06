﻿/*globals define */
define(['jquery', 'knockout'], function( $, ko ) {
    "use strict";
    return {
        mixedInObservable: ko.observable('Click me...'),
        showElement: function( model, elem ) {
            var target = elem.currentTarget;
            if ( target.nodeType === 1 ) {
                $(target).hide().fadeIn();
            }
        },
        fadeRemove: function( model, elem ) {
            var target = elem.currentTarget;
            if ( target.nodeType === 1 ) {
                $(target).fadeOut(500, function() {
                    $(target).remove();
                });
            }
        }
    };
});