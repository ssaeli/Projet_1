const width = 600;
const height = 300;
const margin = {top : 20, right : 0, bottom : 20, left : 20};

const svg = d3.select('.main')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .attr('style', 'font : 10px Helvetica Neue')