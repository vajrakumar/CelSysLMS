Ext.define("LMS.view.main.LeaveWindowController", {
    extend: "Ext.app.ViewController",
    alias: 'controller.leavewindowcontroller',

    onFromDateChange: function(fromdate) {
        var me = this,
            todate = me.lookupReference('todate'),
            fromdatevalue = fromdate.getValue();
        if (fromdatevalue) {
            todate.setMinValue(fromdatevalue);
        }
    },
    onCalendarRender: function(calendar) {
        //calendar.setDisabledDates(['03/03/2017']);
        Ext.Ajax.request({
            url: 'resources/holidays_2017.json',
            success: function(response) {
                calendar.setDisabledDates(Ext.JSON.decode(response.responseText)['Bangalore']['holidays']);
            }
        });
    },
    disablePastDays: function(checkbox, checked) {
        if (checked) {
            var fromdate = this.lookupReference('fromdate'),
                todate = this.lookupReference('todate');
            fromdate.setMinValue(new Date());
            todate.setMinValue(new Date());
        }
    },
    onToDateChange: function(todate) {
        var fromdate = this.lookupReference('fromdate'),
            todatevalue = todate.getValue();
        if (todatevalue) {
            fromdate.setMaxValue(todatevalue);
        }
    },
    onFormCancel: function() {
        this.lookupReference('leaveForm').getForm().reset();
        var win = Ext.WindowManager.getActive();
        if (win) {
            win.close();
        }
    },
    onFormSubmit: function(form) {

        var me = this,
            form = me.lookupReference('leaveForm').getForm(),
            values = form.getValues();

        var leaveRequest = {
            id: 10,
            from_date: Ext.Date.format(form.findField('from').getValue(), "Y-m-d H:i:s"),
            to_date: Ext.Date.format(form.findField('to').getValue(), "Y-m-d H:i:s"),
            status: false,
            description: values['reason'],
            approver_id: 1,
            employee_id: 1,
            leave_type_id: values['leaveType']
        };
        Ext.Ajax.request({
            url: ' http://192.168.6.184:3000/leave_requests',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            contentType: 'application/json',
            params: Ext.util.JSON.encode(leaveRequest),
            success: function() {
                me.lookupReference('leaveForm').getForm().reset();
                var win = Ext.WindowManager.getActive();
                var thisView = me.getView(),
                    homepage = thisView.up('app-main');
                //debugger;
                if (win) {
                    win.close();
                }
                var mainView = Ext.first('app-main');
                mainView.down('lgrid').getStore().load();
                mainView.down('lgrid').getView().refresh();
            },
            failure: function() {
                me.lookupReference('leaveForm').getForm().reset();
                var win = Ext.WindowManager.getActive();
                if (win) {
                    win.close();
                }
                var mainView = Ext.first('app-main');
                mainView.down('lgrid').getStore().load();
                mainView.down('lgrid').getView().refresh();
            }
        });


    }
});