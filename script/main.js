
const countries = {
    'Argentina': [327, 433],
}

const svg = d3
.select('body')
.append('svg')
.attr('width', 2000)
.attr('height', 1000);

// Création des groupes
const mapGroup = svg.append('g');
const burgerGroup = svg.append('g');

const projection = d3.geoNaturalEarth1().scale(200);
const pathGenerator = d3.geoPath().projection(projection);

d3.json('./map.json').then(onDataLoaded);

// Dev pour trouver les positions
svg.on('click', function() {
    const coords = d3.mouse(this);
    console.log(
        Math.round(coords[0]),
        Math.round(coords[1])
    );
})

//Créer l'animation

function onDataLoaded(data) {
    drawMap(data);
}

function drawMap(data) {
    const features = data.features;
    //console.log(features)
    mapGroup
    .selectAll('path')
    .data(features)
    .enter()
    .append('path')
    .attr('d', (d) => pathGenerator(d));
}

function drawBurger(pos) {
    // Ajout de l'élément burger svg
    burgerGroup
    .append('text')
    .attr('x', pos[0] - 15)
    .attr('y', pos[1] + 15)
    .text('🍔')
    .style('font-size', 30)
    .attr('transform', 'scale(1)');
    // pour changer la grandeur de l'image du burger : 
    //.attr('transform', 'scale(10, 10)');
}

drawBurger(countries['Argentina']);