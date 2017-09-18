$( document ).ready(function() {
    
      var map, trafficLayer, transitLayer, railLayer, retailPoints=[], retailMarkers=[];
      
      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(39.953376, -75.170244),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
     
          map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        trafficLayer = new google.maps.TrafficLayer();
        railLayer = new google.maps.KmlLayer({
        url: 'https://c9.io/austinlstanton/ipad_app/workspace/KML/regionalrail.kml',
        preserveViewport: true
        });
        transitLayer = new google.maps.KmlLayer({
        url: 'https://c9.io/austinlstanton/ipad_app/workspace/KML/42.kml',
        preserveViewport: true
        });  
        
        retailPoints = [
            
                  {
             'position': new google.maps.LatLng(39.953376, -75.170244),
             'title': 'Citizens Bank Center',
             'contentString': '<div id="content">'+
                              '<div id="siteNotice">'+
                              '</div>'+
                              '<img src="images/Staples_Logo.png" width=100 border=0>'+
                              '</div>'+
                              '</div>',
                              
             'image': "images/logo_icon.png",
         },
         
           {
             'position': new google.maps.LatLng(39.953376, -75.180244),
             'title': 'Basil Bar & Grill',
             'contentString': '<div id="content">'+
                              '<div id="siteNotice">'+
                              '</div>'+
                              '<img src="images/Staples_Logo.png" width=100 border=0>'+
                              '</div>'+
                              '</div>',
            'image': "images/logo_icon.png",
            
         },
         
            {
             'position': new google.maps.LatLng(39.949379, -75.180545),
             'title': 'Basil Bar & Grill',
             'contentString': '<div id="content">'+
                              '<div id="siteNotice">'+
                              '</div>'+
                              '<img src="images/Staples_Logo.png" width=100 border=0>'+
                              '</div>'+
                              '</div>',
            'image': "images/logo_icon.png",
            
         },
         
             {
             'position': new google.maps.LatLng(39.965356, -75.137545),
             'title': 'Basil Bar & Grill',
             'contentString': '<div id="content">'+
                              '<div id="siteNotice">'+
                              '</div>'+
                              '<img src="images/Staples_Logo.png" width=100 border=0>'+
                              '</div>'+
                              '</div>',
            'image': "images/logo_icon.png",
            
         },
         
              {
             'position': new google.maps.LatLng(39.945356, -75.129545),
             'title': 'Basil Bar & Grill',
             'contentString': '<div id="content">'+
                              '<div id="siteNotice">'+
                              '</div>'+
                              '<img src="images/Staples_Logo.png" width=100 border=0>'+
                              '</div>'+
                              '</div>',
            'image': "images/logo_icon.png",
            
         },
            
      ];
      
      plotRetail();
        
      }
      //End Initialize
      
    function plotRetail(){    
        for (var i = 0; i < retailPoints.length; i++) {
             var marker = new google.maps.Marker({
                 position: retailPoints[i].position,
                 title: retailPoints[i].title,
                 icon: retailPoints[i].image
             });
             
             addInfoWindow(marker, i);
             
             retailMarkers[i] = marker;
        }
    }
       
    
        function addInfoWindow(marker, index) {

            var info = retailPoints[index].contentString;

            var infoWindow = new google.maps.InfoWindow({
                content: info
            });

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
            });
            
           
            
        } 
        
        
       
       
     
      
      function toggleTrafficLayer () {
          trafficLayer.setMap(trafficLayer.getMap() ? null : map);
          
      }
      
      function toggleRailLayer () {
          railLayer.setMap(railLayer.getMap() ? null : map);
          
      }
      
      function toggleTransitLayer () {
          transitLayer.setMap(transitLayer.getMap() ? null : map);
          
      }
      
      function toggleRetailLayer () {
            for (var i =0; i<retailMarkers.length; i++) {
                var marker = retailMarkers[i];
                marker.setMap(marker.getMap() ? null : map);
            }
         
      }
      
      google.maps.event.addDomListener(window, 'load', initialize);
      
});     
      
 