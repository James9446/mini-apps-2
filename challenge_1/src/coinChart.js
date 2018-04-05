var ctx = document.getElementById("myChart");
const createChart = (data) => {
    var myChart = new Chart(ctx, data);
    return myChart;
};


module.exports.createChart = createChart;