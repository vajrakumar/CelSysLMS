/* This is the Grid code of LMS Employee Screen */

Ext.define('LMS.view.main.LeaveGrid', {
	xtype: 'lgrid',
	title: 'Leave Status',
	layout: 'fit',
	//style: 'margin:250px 0 0 0',
	//height: 390,

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
			contextMenu.showAt(e.getXY());
		},
		itemdblclick: function (dv, record, item, index, e) {
			var contextMenu = Ext.create('LVM.view.main.LeaveGridContextMenu', {});
			e.stopEvent();
			contextMenu.showAt(e.getXY());
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
			//	hidden:true,
			text: 'Status',
			xtype: 'actioncolumn',
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