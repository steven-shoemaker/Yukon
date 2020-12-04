require([
        "esri/WebMap",
        "esri/views/MapView",
        "esri/widgets/LayerList",
        "esri/widgets/Search"
      ], function (WebMap, MapView, LayerList, Search) {
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

        // Add a legend instance to the panel of a
        // ListItem in a LayerList instance
        const layerList = new LayerList({
          view: view,
          listItemCreatedFunction: function (event) {
            const item = event.item;
            if (item.layer.type != "group") {
              // don't show legend twice
              item.panel = {
                content: "legend",
                open: false
              };
            }
          }
        });
        view.ui.add(layerList, "top-right");
      });

var legend = new Legend({
  view: view,
  layerInfos: [{
    layer: featureLayer,
    title: "Legend"
  }]
});

view.ui.add(legend, "bottom-right");

         var search = new Search({
            map: ma
         }, "search");
         search.startup();
