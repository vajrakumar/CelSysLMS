Ext.define('LMS.main.view.manager.ManagerGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'managergrid',
    requires: [
        'LMS.store.ManagerStore'
    ],
    store: {
        type: 'mangerstore'
    },
    width: 800,
    layout: 'fit',
    defaults: {
        flex: 1
    },

    style: {
        'border': 'solid black 1px',
        'margin-top': '100px'
    },

    columns: [
        { text: 'Emp ID', dataIndex: 'id', flex: 1 },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'From', dataIndex: 'from', flex: 1 },
        { text: 'To', dataIndex: 'to', flex: 1 },
        {
            text: 'Reason',
            xtype: 'templatecolumn',
            tpl: "<label style='text-decoration:underline;cursor:pointer;color:blue;'>View Details</label>",
            flex: 1
        },
        { text: 'Status', dataIndex: 'status' },
        {
            text: 'Approve/Reject',
            flex: 1,
            xtype: 'actioncolumn',
            sortable: 'false',
            width: 100,
            items: [{
                    tooltip: 'Approve Leave',
                    iconCls: 'x-fa fa-check',
                    handler: function() {
                        alert("called");
                    }
                }, '->', {
                    tooltip: 'Reject Leave',
                    iconCls: 'x-fa fa-close',
                    handler: function() {
                        alert("called");
                    }
                }
            ]
        }
    ],
    listeners: {
        cellclick: function(grd, td, cellIndex, record, tr, rowIndex) {
            //debugger;
            if (cellIndex === 4) {
                Ext.Msg.show({
                    title: 'Reason',
                    msg: record.get('reason'),
                    buttons: Ext.Msg.OK
                });
            }
        }
    }
})