/* This is the Grid code of LMS Employee Screen */

Ext.define('LMS.view.main.LeaveGrid', {
	xtype: 'lgrid',
	title: 'Leave Status',
	layout: 'fit',
	

	requires: [
		'LMS.store.LeaveStatusTable',
		'LVM.view.main.LeaveGridContextMenu',
	],
	store: {
		type: 'leave'
	},
	extend: 'Ext.grid.Panel',

	//This defines columns
	listeners: {

		itemcontextmenu: function (grid, record, item, index, e) {
			var contextMenu = Ext.create('LVM.view.main.LeaveGridContextMenu', {});
			e.stopEvent();

			debugger;
			var from_date_grid = record.data.from_date;
			var value_of_date = new Date(from_date_grid);
			var date_now = new Date();
			date_now.setHours(0,0,0,0);
			value_of_date.setHours(0,0,0,0);

			if(date_now > value_of_date )
			{
				contextMenu.items.items[0].disabled;
			}

			contextMenu.showAt(e.getXY());
		},
		itemdblclick: function (dv, record, item, index, e) {
			var contextMenu = Ext.create('LVM.view.main.LeaveGridContextMenu', {});
			e.stopEvent();
			var from_date_grid = record.data.from_date;
			var value_of_date = new Date(from_date_grid);
			var date_now = new Date();
			date_now.setHours(0,0,0,0);
			value_of_date.setHours(0,0,0,0);

			if(date_now > value_of_date)
			{
				debugger;
				contextMenu.items.items[1].setDisabled(true);
			}
			contextMenu.showAt(e.getXY());
		}



	},
	viewConfig: {
        autoFill: true,
        getRowClass: function(record) {
            console.log(record.get('status'));
            if(record && record.data['status'] == 1)
            return 'leave-reject';
            else if(record && record.data['status'] == 0)
            return 'leave-accept';
            else if(record && record.data['status'] == 2)
            return 'leave-hold';
        }       
},
	columns: [{
			dataIndex: 'from_date',
			formatter: 'date("m/d/Y")',
			text: 'From',
			width: 90,
		},
		{
			dataIndex: 'to_date',
			text: 'To',
			formatter: 'date("m/d/Y")',
			width: 90,

		},
		{
			dataIndex: 'description',
			text: 'Reason',
			width: 150,
			flex: 1,

		},
		{
			hidden:true,
			text: 'Status',
			dataIndex:'status',
			width: 80,

			dataIndex: 'status',
			renderer: function (value, metadata, record) {
				if (value == 0) {
					metadata.tdCls = 'x-fa fa-check fa-lg'
				} else if (value == 1) {
					metadata.tdCls = 'x-fa fa-times fa-lg'
				} else {
					metadata.tdCls = 'x-fa 	fa-arrows-h fa-lg'
				}
			},


		},
		{
			xtype: 'actioncolumn',
			sortable: 'false',
			width: 100,
			

			items: [{
					tooltip: 'Edit Leave',
					icon: 'http://rala.uk.com/wp-content/themes/rala/images/SVG/menu.svg',
					handler: function (grid, rowIndex, colIndex, item, e, record, row) {
						var contextMenu = Ext.create('LVM.view.main.LeaveGridContextMenu', {});
						e.stopEvent();
						contextMenu.showAt(e.getXY());
					}

				
				}

			]

		}

	]
});