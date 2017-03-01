Ext.define('LMS.view.main.LeaveContainer',{
    extend:'Ext.container.Container',
    xtype:'leaveitems',
    requires:[
        'LMS.view.main.CircularProgressBar'
    ],
    layout:{
        type:'vbox',
        align:'center'
    },
    items:[{
            xtype:'container',
            layout:'hbox',
            defaults: {
                margin: '25 25 25 25'
            },
                
            items: [{
                xtype: 'circularprogressbar',  
                msg:'CL',
                radius: 200,
                value: 12,
                //      leave availed
                maxValue: 20,
                //      total number of leave
                spacing: 20,
                showAnimation: true,
                color: '#09F',
                borderWidth: 40,
                textColor: 'black',
                pendingColor: 'grey',
                showLeaveInfo: true,
                start: 2,
                listeners:{
                click: function (pBar,records) {
                    Ext.Msg.alert("Leave details", "You availed " + records.value + " leave out of " + records.maxValue);
                 }
               }
            },{
                xtype: 'circularprogressbar',
                  
                radius: 200,
                value: 5,
                //      leave availed
                maxValue: 15,
                //      total number of leave
                spacing: 20,
                showAnimation: true,
                color: '#09F',
                borderWidth: 40,
                textColor: 'black',
                pendingColor: 'grey',
                showLeaveInfo: true,
                start: 2,
                listeners:{
                click: function (pBar,records) {
                    Ext.Msg.alert("Leave details", "You availed " + records.value + " leave out of " + records.maxValue);
                 }
               }
            },{
                xtype: 'circularprogressbar',  
                radius: 200,
                value: 2,
                //      leave availed
                maxValue: 10,
                //      total number of leave
                spacing: 20,
                showAnimation: true,
                color: '#09F',
                borderWidth: 40,
                textColor: 'black',
                pendingColor: 'grey',
                showLeaveInfo: true,
                start: 2,
                listeners:{
                click: function (pBar,records) {
                    Ext.Msg.alert("Leave details", "You availed " + records.value + " leave out of " + records.maxValue);
                 }
               }
            }]   
        },{
            xtype:'button',
            text:'Apply Leave'
    }]
})