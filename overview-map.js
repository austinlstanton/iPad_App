$( document ).ready(function() {


      var map, heatmap, heatmapData=[], sitePoints=[];
      
      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(39.953376, -75.570244),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
     
          map = new google.maps.Map(document.getElementById("map-canvas-overview"),
            mapOptions);
            
         
        
        heatmapData = [
                   {location: new google.maps.LatLng(39.7953376, -75.170244), weight: 3},
                      new google.maps.LatLng(39.953376, -75.170244),
                    {location: new google.maps.LatLng(39.9553376, -75.180244), weight: 2},
                    {location: new google.maps.LatLng(39.9553376, -75.180244), weight: 3},
                    {location: new google.maps.LatLng(39.9553376, -75.180244), weight: 3},
                    {location: new google.maps.LatLng(39.9553376, -75.190244), weight: 2},
                    {location: new google.maps.LatLng(39.9553376, -75.185244), weight: 3},
                    {location: new google.maps.LatLng(39.9553376, -75.184244), weight: 3},
                    {location: new google.maps.LatLng(39.9753376, -75.194244), weight: 3},
                    {location: new google.maps.LatLng(39.9765376, -75.194249), weight: 3},
                    {location: new google.maps.LatLng(39.9765389, -75.194357), weight: 3},
                      new google.maps.LatLng(39.953376, -75.180242),
                      {location: new google.maps.LatLng(39.9553376, -75.180239), weight: 3},
                      new google.maps.LatLng(39.953376, -75.190241),
                      new google.maps.LatLng(39.953376, -75.170240),
                    {location: new google.maps.LatLng(39.9553376, -75.170240), weight: 2},
                    {location: new google.maps.LatLng(39.9553376, -75.170241), weight: 3},
                    {location: new google.maps.LatLng(39.9553376, -75.170242), weight: 3},
                    {location: new google.maps.LatLng(39.9553376, -75.170234), weight: 2},
                    {location: new google.maps.LatLng(39.9553376, -75.170233), weight: 3},
                    {location: new google.maps.LatLng(39.9553376, -75.184244), weight: 3},
                      new google.maps.LatLng(39.953376, -75.170246),
                      new google.maps.LatLng(39.953376, -75.170249),
                      new google.maps.LatLng(39.953376, -75.170248),
                      new google.maps.LatLng(39.953376, -75.170245),
                      new google.maps.LatLng(40.08416, -75.62160),
                      new google.maps.LatLng(40.08416, -75.62162),
                      new google.maps.LatLng(40.08416, -75.62169),
                      new google.maps.LatLng(40.58416, -75.62161),
                      new google.maps.LatLng(40.58416, -75.62167),
                      new google.maps.LatLng(40.58416, -75.62168)
                    ];
            
            heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData
            });
        
        sitePoints = [
            
        {
             'position': new google.maps.LatLng(39.95338, -75.17024),
             'title': 'Philadelphia',
             'contentString': '<div id="content">'+
                              '<div id="siteNotice">'+
                              '</div>'+
                              '<h3 id="firstHeading" class="firstHeading">Address of Site #1</h3>'+
                              '<div id="bodyContent">'+
                              '<p>Brief description of site</p>'+
                              '<p><a href="https://c9.io/austinlstanton/ipad_app/workspace/site.html" data-transition="slide">'+
                              'Go to site page</a></p>'+
                              '</div>'+
                              '</div>',
       
             
         },
         
           {
             'position': new google.maps.LatLng(40.58416, -75.62160),
             'title': 'Allentown',
             'contentString': '<div id="content">'+
                              '<div id="siteNotice">'+
                              '</div>'+
                              '<h3 id="firstHeading" class="firstHeading">Address of Site #2</h3>'+
                              '<div id="bodyContent">'+
                              '<p>Brief description of site</p>'+
                              '<p><a href="https://c9.io/austinlstanton/ipad_app/workspace/site.html" data-transition="slide">'+
                              'Go to site page</a></p>'+
                              '</div>'+
                              '</div>',
            
         },
         
           {
             'position': new google.maps.LatLng(40.07124, -75.30756),
             'title': 'Conshohocken',
             'contentString': '<div id="content">'+
                              '<div id="siteNotice">'+
                              '</div>'+
                              '<h3 id="firstHeading" class="firstHeading">Address of Site #3</h3>'+
                              '<div id="bodyContent">'+
                              '<p>Brief description of site</p>'+
                              '<p><a href="https://c9.io/austinlstanton/ipad_app/workspace/site.html" data-transition="slide">'+
                              'Go to site page</a></p>'+
                              '</div>'+
                              '</div>',
            
         },
         
           {
             'position': new google.maps.LatLng(39.74655, -75.55054),
             'title': 'Delaware',
             'contentString': '<div id="content">'+
                              '<div id="siteNotice">'+
                              '</div>'+
                              '<h3 id="firstHeading" class="firstHeading">Address of Site #4</h3>'+
                              '<div id="bodyContent">'+
                              '<p>Brief description of site</p>'+
                              '<p><a href="https://c9.io/austinlstanton/ipad_app/workspace/site.html" data-transition="slide">'+
                              'Go to site page</a></p>'+
                              '</div>'+
                              '</div>',
            
         },
            
              {
             'position': new google.maps.LatLng(40.26179, -76.88561),
             'title': 'Harrisburg',
             'contentString': '<div id="content">'+
                              '<div id="siteNotice">'+
                              '</div>'+
                              '<h3 id="firstHeading" class="firstHeading">Address of Site #5</h3>'+
                              '<div id="bodyContent">'+
                              '<p>Brief description of site</p>'+
                              '<p><a href="https://c9.io/austinlstanton/ipad_app/workspace/site.html" data-transition="slide">'+
                              'Go to site page</a></p>'+
                              '</div>'+
                              '</div>',
            
         },
         
           {
             'position': new google.maps.LatLng(39.91541, -74.94363),
             'title': 'Mount Laurel',
             'contentString': '<div id="content">'+
                              '<div id="siteNotice">'+
                              '</div>'+
                              '<h3 id="firstHeading" class="firstHeading">Address of Site #6</h3>'+
                              '<div id="bodyContent">'+
                              '<p>Brief description of site</p>'+
                              '<p><a href="https://c9.io/austinlstanton/ipad_app/workspace/site.html" data-transition="slide">'+
                              'Go to site page</a></p>'+
                              '</div>'+
                              '</div>',
            
         }
            
      ];
      
      plotSites();
        
      } //End Initialize
      
    function plotSites(){    
        for (var i = 0; i < sitePoints.length; i++) {

            var  marker = new google.maps.Marker({
                 position: sitePoints[i].position,
                 title: sitePoints[i].title,
             });
            
            addInfoWindow(marker, i);

              marker.setMap(map); 
        }
        
          
    } //End plotSites
    
    function addInfoWindow(marker, index) {

            var info = sitePoints[index].contentString;

            var infoWindow = new google.maps.InfoWindow({
                content: info
            });

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
            });
            
            
        }
    //End addInfoWindow
       
 

      function toggleHeatMap () {
         heatmap.setMap(heatmap.getMap() ? null : map);
          
      }
      
      google.maps.event.addDomListener(window, 'load', initialize);
      
      
});     
 