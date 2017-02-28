/**
 * This view is an example list of people.
 */
Ext.define('LMS.view.main.List', {
    extend: 'Ext.container.Container',
    xtype: 'mainlist',

   dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype:'tbtext',
            text:'Leave Management',
        }]
    }],
    layout: 'hbox',
    items: [{             
        xtype:'container',
        html: 'grid', 
        flex:1                                           
    },{                    
        xtype:'container',
        html:'form',
        flex:1
    }]
});
