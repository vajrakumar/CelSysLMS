Ext.define('LMS.store.Employee',{
  extend:'Ext.data.Store',
  alias:'store.Employee',
  data:[
    {'email':'goutham@celestialsys.com','name':'Goutham'},
    {'email':'neetish@celestialsys.com','name':'neetish'}
  ],
  proxy: {
      type: 'memory',
      reader: {
          type: 'json'
      }
  }
})
