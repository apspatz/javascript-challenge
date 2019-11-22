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

// Filtering Data
var filterButton = d3.select("#filter-btn");
var datebox = d3.select("#datetime");
var citybox = d3.select("#city");
var statebox = d3.select("#state");
var countrybox = d3.select("#country");
var shapebox = d3.select("#shape");

filterButton.on("click", function(){
    console.log("Filter button clicked");
    tbody.html('');
    var filteredData = tableData;
    if(datebox.property("value")){
        filteredData = Date(filteredData);
    }
    if(citybox.property("value")){
        filteredData = City(filteredData);
    }
    if(statebox.property("value")){
        filteredData = State(filteredData);
    }
    if(countrybox.property("value")){
        filteredData = Country(filteredData);
    }
    if(shapebox.property("value")){
        filteredData = Shape(filteredData);
    }
    if(!filteredData[0]){
        console.log("No data exists for that date");
        tbody.html('');
        var row = tbody.append("tr").text("No data exists for that date");
    } else{
        filteredData.forEach(sighting =>{
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
                // console.log(key,value);
                var cell = row.append("td");
                cell.text(value);
            });
        });
    };
});

function Date(newData){
    var dateEntry = datebox.property("value");
    console.log(dateEntry);
    var filteredData = newData.filter(date => date.datetime === dateEntry);
    console.log(filteredData);
    return filteredData;
}

function City(newData){
    var cityEntry = citybox.property("value").toLowerCase();
    console.log(cityEntry);
    var filteredData = newData.filter(city => city.city === cityEntry);
    console.log(filteredData);
    return filteredData;
}

function State(newData){
    var stateEntry = statebox.property("value").toLowerCase();
    console.log(stateEntry);
    var filteredData = newData.filter(state => state.state === stateEntry);
    console.log(filteredData);
    return filteredData;
}

function Country(newData){
    var countryEntry = countrybox.property("value").toLowerCase();
    console.log(countryEntry);
    var filteredData = newData.filter(country => country.country === countryEntry);
    console.log(filteredData);
    return filteredData;
}

function Shape(newData){
    var shapeEntry = shapebox.property("value").toLowerCase();
    console.log(shapeEntry);
    var filteredData = newData.filter(shapes => shapes.shape === shapeEntry);
    console.log(filteredData);
    return filteredData;
}

// Resetting Data
var resetButton = d3.select("#reset-btn");

resetButton.on("click", function(){
    console.log("Reset button clicked")
    tbody.html('')
    tableData.forEach(sighting =>{
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            // console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
    document.getElementById('datetime').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('country').value = '';
    document.getElementById('shape').value = '';
});