Ext.define("LMS.view.main.LeaveWindow", {
    extend: "Ext.window.Window",
    xtype: 'leave-window',
    reference: 'leavePopupWindow',
    title: "Apply For Leave",
    //layout: 'fit',
    modal: true,
    controller: 'leavewindowcontroller',
    requires: [
        'LMS.store.Employee',
        'LMS.view.main.LeaveFormViewModel',
        'LMS.view.main.LeaveWindowController'
    ],
    viewModel: {
        type: 'leaveformviewmodel',
        

    },
    items: [{
        xtype: 'form',
        reference: 'leaveForm',
        padding: 10,

        layout: 'form',
        items: [{
                xtype: 'datefield',
                fieldLabel: 'From',
                name:'from',
                bind: '{from}',
                format:'d/m/Y',
                //layout:'form',
                reference:'fromdate',
                allowBlank:false,
                disabledDays:[0, 6],
                disabledDaysText:'Cannot select Weekends',
                disabledDatesText:'Cannot select Holidays',
                formatText:'',
                listeners:{
                  change:'onFromDateChange',
                  afterrender:'onCalendarRender'
                }
            }, {
                xtype: 'datefield',
                fieldLabel: 'To',
                name:'to',
                bind:'{to}',
                format:'d/m/Y',
                reference:'todate',
                allowBlank:false,
                disabledDays:[0, 6],
                formatText:'',
                listeners:{
                  change:'onToDateChange',
                  afterrender:'onCalendarRender'
                }
            }, {
                xtype: 'displayfield',
                fieldLabel: 'Days:',
                bind: '{datediff}'
            },
            {
                xtype: "fieldcontainer",
                defaultType:'radio',
                fieldLabel: "Type of Leave",
                layout: {
                    type: 'hbox'
                },
                items: [{
                        name: 'leaveType',
                        inputValue:1,
                        boxLabel: 'PL',
                        listeners:{
                          change:'disablePastDays'
                        }
                    },
                    {
                        name: 'leaveType',
                        inputValue: 2,
                        boxLabel: 'CL'
                    },
                    {
                        name: 'leaveType',
                        inputValue: 3,
                        boxLabel: 'Comp Off'
                    }
                ]
            },
            {
                xtype: 'textareafield',
                fieldLabel: 'Reason',
                width:'100%',
                name:'reason',
                bind:'{reason}',
                maxLength:500
            },
            {
                    xtype: 'tagfield',
                    fieldLabel: 'Notify',
                    store: {
                        type: 'Employee'
                    },
                    displayField: 'name',
                    valueField: 'email'
            },
            {
                xtype: 'displayfield',
                fieldLabel: 'Mail Body',
                bind: 'Hey <br> I am on leave from {fromdate} to {todate} due to {reason}.Please call or email me if required.<br> Regards,<br> Goutham'
            }
        ],
        buttons: [{
            text: 'Cancel',
            handler: 'onFormCancel'
        }, {
            text: 'Submit',
            formBind:true,
            handler:'onFormSubmit'

        }]
    }]

})
