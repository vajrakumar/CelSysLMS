Ext.define('LMS.view.main.EmployeeGrid', {
    extend: 'Ext.grid.Panel',
    title: 'Employee Grid',
    xtype: 'employeegrid',
    requires: [
        'LMS.store.EmployeeStore'
    ],
    plugins: ['cellediting'],
    store: {
        type: 'employeestore'
    },
    defaults: {
        flex: 1
    },
    columns: [{
        text: 'From',
        dataIndex: 'from'
    }, {
        text: 'To',
        dataIndex: 'to'
    }, {
        text: 'Status',
        dataIndex: 'status',
        editor: {
            allowBlank: false,
            xtype: 'combo',
            typeAhead: true,
            displayField: 'status',
            selectOnTab: true,
            store: {
                data: [{
                    id: 1,
                    status: 'reject'
                }, {
                    id: 2,
                    status: 'accept'
                }, {
                    id: 3,
                    status: 'hold'
                }]
            }
        },
        renderer: function(value, meta, record) {
            if (value == 'reject') {
                meta.style = "background-color:red;";
            } else if (value == 'accept') {
                meta.style = "background-color:blue;";
            } else if (value == 'hold') {
                meta.style = "background-color:grey;";
            }
            return value;
        }
    }]

});