/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            //app: 'dist/app',
            //app: 'dist/prd',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'ng2-bs3-modal': 'npm:/ng2-bs3-modal',
            'primeng': 'npm:/primeng',
            'mydatepicker': 'npm:mydatepicker/bundles/mydatepicker.umd.min.js',
            'angular-d3-charts': 'npm:/angular-d3-charts',
            //'ng2-adal': 'npm:ng2-adal',
            //'ng2-adal-popup-fork': 'npm:ng2-adal-popup-fork',
            'ng2-charts': 'npm:ng2-charts/bundles/ng2-charts.umd.min.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: 'main.js', defaultExtension: 'js'
                //main: 'bundle.min.js', defaultExtension: 'js'
            },
            rxjs: { defaultExtension: 'js' },

            'ng2-bs3-modal': { main: '/bundles/ng2-bs3-modal.js', defaultExtension: 'js' },
            'primeng': { defaultExtension: "js" },
            'angular-d3-charts': { main: 'main.js', defaultExtension: "js" },
            //'ng2-adal': { main: '/dist/core/core.js', defaultExtension: 'js' },
            //'ng2-adal-popup-fork': { main: 'core.js', defaultExtension: 'js' }
        }
    });
})(this);