/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('LMS.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    
    requires: [
        'Ext.plugin.Viewport',
        'LMS.view.main.EmployeeGrid',
        'LMS.view.main.LeaveContainer'      
    ],
    layout:'border',
    defaults:{
        border:1,
        style:{borderColor:'black',borderStyle:'solid'}
    },
    items:[{
        xtype:'container',
        html:'Leave Management',
        region:'north',
        height:100,
        //Style need to add to css
        style:{
        'padding':'40px',
         'font-size':'32px',
         'align':'center',
         'background-color':'	#4682B4'
        },
    },{
        xtype:'employeegrid',
        region:'center',
    },{
       xtype:'leaveitems',
       region: 'east'
    }]

});

