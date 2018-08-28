// from data.js
var tableData = data;

// YOUR CODE HERE!
var filter = d3.select("#filter-btn")

filter.on("click",function(){
    //remove all existing rows
    d3.select("tbody").html("");

    var d = [];
    var filter_date = d3.select('#datetime').property('value');

    //filter tableData to only records with matching dateTime
    for(i=0;i < tableData.length;i++){
        if(tableData[i]["datetime"] == filter_date){
            d.push(tableData[i])
        }
    }
    //update DOM with rows from tableData matching filter
    d3.select("tbody")
        .selectAll("tr")
        .data(d)
        .enter()
        .append("tr")
        .html(function(d) {
              return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
  });

});