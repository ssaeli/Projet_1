
const countries = 
    {
    'Argentina': [390, 515],
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


d3.dsv(';', 'data/dati.csv', function(d){
    return {
        Date : d.Date.substr(6,11),
        Country : d.Country,
        size : parseFloat(d.size.substr(0,10)),
        
    }
}).then(function(data){
    console.log(data);

var year2000 = [
{'date': '2000', 'country': "Argentina", 'size': '0.30832404' },
{ 'date': "2000", 'country': "Australia", 'size': '1.59337026'},
{ 'date': "2000", 'country': "Brazil", 'size': '0.22752740' },
{ 'date': "2000", 'country': "Britain", 'size': '0.93770386' },
{ 'date': "2000", 'country': "Canada", 'size': '1.24770761' },
{ 'date': "2000", 'country': "Chile", 'size': '0.20702376' },
{ 'date': "2000", 'country': "China", 'size': '0.08023842' },
{ 'date': "2000", 'country': "Czech Republic", 'size': '0.43232325' },
{ 'date': "2000", 'country': "Denmark", 'size': '0.99869948 '},
{ 'date': "2000", 'country': "Euro area", 'size': '0.84705003' },
{ 'date': "2000", 'country': "Hong Kong", 'size': '1.96710206' },
{ 'date': "2000", 'country': "Hungary", 'size': '0.38058247' },
{ 'date': "2000", 'country': "Indonesia", 'size': '0.04274904' },
{ 'date': "2000", 'country': "Israel", 'size': '0.58776881' },
{ 'date': "2000", 'country': "Japan", 'size': '1.38925045'},
{ 'date': "2000", 'country': "Malaysia", 'size': '0.33995388' },
{ 'date': "2000", 'country': "Mexico", 'size': '0.32227289' },
{ 'date': "2000", 'country': "New Zealand", 'size': '0.80642989' },
{ 'date': "2000", 'country': "Poland", 'size': '0.35124961' },
{ 'date': "2000", 'country': "Russia", 'size': '0.12782414'},
{ 'date': "2000", 'country': "Singapore", 'size': '1.26715487' },
{ 'date': "2000", 'country': "South Africa", 'size': '0.22642122' },
{ 'date': "2000", 'country': "South Korea", 'size': '0.44126392' },
{ 'date': "2000", 'country': "Sweden", 'size': '1.08496519' },
{ 'date': "2000", 'country': "Switzerland", 'size': '1.09112039' },
{ 'date': "2000", 'country': "Thailand", 'size': '0.13871633' },
{ 'date': "2000", 'country': "United States", 'size': '1.44760592' }
]




const mapGroup = svg.append('g')
const burgerGroup = svg.append('g')


function drawBurger(pos) {


    burgerGroup
    .append('text')
    .attr('x', pos[0] - 15)
    .attr('y', pos[1] + 15)
    .text('🍔');
}

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
    
    
    drawBurger(countries['Argentina']);
    drawBurger(countries['Australia']);
    drawBurger(countries['Brazil']);
    drawBurger(countries['Britain']);
    drawBurger(countries['Canada']);
    drawBurger(countries['Chile']);
    drawBurger(countries['China']);
    drawBurger(countries['Colombia']);
    drawBurger(countries['Costa Rica']);
    drawBurger(countries['Czech Republic']);
    drawBurger(countries['Denmark']);
    drawBurger(countries['Egypt']);
    drawBurger(countries['Euro Area']);
    drawBurger(countries['Hong Kong']);
    drawBurger(countries['Hungary']);
    drawBurger(countries['India']);
    drawBurger(countries['Indonesia']);
    drawBurger(countries['Israel']);
    drawBurger(countries['Japan']);
    drawBurger(countries['Malasya']);
    drawBurger(countries['Mexico']);
    drawBurger(countries['New Zeland']);
    drawBurger(countries['Norway']);
    drawBurger(countries['Pakistan']);
    drawBurger(countries['Peru']);
    drawBurger(countries['Philippines']);
    drawBurger(countries['Poland']);
    drawBurger(countries['Russia']);
    drawBurger(countries['Saudi Arabia']);
    drawBurger(countries['Singapore']);
    drawBurger(countries['South Africa']);
    drawBurger(countries['South Korea']);
    drawBurger(countries['Sri Lanka']);
    drawBurger(countries['Sweden']);
    drawBurger(countries['Switzerland']);
    drawBurger(countries['Thailand']);
    drawBurger(countries['Turkey']);
    drawBurger(countries['Ukraine']);
    drawBurger(countries['United States']);
    drawBurger(countries['Uruguay']);
    drawBurger(countries['Vietnam']);
});