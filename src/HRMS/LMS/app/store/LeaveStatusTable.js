/* This is the Store of LMS Employee Screen */

Ext.define('LMS.store.LeaveStatusTable', {
    extend: 'Ext.data.Store',
    alias: 'store.leave',
    fields: [{
        name: 'from'
    }, {
        name: 'to'
    }],
    proxy: {
        type: 'ajax',
        url: 'http://192.168.6.184:3000/leave_requests/',
        reader: {
            type: 'json'
        }
    },
    autoLoad: 'true',
    sorters: [{
        property: 'created_at',
        direction: 'DESC'
    }]
})