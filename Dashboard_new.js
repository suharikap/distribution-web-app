$(document).ready(function(){

$("#doughnutChart").drawDoughnutChart([
  { 
    title: "30% left",
    value : 4821,  
    color: "#abb3e2" 
  },
  { 
    title: "70% Achieved",
    value:  12339,   
    color: "#3F51B5" 
  }
]);
var ctx = document.getElementById("bar-chart").getContext("2d");

var data = {
    labels: ["January", "February", "March"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40]
        }
    ]
};
var options={}
var myBarChart = new Chart(ctx).Bar(data, options);
});