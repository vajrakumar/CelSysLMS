Ext.define('LMS.view.main.LeaveFormViewModel',{
  extend:'Ext.app.ViewModel',
  alias:'viewmodel.leaveformviewmodel',
  formulas:{
    datediff: function(get){
      if (typeof get('from')!='undefined'&&  typeof get('to')!='undefined'){
      var datediff  = Ext.Date.diff(get('from'),get('to'),Ext.Date.DAY)+1;
      if (datediff>0){
      return datediff;
    }
    }
  }
}})
