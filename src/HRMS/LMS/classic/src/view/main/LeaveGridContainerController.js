Ext.define('LMS.view.main.LeaveGridContainerController', {
    extend: "Ext.app.ViewController",
    alias: 'controller.LeaveGridContainerController',
    onComboChange: function(cont, newValue, oldValue, eOpts) {
        var storeref = this.lookupReference('GridLeave').getStore();
        if (newValue == 'Approved') {
            newValue_data = 0;
            store_filter_status(storeref, newValue_data);
        } else if (newValue == 'Rejected')

        {

            newValue_data = 1;
            store_filter_status(storeref, newValue_data);


        } else if (newValue == "Pending") {
            newValue_data = 2;
            store_filter_status(storeref, newValue_data);

        } else {


            storeref.removeFilter('status_filter');
        }


    },
    onSearch: function(cont, newValue, oldValue, eOpts) {
        var storeref = this.lookupReference('GridLeave').getStore();


        storeref.filter('description', newValue)

    }
});






function store_filter_status(storeref, newValue_data) {

    storeref.addFilter({
        id: 'status_filter',
        property: 'status',
        value: newValue_data
    });

}

function store_filter_search(storeref, newValue_data) {

    storeref.addFilter({
        id: 'search_filter',
        property: 'description',
        value: newValue_data
    });

}