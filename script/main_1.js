const width = 1000;
const height = 600;
const margin = {top : 20, bottom : 20, right : 0, left : 20};


// Créer l'élément SVG et le configurer
const svg = d3.select('body')
.append('svg')
.attr('width', width)
.attr('height', height)
.attr('style', 'font: 20px Helvetica');

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
setTimeout(function() {
	burger.style.transform = 'scale(10)';
}, 200);


//function animate() {
  //bur.transition()
    //        .duration(1000)
      //      .attr('y', (d)=>{return 1.2*d.y})
        //    .on('end', animate)
    //}