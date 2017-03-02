Ext.define("LMS.view.main.LeaveEditContextMenu", {
    extend: "Ext.app.ViewController",
    alias: 'controller.EditContextMenu',
    onclickContextMenu: function (grid, record, item, index, e) {
        var contextMenu = Ext.create('LVM.view.main.LeaveGridContextMenu', {});
        e.stopEvent();
        var from_date_grid = record.data.from_date;
        var value_of_date = new Date(from_date_grid);
        var date_now = new Date();
        date_now.setHours(0, 0, 0, 0);
        value_of_date.setHours(0, 0, 0, 0);
        if (date_now > value_of_date) {
            contextMenu.items.items[1].setDisabled(true)
        }

        contextMenu.showAt(e.getXY());
    },
    onclickGrid: function(grid, rowIndex, colIndex, item, e, record, row)
    {
             var contextMenu = Ext.create('LVM.view.main.LeaveGridContextMenu', {});
        e.stopEvent();
        var from_date_grid = record.data.from_date;
        var value_of_date = new Date(from_date_grid);
        var date_now = new Date();
        date_now.setHours(0, 0, 0, 0);
        value_of_date.setHours(0, 0, 0, 0);
        if (date_now > value_of_date) {
            contextMenu.items.items[1].setDisabled(true)
        }

        contextMenu.showAt(e.getXY());
    }

})