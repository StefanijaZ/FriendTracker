var myPieChart;
$(document).ready(function(){
myPieChart = c3.generate({
    bindto: '#myPieChart',
    data: {
        columns: [
            ["unknown", 0.2],
            ["family", 1.4],
            ["friends", 2.5]
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("unknown", d, i); },
        onmouseover: function (d, i) { console.log("family", d, i); },
        onmouseout: function (d, i) { console.log("friends", d, i); }
    },
    donut: {
        title: "Donut chart"
    }
});
});
