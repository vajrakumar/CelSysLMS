Ext.define("LMS.view.main.LeaveWindow", {
    extend: "Ext.window.Window",
    xtype: 'leave-window',
    reference: 'leavePopupWindow',
    title: "Apply For Leave",
    layout: 'fit',
    modal: true,
    controller: 'leavewindowcontroller',
    requires: [
        'LMS.store.Employee',
        'LMS.view.main.LeaveFormViewModel',
        'LMS.view.main.LeaveWindowController'
    ],
    viewModel: {
        type: 'leaveformviewmodel',
        data:{
          from:'',
          to:'',
          reason:''
        }

    },
    items: [{
        xtype: 'form',
        reference: 'leaveForm',
        padding: 10,
        layout: {
            type: 'vbox',
        },
        items: [{
                xtype: 'datefield',
                fieldLabel: 'From',
                bind: '{from}',
                format:'d/m/Y',
                reference:'fromdate',
                allowBlank:false,
                disabledDays:[0, 6],
                listeners:{
                  change:'onFromDateChange'
                }
            }, {
                xtype: 'datefield',
                fieldLabel: 'To',
                bind:'{to}',
                format:'d/m/Y',
                reference:'todate',
                allowBlank:false,
                disabledDays:[0, 6],
                listeners:{
                  change:'onToDateChange'
                }
            }, {
                xtype: 'displayfield',
                fieldLabel: 'Days:',
                bind: '{datediff}'
            },
            {
                xtype: "radiogroup",
                fieldLabel: "Type of Leave",
                layout: {
                    type: 'hbox'
                },
                items: [{
                        xtype: 'radiofield',
                        name: 'leaveType',
                        value: 'pl',
                        boxLabel: 'PL',
                        //text:'PL',
                        checked: true
                    },
                    {
                        xtype: 'radiofield',
                        name: 'leaveType',
                        value: 'cl',
                        boxLabel: 'CL'
                    },
                    {
                        xtype: 'radiofield',
                        name: 'leaveType',
                        value: 'comp0ff',
                        boxLabel: 'Comp Off'
                    }
                ]
            },
            {
                xtype: 'textareafield',
                fieldLabel: 'Reason',
                bind:'{reason}',
            },
            {
                xtype: 'fieldcontainer',
                layout: 'hbox',

                items: [{
                        xtype: 'tagfield',
                        fieldLabel: 'Notify',
                        store: {
                            type: 'Employee'
                        },
                        displayField: 'name',
                        valueField: 'email'
                    },
                    {
                        xtype: 'tagfield',
                        fieldLabel: 'Others',
                        padding: 5,
                        store: {
                            type: 'Employee'
                        },
                        displayField: 'name',
                        valueField: 'email'
                    }
                ]
            },
            {
                xtype: 'displayfield',
                fieldLabel: 'Mail Body',
                bind: 'Hey <br> This is my leave request <br> From: {from} <br> To: {to} <br>Reason: {reason} <br> Regards,<br> Goutham'
            }
        ],
        buttons: [{
            text: 'Cancel',
            handler: 'onFormCancel'
        }, {
            text: 'Submit',
            formBind:true

        }]
    }]

})
