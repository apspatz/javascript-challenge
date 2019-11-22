// from data.js
var tableData = data;

// YOUR CODE HERE!
// Inputting Table Data
var table = d3.select("#ufo-table");
console.log(table);
var tbody = d3.select("tbody");
console.log(tbody);
tableData.forEach(sighting =>{
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        // console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Filtering Data by Date
var button = d3.select("#filter-btn");
var textbox = d3.select("#datetime");

button.on("click", function(){
    console.log("Filter button clicked");
    var entry = textbox.property("value");
    console.log(entry);
    var filteredData = tableData.filter(date => date.datetime === entry);
    console.log(filteredData);
    tbody.html('');
    if(filteredData[0]){
        filteredData.forEach(sighting =>{
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
                // console.log(key,value);
                var cell = row.append("td");
                cell.text(value);
            });
        });
    } 
    else{
        console.log("No data exists for that date");
        tbody.html('');
        var row = tbody.append("tr").text("No data exists for that date");
    };
});