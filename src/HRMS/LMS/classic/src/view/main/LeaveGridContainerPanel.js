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
            // width: '100',
            layout: 'hbox',
            flex : 1,

            items: [ {
                    xtype: 'combobox',
                    allowBlank: false,
                   // width:100,
                    // emptyText:'All',
                    //submitEmptyText: false,
                    fieldLabel:'Type ',
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
            xtype: 'lgrid',

        }
    ]

});
