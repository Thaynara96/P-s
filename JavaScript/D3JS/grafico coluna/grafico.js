function grafico (parametros) {
    let svg = d3
        .select(parametros.seletor)
        .attr('width', parametros.largura + 'px')
        .attr('heigth', parametros.altura + 'px')

    let fnX = d3
        .scaleLinear()
        .domain([0, d3.max(parametros.dados)])
        .range([0, parametros.largura]);
    let fnY = d3
        .scaleLinear()
        .domain([0, parametros.dados.length])
        .range([0, parametros.altura]);   
    svg
        .selectAll ('.barra')
        .data(parametros.dados)
        .enter()
        .append ('rect')
        .classed('barra', true)
        .attr('x', 0)
        .attr('y', (d,i) => fnY(i))
        .attr('width', (d)=>fnX(d))
        .attr('height', fnY(1) *0.9)

     svg
        .selectAll('.rotulo')
        .data(parametros.dados)
        .enter()
        .append('text')
        .classed('rotulo' , true)
        .text((d) =>d)
        .attr ('x', (d) => fnX(d))
        .attr ('dx', -5)
        .attr ('y', (d,i) => fnY(i))
        .attr('dy', (d) =>fnY(1)*0.5)
}