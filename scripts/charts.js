document.addEventListener('DOMContentLoaded', init);

let canvas1, ctx1, canvas2, ctx2;

function init() {
    canvas1 = document.getElementById('line');
    ctx1 = canvas1.getContext('2d');
    createLine();

    canvas2 = document.getElementById('vertical bar');
    ctx2 = canvas2.getContext('2d');
    createVertBar();
}
function createLine() {
    new Chart(ctx1,
        {
            type: 'line',
            data: {
                labels: [...new Array(10)].fill().map((year, index) => 2010 + index),
                datasets: [
                    {
                        label: 'Per Capita (Gallons per person per day)',
                        data: [127, 123, 121, 120, 118, 119, 118, 117, 120, 118],
                        borderColor: 'rgb(255, 99, 132, 1)',
                        tension: 0.1,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                aspectRatio: 1.1,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                    title: {
                        display: true,
                        text: ['Water Consumption in New York City']
                    }
                },
                scales: {
                    y1: {
                        min: 110,
                        max: 130,
                        type: 'linear',
                        display: true,
                        position: 'left'
                    }
                }
            }
        });
}
function createVertBar() {
    new Chart(ctx2,
        {
            type: 'bar',
            data: {
                labels: [...new Array(10)].fill().map((year, index) => 2010 + index),
                datasets: [
                    {
                        label: 'Per Capita (Gallons per person per day)',
                        backgroundColor: ["#ff3933", "#1fa51b", "#0af7e2", "#0617a4", "#7f2441", "#efff2c", "#660000", "#000000", "#000746", "#ee6f1c"],
                        data: [127, 123, 121, 120, 118, 119, 118, 117, 120, 118],
                        yAxisID: "y2"
                    }

                ]
            },
            options: {
                responsive: true,
                aspectRatio: 1.1,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                    title: {
                        display: true,
                        text: ['Water Consumption in New York City']
                    }
                },
                scales: {
                    y2: {
                        min: 110,
                        max: 130,
                        ticks: {
                            
                            stepSize: 5
                        }
                    }
                }
            }
        });
}
