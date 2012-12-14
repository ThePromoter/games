require.config({
    baseUrl: './js/',
    paths: {
        // Lib
        underscore:     'lib/underscore/underscore',
        backbone:       'lib/backbone/backbone',
        
        // Bootstrap
        bootstrap:      'lib/bootstrap/bootstrap',
        core:           'lib/core'
    },
    shim: {
        'lib/bootstrap/bootstrap-popover': {
            deps: ['lib/bootstrap/bootstrap-tooltip']
        },
        underscore: {
          exports: '_'  
        },
        backbone: {
            deps: ['underscore'],
            exports: 'Backbone'
        }
    }
});

require(['core'], function() {
    
});