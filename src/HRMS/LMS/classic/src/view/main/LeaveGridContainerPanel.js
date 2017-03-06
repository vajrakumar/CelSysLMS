Ext.define('LMS.view.main.LeaveGridContainerPanel', {
    xtype: 'grid_container',
    extend: 'Ext.container.Container',
layout: {
    type: 'vbox',
    align : 'stretch',
    pack  : 'start',
},
    controller: 'LeaveGridContainerController',
    requires: ['LMS.view.main.LeaveGridContainerController'],
    items: [{
            xtype: 'container',
            layout: {
		type:'hbox',
		align: 'center'
		},
	    flex:1,
            items: [ {
                    xtype: 'combobox',
                    allowBlank: false,
                    fieldLabel:'Type ',
		    editable: false,
                    value:'All',
                    store: ['Approved', 'Rejected', 'Pending','All'],
                    listeners: {

                        change: 'onComboChange'
                    }

                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Search',
                    name: 'Search',
                    listeners: {

                        change: 'onSearch'
                    }

                }

            ]
        },


        {
	    flex: 9,
            xtype: 'lgrid',

        }
    ]

});
