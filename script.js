Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Ticket Cause > Product/Feature'
    },
    xAxis: {
        type: 'category'
    },

    legend: {
        enabled: true
    },

    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true
            }
        }
    },
    credits: {
        enabled: false
    },

    series: [{
        name: 'Causes - Unmerged Tickets',
        colorByPoint: true,
        data: [{
            name: 'User error',
            y: 32,
            drilldown: 'usererror'
        }, {
            name: 'Question about functionality',
            y: 31,
            drilldown: 'functionality'
        }, {
            name: 'Activate tools/create account/add users',
            y: 23
        },{
            name:  'No assistance needed or did not respond to ticket', y:18
        },{
            name:  'Platform bug/deficiency', y:8
        },{
            name:  'User device/hardware issues', y:7
        },{
            name:  'Ticket on-hold', y:5
        },{
            name:  'PSM/DM error', y:5
        },{
            name:  'TS Load or One-Off Tier', y:4
        },{
            name:  '10DLC registration', y:4
        },{
            name:  'All other causes', y:16}]
    }],
    drilldown: {
        series: [{
            id: 'usererror',
            data: [
                ['10DLC', 1],
                ['Audience', 1],
                ['Domain Verification', 3],
                ['Efforts', 2],
                ['Email', 2],
                ['Export', 2],
                ['Forms - Submission', 2],
                ['Import', 2],
                ['Login', 1],
                ['Canvass - Mobile', 2],
                ['Canvass - Web', 8],
                ['Segments', 5],
                ['User Management', 1],
            ]
        }, {
            id: 'functionality',
            data: [
                ['Custom Attributes', 1],
                ['Efforts - Targets', 1],
                ['Email', 5],
                ['Export', 3],
                ['General Inquiry', 3],
                ['Online form', 1],
                ['Canvass - Web', 4],
                ['Phonebank', 3],
                ['Segments', 5],
                ['TS Data', 2],
                ['User Management', 3],
            ]
        }]
    }
});