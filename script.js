require([
        "esri/WebMap",
        "esri/views/MapView",
        "esri/widgets/Search"
      ], function (WebMap, MapView, Search) {
        const map = new WebMap({
          portalItem: {
            id: "7df1ffb5001b4c7e87c08f1e3b381a9d"
          }
        });

        // Add the map to a MapView
        const view = new MapView({
          container: "viewDiv",
          map: map
        });
