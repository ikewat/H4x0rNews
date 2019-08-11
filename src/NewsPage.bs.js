// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Data = require("./Data.bs.js");
var List = require("bs-platform/lib/js/list.js");
var Util = require("./Util.bs.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var AppStyle = require("./AppStyle.bs.js");
var ReactCompat = require("reason-react-compat/src/ReactCompat.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var NewsFlatList = require("./NewsFlatList.bs.js");
var ReactNative = require("react-native");
var RefreshButton = require("./RefreshButton.bs.js");

var component = ReasonReact.reducerComponent("App");

function NewsPage(Props) {
  var navigation = Props.navigation;
  var loadNews = function (param) {
    var state = param[/* state */1];
    if (state[/* page */1] < 10 && !state[/* isLoading */2]) {
      var send = param[/* send */3];
      var newPage = state[/* page */1] + 1 | 0;
      Util.withTimeout(Data.fetchNewList(String(newPage), /* () */0), 30000).then((function (newsList) {
                return Promise.resolve(Curry._1(send, /* Loaded */[/* tuple */[
                                  newPage,
                                  newsList
                                ]]));
              })).catch((function (_err) {
              return Promise.resolve(Curry._1(send, /* Timeout */2));
            }));
      return Curry._1(send, /* Loading */1);
    } else {
      return 0;
    }
  };
  var reload = function (param) {
    var send = param[/* send */3];
    Curry._1(send, /* Init */0);
    Util.withTimeout(Data.fetchNewList(String(1), /* () */0), 30000).then((function (newsList) {
              return Promise.resolve(Curry._1(send, /* Loaded */[/* tuple */[
                                1,
                                newsList
                              ]]));
            })).catch((function (_err) {
            return Promise.resolve(Curry._1(send, /* Timeout */2));
          }));
    return /* () */0;
  };
  var init = function (param) {
    return /* record */[
            /* newsList : [] */0,
            /* page */0,
            /* isLoading */false,
            /* timeout */false
          ];
  };
  return ReactCompat.useRecordApi(/* record */[
              /* debugName */component[/* debugName */0],
              /* reactClassInternal */component[/* reactClassInternal */1],
              /* handedOffState */component[/* handedOffState */2],
              /* willReceiveProps */component[/* willReceiveProps */3],
              /* didMount */loadNews,
              /* didUpdate */component[/* didUpdate */5],
              /* willUnmount */component[/* willUnmount */6],
              /* willUpdate */component[/* willUpdate */7],
              /* shouldUpdate */component[/* shouldUpdate */8],
              /* render */(function (self) {
                  var match = self[/* state */1][/* timeout */3];
                  return React.createElement(ReactNative.SafeAreaView, {
                              style: AppStyle.pageContainer,
                              children: React.createElement(ReactNative.View, {
                                    style: AppStyle.NewsPage[/* newsContainer */0],
                                    children: null
                                  }, match ? React.createElement(ReactNative.Text, {
                                          onPress: (function (param) {
                                              return reload(self);
                                            }),
                                          style: AppStyle.Common[/* textCenter */1],
                                          value: "Timeout...Tap Refresh Button to reload page"
                                        }) : React.createElement(NewsFlatList.make, {
                                          data: $$Array.of_list(self[/* state */1][/* newsList */0]),
                                          refreshing: self[/* state */1][/* isLoading */2],
                                          onRefresh: (function (param) {
                                              return reload(self);
                                            }),
                                          onEndReached: (function (param) {
                                              return loadNews(self);
                                            }),
                                          navigation: navigation
                                        }), React.createElement(RefreshButton.make, {
                                        onPress: (function (param) {
                                            return reload(self);
                                          })
                                      }))
                            });
                }),
              /* initialState */init,
              /* retainedProps */component[/* retainedProps */11],
              /* reducer */(function (action, state) {
                  if (typeof action === "number") {
                    switch (action) {
                      case 0 : 
                          return /* Update */Block.__(0, [/* record */[
                                      /* newsList : [] */0,
                                      /* page */0,
                                      /* isLoading */false,
                                      /* timeout */false
                                    ]]);
                      case 1 : 
                          return /* Update */Block.__(0, [/* record */[
                                      /* newsList */state[/* newsList */0],
                                      /* page */state[/* page */1],
                                      /* isLoading */true,
                                      /* timeout */state[/* timeout */3]
                                    ]]);
                      case 2 : 
                          return /* Update */Block.__(0, [/* record */[
                                      /* newsList */state[/* newsList */0],
                                      /* page */state[/* page */1],
                                      /* isLoading */state[/* isLoading */2],
                                      /* timeout */true
                                    ]]);
                      
                    }
                  } else {
                    var match = action[0];
                    return /* Update */Block.__(0, [/* record */[
                                /* newsList */List.append(state[/* newsList */0], match[1]),
                                /* page */match[0],
                                /* isLoading */false,
                                /* timeout */false
                              ]]);
                  }
                }),
              /* jsElementWrapped */component[/* jsElementWrapped */13]
            ]);
}

var make = NewsPage;

exports.component = component;
exports.make = make;
/* component Not a pure module */
