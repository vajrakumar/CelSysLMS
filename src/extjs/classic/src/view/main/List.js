/**
 * This view is an example list of people.
 */
Ext.define('CelestialLM.view.main.List', {
    extend: 'Ext.panel.Panel',
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
        html: 'grid', 
        flex:1                                           
    },{
        xtype:'splitter',
        performCollapse:true
    }, {                    
        xtype:'',
        html:'form',
        flex:1
    }]
});
