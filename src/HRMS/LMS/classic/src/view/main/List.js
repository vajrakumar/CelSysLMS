/**
 * This view is an example list of people.
 */
Ext.define('LMS.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    extend: 'Ext.Panel',
    xtype: 'pie-basic',
    controller: 'pie-basic',

    width: 650,

    tbar: [
        '->',
        {
            text: 'Preview',
            handler: 'onPreview'
        }
    ],

    items: [{
        xtype: 'polar',
        reference: 'chart',
        theme: 'default-gradients',
        width: '100%',
        height: 500,
        insetPadding: 50,
        innerPadding: 20,
        store: {
            type: 'mobile-os'
        },
        legend: {
            docked: 'bottom'
        },
        interactions: ['rotate'],
        sprites: [{
            type: 'text',
            text: 'Pie Charts - Basic',
            fontSize: 22,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }, {
            type: 'text',
            text: 'Data: IDC Predictions - 2017',
            x: 12,
            y: 425
        }, {
            type: 'text',
            text: 'Source: Internet',
            x: 12,
            y: 440
        }],
        series: [{
            type: 'pie',
            angleField: 'data1',
            label: {
                field: 'os',
                calloutLine: {
                    length: 60,
                    width: 3
                    // specifying 'color' is also possible here
                }
            },
            highlight: true,
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }]
    }]
});
