Ext.define('LMS.store.Employee',{
  extend:'Ext.data.Store',
  alias:'store.Employee',
  fields:['email',
          'firstname',
          'lastname',
          {
            name:'name',
            convert: function(v,rec){
            return rec.get('firstname')+' '+rec.get('lastname');
            }
          }],
  proxy: {
      type: 'ajax',
      url: 'http://192.168.6.184:3000/employees/',
      reader: {
          type: 'json'
      },
  },
  autoLoad: 'true'
})
