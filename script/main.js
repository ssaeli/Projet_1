const svg = d3
.select('body')
.append('svg')
.attr('width', 2000)
.attr('height', 1000);


// Ajout de l'élément burger svg
const bur = svg.append('g')
.append('text')
.attr('x', 20)
.attr('y', 20)
.text('🍔')
.attr('transform', 'scale(20, 20)');
// pour changer la grandeur de l'image du burger : 
//.attr('transform', 'scale(10, 10)');

//Créer l'animation


var burger = document.querySelector('#burger');

burger.style.left = 300 + "px";
burger.style.top = 200 + "px";
setTimeout(function() {
    burger.style.transform = 'scale(10)';
}, 200);


const projection = d3.geoNaturalEarth1().scale(250);
const pathGenerator = d3.geoPath().projection(projection);

d3.json('./map.json').then(function (data) {
    const features = data.features;
    console.log(features)
    const paths = svg
    .selectAll('path')
    .data(features)
    .enter()
    .append('path')
    .attr('d', (d) => pathGenerator(d));
});