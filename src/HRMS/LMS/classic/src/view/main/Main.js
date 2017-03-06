/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('LMS.view.main.Main', {
    extend: 'Ext.panel.Panel',
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

    layout:'border',
    defaults:{
        border:1,
        style:{borderColor:'black',borderStyle:'solid'}
    },
     dockedItems: [{
        xtype: 'toolbar',
        dock:'top',
        style:{
                'background-color':'#4682B4'
        },
        items: [{
            xtype:'label',
            text: 'Leave Management',
            style:{
                'padding':'20px',
                'font-size':'32px',
                'align':'center'
            }
        },'->',{
            xtype:'tbtext',
            html:'Hi Employee'           
        },{
       
            xtype: 'button',
            text: 'Logout',
            margin: '10 0',
            handler: 'onClickButton'
   
        },{
            xtype:'image',
            width:30,
            height:30,
            //src:'resources/images/images.jpg'
        }]
    }],
    items:[{
        xtype:'grid_container',
        region:'center'
    },{
       xtype:'leaveitems',
       region: 'east'
    }]

});

