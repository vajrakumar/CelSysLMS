Ext.define('LMS.store.EmployeeStore',{
    extend:'Ext.data.Store',
    alias:'store.employeestore',
    //model:'LMS.model.EmployeeModel',
    fields: [
        'from', 'to', 'status'
    ],
    data:{ items: [
        {from:'9/1/2017',to:'9/1/2017',status:'reject'},
        {from:'9/1/2017',to:'9/1/2017',status:'accept'},
        {from:'9/1/2017',to:'9/1/2017',status:'hold'}
    ]},
      proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});