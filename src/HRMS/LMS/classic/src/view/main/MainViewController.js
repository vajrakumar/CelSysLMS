Ext.define("LMS.view.main.MainViewController",{
  extend:"Ext.app.ViewController",
  alias:"controller.main-controller",

  requires:[
    'LMS.view.main.LeaveWindow'
  ],

  onApplyLeaveClick:function(){
    var win = Ext.create({
        xtype: 'leave-window'
    });
    win.show();
  },
  onFormCancel:function(){
    this.lookupReference('leaveForm').getForm().reset();
    var win = Ext.WindowManager.getActive();
    if (win) {
      win.close();
    }
  }
});
