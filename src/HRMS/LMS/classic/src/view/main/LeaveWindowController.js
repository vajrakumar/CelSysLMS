Ext.define("LMS.view.main.LeaveWindowController",{
  extend:"Ext.app.ViewController",
  alias:'controller.leavewindowcontroller',

  onFromDateChange:function(fromdate){
      var me = this,
          todate = me.lookupReference('todate'),
          fromdatevalue = fromdate.getValue();
      if (fromdatevalue){
      todate.setMinValue(fromdatevalue);
    }
    else{
      todate.setMinValue(new Date());
    }
  },
  onToDateChange:function() {
    console.log("onToDateChange")
  },
  onFormCancel:function(){
    this.lookupReference('leaveForm').getForm().reset();
    var win = Ext.WindowManager.getActive();
    if (win) {
      win.close();
    }
  },
})
