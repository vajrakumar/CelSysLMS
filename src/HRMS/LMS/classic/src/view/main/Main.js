/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('LMS.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'LMS.view.login.Login',
        'Ext.plugin.Viewport',
        'LMS.view.main.EmployeeGrid',
        'LMS.view.main.LeaveContainer',
        'LMS.view.main.LeaveGrid',
        'LMS.view.main.LeaveGridContainerPanel',
        'LMS.view.main.MainController',
        'LMS.view.main.MainModel'
    ],
    controller: 'main',
    plugins: 'viewport',
    viewModel: {
        type: 'main'
    },

    layout: 'border',
    defaults: {
        border: 1,
        style: { borderColor: 'black', borderStyle: 'solid' }
    },
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        style: {
            'background-color': '#4682B4'
        },
        items: [{
            xtype: 'label',
            text: 'Leave Management',
            style: {
                'padding': '20px',
                'font-size': '32px',
                'color': 'white',
                'align': 'center'
            }
        }, '->', {
            xtype: 'tbtext',
            html: 'Hi Employee',
            style: { 'color': 'white' }
        }, {

            xtype: 'button',
            text: 'Logout',
            margin: '10 0',
            handler: 'onClickButton'

        }, {
            xtype: 'image',
            width: 30,
            height: 30,
            //src:'resources/images/images.jpg'
        }]
    }],
    items: [{
        title: 'Employee',
        xtype: 'panel',
        layout: 'border',
        items: [{
            xtype: 'panel',
            region: 'center',
            layout: 'border',
            items: [{
                xtype: 'leaveitems',
            }]

        }, {
            xtype: 'panel',
            region: 'west',
            title: 'Leave Status',
            split: true,
            collapsible: true,
            width: 550,
            minWidth: 175,
            maxWidth: 650,
            items: [{
                xtype: 'grid_container',
            }]
        }]
    }, {
        title: 'Manager',
        xtype: 'container',
        items: [{
            xtype: 'managergrid'
        }]
    }]
});