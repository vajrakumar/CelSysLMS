/**
 * This view is an example list of people.
 */
Ext.define('LMS.view.main.List', {
    extend: 'Ext.container.Container',
    xtype: 'mainlist',
    items: [{
        xtype:'container',
        layout:{
            type:'vbox',
            align:'center',
            pack:'center'
        },
        items:[{
            xtype:'container',
            html: 'Leave Management'
        }]
    },{
        xtype: 'container',
        layout: 'fit',
        layout: 'hbox',

        items:[{
            xtype:'container',
            //html:'grid',
            region:'center',
            flex:1
        },{
            xtype:'container',
           // html:'form',
            flex:1,

            items:[{
                xtype:'panel',
                layout:'hbox',
                defaults: {
                    margin: '25 25 25 25'
                },

                items: [{
                    xtype: 'button',
                    text: 'Button1'
                },{
                    xtype: 'button',
                    text: 'Button2'
                },{
                    xtype: 'button',
                    text: 'Button3'
                }]
            },{
                xtype:'button',
                text:'Apply Leave',
            }]
        }]
    }]
});
