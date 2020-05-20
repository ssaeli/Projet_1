
// coordonnées pays à l'écran
const countries = 
{'Argentina': [390, 515],
'Australia':[1115, 467],
'Brazil':[438, 399],
'Britain':[610, 120],
'Canada':[279, 101],
'Chile':[369, 479],
'China':[995, 200],
'Colombia':[350, 337],
'Costa Rica':[310, 310],
'Czech Republic':[675, 135],  
'Denmark':[650, 112],
'Egypt':[738, 235],
'Euro area':[613, 175],
'Hong Kong':[1040, 260],
'Hungary':[693, 145],
'India':[925, 250],
'Indonesia':[1088, 360],
'Israel':[750, 215],
'Japan':[1100, 180],
'Malaysia':[1008, 327],
'Mexico':[254, 254],
'New Zealand':[1222, 545],
'Norway':[632, 87],
'Pakistan':[882, 225],
'Peru':[342, 387],
'Philippines':[1108, 317],
'Poland':[692, 125],
'Russia':[932, 82],
'Saudi Arabia':[785, 249],
'Singapore':[1000, 365],
'South Africa':[713, 491],
'South Korea':[1075, 195],
'Sri Lanka':[939, 319],
'Sweden':[670, 80],
'Switzerland':[640, 148],
'Thailand':[1012, 285],
'Turkey':[743, 180],
'Ukraine':[738, 138],
'United States':[260, 185],
'Uruguay':[428, 500],
'Vietnam': [1043, 295],
}

// Paramètres de la visualisation
const svg = d3
.select('body')
.append('svg')
.attr('width', 1270)
.attr('height', 630)
.style('background-color', 'black');

// Créer l'élément SVG et le configurer
const mapGroup = svg.append('g');
const burgerGroup = svg.append('g');
const textGroup=svg.append('g');

// Importer les données
d3.dsv(";", "data/dati.csv", function (d) {
    return {
        date: d.Date.substr(6, 11),
        size: d.size,
        country: d.Country,
        how: parseInt(d.How_many_burgers_pro_capite),
        
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
            coord: countries[d.country],
            how : d.how,
        });     
        
    });
    
    // Liste déroulante
    const selection = document.querySelector('select');
    const result = document.querySelector('h3');
    selection.addEventListener('change', ()=> {
        result.innerText=selection.options[selection.selectedIndex].value;
    console.log(result.innerText) ;   
    const year = result.innerText ;
    drawBurger(years[year]);
    console.log(years);     
});  

// Visualisation éléments
    function drawBurger(data) {
        burgerGroup.selectAll('text').remove();
        
        burgerGroup
        .selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .attr('x', (d) => d.coord[0]-10)
        .attr('y', (d) => d.coord[1]+10)
        .style('font-size', (d) => d.size*30)
        .text('🍔');

        textGroup.selectAll('text').remove();

        textGroup
        .selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .attr('x', (d) => d.coord[0]-10)
        .attr('y', (d) => d.coord[1]+35)
        .text((d) => d.how)
        .style('fill', 'lightpink')
        .style('font-size', '20px')
        .style('font-weight', 'bolder')
        .style('stroke', 'gray');
        
    }; 
    
});

// Carte géographique
const projection = d3.geoNaturalEarth1().scale(250).translate([625, 360]);
const pathGenerator = d3.geoPath().projection(projection);

d3.json('./map.json').then(onDataLoaded);

// Coordonées à l'écran
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


// Visualisation carte géographique
    function drawMap(data) {
        const features = data.features;
        console.log(features)

        mapGroup
        .selectAll('path')
        .data(features)
        .enter()
        .append('path')
        .attr('class', 'country')
        .attr('d', (d) => pathGenerator(d))
        .style('fill', 'navajowhite');
        
    };