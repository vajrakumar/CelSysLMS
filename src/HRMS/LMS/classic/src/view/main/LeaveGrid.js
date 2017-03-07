/* This is the Grid code of LMS Employee Screen */

Ext.define('LMS.view.main.LeaveGrid', {
	xtype: 'lgrid',
	reference:'GridLeave',
	controller: 'EditContextMenu',
	requires: [
		'LMS.store.LeaveStatusTable',
		'LVM.view.main.LeaveGridContextMenu',
		'LMS.view.main.LeaveEditContextMenu'
	],
	store: {
		type: 'leave'
	},
	extend: 'Ext.grid.Panel',

	listeners: {


		itemdblclick: 'editLeave',


	},
	viewConfig: {
		autoFill: true,
		getRowClass: function (record) {
			console.log(record.get('status'));
			if (record && record.data['status'] == 1)
				return 'leave-reject';
			else if (record && record.data['status'] == 0)
				return 'leave-accept';
			else if (record && record.data['status'] == 2)
				return 'leave-hold';
		}
	},
	plugin :[{ptype:"gridFilter"}],
	//This defines columns
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
			hidden: true,
			text: 'Status',
			dataIndex: 'status',
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


		}

	]
});
