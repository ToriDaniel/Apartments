var apartPromise = d3.json("data.json");

var nameTab = function(data)
{
    d3.select('#name')
    .append('tr')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .append('td')
    .text(function(d){return d.name;});
}

var imagesTab = function(data)
{
    
    d3.select('#images')
    .append('tr')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .append('td')
    .append('img')
    .attr("src", function(d){return d.img;});
}

var priceTab = function(data)
{
    d3.select('#price')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .append('td')
    .text(function(d){return d.price;});
}
var sqftTab = function(data)
{
    d3.select('#sqft')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .append('td')
    .text(function(d){return d.sqft;});
}

var bedTab = function(data)
{
    d3.select('#beds')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .append('td')
    .text(function(d){return d.beds;});
}

var bathTab = function(data)
{
    d3.select('#baths')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .append('td')
    .text(function(d){return d.baths;});
}

var feeTab = function(data)
{
    d3.select('#fees')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .append('td')
    .text(function(d){return d.fees;});
}

var distanceTab = function(data)
{
    d3.select('#distance')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .append('td')
    .text(function(d){return d.distance;});
}

var availableTab = function(data)
{
    d3.select('#available')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .append('td')
    .text(function(d){return d.available;});
}

var fitnessTab = function(data)
{
    d3.select('#fitness')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .append('td')
    .text(function(d){return d.fitness;});
}

var poolTab = function(data)
{
    d3.select('#pool')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .append('td')
    .text(function(d){return d.pool;});
}

var leaseTab = function(data)
{
    d3.select('#lease')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .append('td')
    .text(function(d){return d.sqft;});
}

var washDryTab = function(data)
{
    d3.select('#washdry')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .append('td')
    .text(function(d){return d.washdry;});
}

var parkingTab = function(data)
{
    d3.select('#parking')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .append('td')
    .text(function(d){return d.parking;});
}

var gatedTab = function(data)
{
    d3.select('#gated')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .append('td')
    .text(function(d){return d.gated;});
}

var dishwasherTab = function(data)
{
    d3.select('#dishwash')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .append('td')
    .text(function(d){return d.dishwash;});
}


apartPromise.then(

    function(data)
    {
        console.log("works", data);
        nameTab(data);
        imagesTab(data);
        priceTab(data);
        sqftTab(data);
        bedTab(data);
        bathTab(data);
        feeTab(data);
        distanceTab(data);
        availableTab(data);
        fitnessTab(data);
        poolTab(data);
        leaseTab(data);
        washDryTab(data);
        parkingTab(data);
        gatedTab(data);
        dishwasherTab(data);
    
    },
    function(err)
    {
        console.log("broke", err);
    }
);