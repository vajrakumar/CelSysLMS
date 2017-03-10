Ext.define('LMS.view.main.LeaveFormViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.leaveformviewmodel',
    data: {
        from: null,
        to: null,
        reason: null,
        edit: false,
        id: 0,
        leave_type_id: {
            leaveType: 3
        }
    },
    formulas: {
        datediff: function(get) {
            if (typeof get('from') != 'undefined' && typeof get('to') != 'undefined') {
                var datediff = Ext.Date.diff(get('from'), get('to'), Ext.Date.DAY) + 1;
                if (datediff > 0) {
                    return datediff;
                }
            }
        },
        fromdate: function(get) {
            if (typeof get('from') != 'undefined') {
                return Ext.Date.format(get('from'), "d F l");
            }
        },
        todate: function(get) {
            if (typeof get('to') != 'undefined') {
                return Ext.Date.format(get('to'), "d F l");
            }
        }

    }
})