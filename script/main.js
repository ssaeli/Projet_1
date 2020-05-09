
const countries = 
{'Argentina': [390, 515],
'Australia':[1134, 460],
'Brazil':[438, 399],
'Britain':[622, 120],
'Canada':[279, 101],
'Chile':[369, 479],
'China':[1019, 221],
'Colombia':[1019, 221],
'Costa Rica':[309, 310],
'Czech Republic':[676, 135],  
'Denmark':[655, 110],
'Egypt':[738, 235],
'Euro Area':[613, 175],
'Hong Kong':[1048, 258],
'Hungary':[693, 145],
'India':[915, 241],
'Indonesia':[1084, 351],
'Israel':[756, 209],
'Japan':[1126, 194],
'Malasya':[1016, 334],
'Mexico':[254, 254],
'New Zeland':[1254, 525],
'Norway':[658, 82],
'Pakistan':[880, 221],
'Peru':[342, 387],
'Philippines':[1092, 290],
'Poland':[698, 116],
'Russia':[932, 82],
'Saudi Arabia':[792, 249],
'Singapore':[1024, 372],
'South Africa':[713, 491],
'South Korea':[1081, 193],
'Sri Lanka':[931, 319],
'Sweden':[680, 74],
'Switzerland':[648, 151],
'Thailand':[1002, 278],
'Turkey':[743, 180],
'Ukraine':[738, 138],
'United States':[270, 174],
'Uruguay':[424, 497],
'Vietnam': [1035, 295],
}

const svg = d3
.select('body')
.append('svg')
.attr('width', 1300)
.attr('height', 610);


var years = {
    2000: [
        { country: "Argentina", size: "0.30832404" },
        { country: "Australia", size: "1.59337026" },
        { country: "Brazil", size: "0.22752740" },
        { country: "Britain", size: "0.93770386" },
        { country: "Canada", size: "1.24770761" },
        { country: "Chile", size: "0.20702376" },
        { country: "China", size: "0.08023842" },
        { country: "Czech Republic", size: "0.43232325" },
        { country: "Denmark", size: "0.99869948 " },
        { country: "Euro Area", size: "0.84705003" },
        { country: "Hong Kong", size: "1.96710206" },
        { country: "Hungary", size: "0.38058247" },
        { country: "Indonesia", size: "0.04274904" },
        { country: "Israel", size: "0.58776881" },
        { country: "Japan", size: "1.38925045" },
        { country: "Malasya", size: "0.33995388" },
        { country: "Mexico", size: "0.32227289" },
        { country: "New Zeland", size: "0.80642989" },
        { country: "Poland", size: "0.35124961" },
        { country: "Russia", size: "0.12782414" },
        { country: "Singapore", size: "1.26715487" },
        { country: "South Africa", size: "0.22642122" },
        { country: "South Korea", size: "0.44126392" },
        { country: "Sweden", size: "1.08496519" },
        { country: "Switzerland", size: "1.09112039" },
        { country: "Thailand", size: "0.13871633" },
        { country: "United States", size: "1.44760592" },
    ],
};

function getCoord(country) {
    // code goes here
}

d3.dsv(";", "data/dati.csv", function (d) {
    return {
        date: d.Date.substr(6, 11),
        country: d.Country,
        size: parseFloat(d.size.substr(0, 10)),
    };
}).then(function (data) {
    //-----------------
    // organizing data
    //-----------------
    let years = {};
    data.forEach((d) => {
        let date = d.date;
        if (!(date in years)) {
            years[date] = [];
        }
        years[date].push({ 
            country: d.country, 
            size: d.size,
            coord: countries[d.country]
        });
        
       
   
    const mapGroup = svg.append('g')
    const burgerGroup = svg.append('g')

    function drawBurger(data) {
        burgerGroup.selectAll('text').remove();
        

        
        burgerGroup
        .selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .attr('x', (d) => d.coord[0])
        .attr('y', (d) => d.coord[1])
        .style('font-size', (d) => d.size * 20)
        .text('🍔');
    }
    
    const year = 2000;
    drawBurger(years[year]); 
    
    console.log(years)
    console.log(data)
    
  


    
    const projection = d3.geoNaturalEarth1().scale(250).translate([625, 360]);
    const pathGenerator = d3.geoPath().projection(projection);
    
    d3.json('./map.json').then(onDataLoaded);
    
    
    
    svg.on('click', function() {
        const coords = d3.mouse(this);
        console.log(
            Math.round(coords[0]),
            Math.round(coords[1])
            );
        })
        
        function onDataLoaded(data) {
            drawMap(data);
        }
        
        
        function drawMap(data) {
            const features = data.features;
            console.log(features)
            //console.log(features)
            mapGroup
            .selectAll('path')
            .data(features)
            .enter()
            .append('path')
            .attr('d', (d) => pathGenerator(d));
        }
    });
});
   
    