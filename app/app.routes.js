System.register(['./components/register.component', './root.component', './components/tweets.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var register_component_1, root_component_1, tweets_component_1;
    var routes;
    return {
        setters:[
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (root_component_1_1) {
                root_component_1 = root_component_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: '', component: root_component_1.RootComponent },
                { path: 'register', component: register_component_1.RegisterComponent },
                { path: 'tweets', component: tweets_component_1.TweetsComponent }
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map