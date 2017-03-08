Ext.define("LMS.view.main.LeaveWindow", {
    extend: "Ext.window.Window",
    xtype: 'leave-window',
    reference: 'leavePopupWindow',
    title: "Apply For Leave",

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
        layout: 'vbox',
        items: [
              {
                xtype:'fieldcontainer',
                //fieldLabel:'Dates',
                layout:{
                  type:'hbox'
                },
                items:[{
                xtype: 'datefield',
                fieldLabel: 'From',
                name:'from',
                bind: '{from}',
                format:'d/m/Y',
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
            },
            {
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
            }
          ]
        },
          {
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
                        inputValue:3,
                        boxLabel: 'PL',
                        listeners:{
                          change:'disablePastDays'
                        }

                    },
                    {
                        name: 'leaveType',
                        inputValue: 2,
                        boxLabel: 'CL/SL'
                    },
                    {
                        name: 'leaveType',
                        inputValue: 4,
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
                    filterPickList: true,
                    valueField: 'email',
                    tipTpl:'{email}',
                    listConfig:{
                      getInnerTpl : function(){
                        return '<div data-qtip="'+'{email}'+'">{name}</div>'
                      }
                    }
            },
            {
                xtype: 'displayfield',
                fieldLabel: 'Mail Body',
                bind: 'Hey <br> I am on leave from {fromdate} to {todate} due to {reason}.Please call or email me if required.<br> Regards,<br> John Doe'
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
