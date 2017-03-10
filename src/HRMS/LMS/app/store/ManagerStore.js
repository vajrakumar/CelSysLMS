Ext.define('LMS.store.ManagerStore', {
    extend: 'Ext.data.Store',
    alias: 'store.mangerstore',
    fields: [
        { id: 'id', type: 'number' },
        { name: 'name', type: 'string' },
        { name: 'from', type: 'date' },
        { name: 'to', type: 'date' },
        { name: 'reason' },
        { name: 'status', type: 'string' }
    ],
    data: {
        items: [
            { id: 1, name: 'shiva', from: '1/2/17', to: '3/2/17', reason: 'sssss', status: 'pending' }
        ]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});