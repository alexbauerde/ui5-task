sap.ui.define(["de/bauerberatung/ui5-task/controller/BaseController", "sap/ui/Device", 'sap/ui/core/Fragment', 'sap/ui/core/Popup'], function(BaseController, Device, Fragment, Popup) {
    "use strict";

    return BaseController.extend("de.bauerberatung.ui5-task.controller.App", {

        onInit: function() {
            this.router = this.getOwnerComponent().getRouter();

            // this.getView().addEventDelegate({
            //     onAfterShow: function (event) {
            //       this.router.navTo("Module1");
            //     }
            //   },
            //   this
            // );

            this.router.attachRoutePatternMatched(
                this.onRoutePatternMatched.bind(this)
            );

            // apply content density mode to root view
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        },

     
        onRoutePatternMatched: function(event) {
            // this.byId("childViewSegmentedButton").setSelectedKey(
            //   event.getParameter("name")
            // );
        },

    });
});