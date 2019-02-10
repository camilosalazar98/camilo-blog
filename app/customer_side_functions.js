$(document).ready(function(){

  $.ajaxSetup({beforeSend: function(xhr)
  //Allows access to js files throught web browser through firefox
    {
      if (xhr.overrideMimeType)
      {
        xhr.overrideMimeType("application/json");
      }
    }
    });

  $.getJSON('../twochart/js/info2.json', function(list) {


     $.each(list, function (i, item) {
      if(item.name!=undefined){
        options.xAxis.categories = list[0]['data'];

          options.series.push({
            type:item.type,//Pushes type to the graph
             name:item.name,//Pushes type to the name
             data:item.data//Pushes type to the data ex: json
          });
      }
   });

    var chart = new Highcharts.Chart('container',options);
    //create charts

   });

   var options = {
       chart: {
           renderTo: 'container',
           defaultSeriesType: 'column'
       },
       title: {
           text: 'Both John Doe Bar charts & line charts'
       },
       xAxis: {
           categories: [],
    min: 0,
    max: 23
       },
       yAxis: {
        title: {

           }
       },
       series: []
   }
});
