Ext.define('LMS.view.main.LeaveContainer', {
    extend: 'Ext.container.Container',
    xtype: 'leaveitems',
    controller: 'main-controller',
    requires: [
        'LMS.view.main.CircularProgressBar'
    ],
    layout: {
        type: 'vbox',
        align: 'center'
    },
    items: [{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            margin: '25 25 25 25'
        },
        items: [{
            xtype: 'circularprogressbar',
            msg: 'CL',
            radius: 200,
            value: 12,
            maxValue: 20,
            spacing: 20,
            showAnimation: true,
            color: '#09F',
            borderWidth: 40,
            textColor: 'black',
            pendingColor: 'grey',
            showLeaveInfo: true,
            title: 'PL',
            titleColor: 'red',
            start: 0,
            listeners: {
                click: function (pBar, records) {
                    Ext.Msg.alert("Leave details", "You availed " + records.value + " leave out of " + records.maxValue);
                },
                mouseleave: function (pBar, records) {
                },
                mouseover: function (pBar, records) {
                    var leaveDetails = "Total: " + records.maxValue + "<br/>Availed: " + records.value + "<br/> Balance: " + (records.maxValue - records.value);
                    var tip = Ext.create('Ext.tip.ToolTip',{
                        html: leaveDetails,
                        title: '<a href="#">PL Details</a>',
                        target: pBar,
                        anchor: 'top',
                        width: 150,
                        style: 'text-align:left'
                    });
                    tip.on('hide', function() {
                        tip.destroy(tip);
                    });
                }
            }
        }, {
            xtype: 'circularprogressbar',
            radius: 200,
            value: 5,
            maxValue: 15,
            spacing: 20,
            showAnimation: true,
            color: '#09F',
            borderWidth: 40,
            textColor: 'black',
            pendingColor: 'grey',
            showLeaveInfo: true,
            title: 'SL',
            titleColor: 'red',
            start: 2,
            listeners: {
                click: function (pBar, records) {
                    Ext.Msg.alert("Leave details", "You availed " + records.value + " leave out of " + records.maxValue);
                },
                mouseleave: function (pBar, records) {
                },
                mouseover: function (pBar, records) {
                    var leaveDetails = "Total: " + records.maxValue + "<br/>Availed: " + records.value + "<br/> Balance: " + (records.maxValue - records.value);
                    var tip = Ext.create('Ext.tip.ToolTip',{
                        html: leaveDetails,
                        title: '<a href="#">SL/CL Details</a>',
                        target: pBar,
                        anchor: 'top',
                        width: 150,
                        style: 'text-align:left'
                    });
                    tip.on('hide', function() {
                        tip.destroy(tip);
                    });
                }
            }
        }, {
            xtype: 'circularprogressbar',
            radius: 200,
            value: 2,
            maxValue: 10,
            spacing: 20,
            showAnimation: false,
            color: '#09F',
            borderWidth: 40,
            textColor: 'black',
            pendingColor: 'grey',
            showLeaveInfo: true,
            title: 'Comp Off',
            titleColor: 'red',
            start: 2,
            listeners: {
                click: function (pBar, records) {
                    Ext.Msg.alert("Leave details", "You availed " + records.value + " leave out of " + records.maxValue);
                },
                mouseleave: function (pBar, records) {
                },
                mouseover: function (pBar, records) {
                    var leaveDetails = "Total: " + records.maxValue + "<br/>Availed: " + records.value + "<br/> Balance: " + (records.maxValue - records.value);
                    var tip = Ext.create('Ext.tip.ToolTip',{
                        html: leaveDetails,
                        title: '<a href="#">Comp off Details</a>',
                        target: pBar,
                        anchor: 'top',
                        width: 150,
                        style: 'text-align:left'
                    });
                    tip.on('hide', function() {
                        tip.destroy(tip);
                    });
                }
            }
        }]
    }, {
        xtype: 'button',
        text: 'Apply Leave',
        handler: "onApplyLeaveClick"
    }]
});
