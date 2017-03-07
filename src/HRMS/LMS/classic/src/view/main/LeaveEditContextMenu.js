Ext.define("LMS.view.main.LeaveEditContextMenu", {
    extend: "Ext.app.ViewController",
    alias: 'controller.EditContextMenu',
    onclickContextMenu: function (grid, record, item, index, browser_event_window) {
        var contextMenu = Ext.create('LVM.view.main.LeaveGridContextMenu', {});
        browser_event_window.stopEvent();
        var from_date_grid = record.data.from_date;
        var value_of_date = new Date(from_date_grid);
        var date_now = new Date();
        date_now.setHours(0, 0, 0, 0);
        value_of_date.setHours(0, 0, 0, 0);
        if (date_now > value_of_date) {
            contextMenu.items.items[1].setDisabled(true)
        }

        contextMenu.showAt(browser_event_window.getXY());
    },
    onclickGrid: function(grid, rowIndex, colIndex, item, browser_event_window, record, row)
    {
             var contextMenu = Ext.create('LVM.view.main.LeaveGridContextMenu', {});
        browser_event_window.stopEvent();
        var from_date_grid = record.data.from_date;
        var value_of_date = new Date(from_date_grid);
        var date_now = new Date();
        date_now.setHours(0, 0, 0, 0);
        value_of_date.setHours(0, 0, 0, 0);
        if (date_now > value_of_date) {
            contextMenu.items.items[1].setDisabled(true)
        }

        contextMenu.showAt(browser_event_window.getXY());
    },
    editLeave:function(grid , record , item , index , e , eOpts){
    var win = Ext.create({
        xtype: 'leave-window'
    });
    win.show();
    win.getViewModel().set('from',Ext.Date.format(new Date(record.data.from_date),'d/m/Y'));
    win.getViewModel().set('to',Ext.Date.format(new Date(record.data.to_date),'d/m/Y'));
    win.getViewModel().set('reason',record.data.description);
  }


})
