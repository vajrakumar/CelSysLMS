/**
 * The main application class. An instance of this class is created by `app.js` when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('LMS.Application', {
    extend: 'Ext.app.Application',

    name: 'LMS',

    stores: [
        // TODO: add global / shared stores here
    ],
    views: [
        'LMS.view.login.Login',
        'LMS.view.main.Main'
    ],
    launch: function() {
        //local storage variable
        var loggedIn;
        loggedIn = localStorage.getItem("celestialEmp");
        console.log(loggedIn);
        Ext.widget(loggedIn ? 'app-main' : 'login-page');
    }
});