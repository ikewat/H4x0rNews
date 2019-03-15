// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Data = require("./Data.bs.js");
var List = require("bs-platform/lib/js/list.js");
var Expo = require("expo");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Text$BsReactNative = require("bs-react-native/src/components/text.js");
var View$BsReactNative = require("bs-react-native/src/components/view.js");
var Style$BsReactNative = require("bs-react-native/src/style.js");
var FlatList$BsReactNative = require("bs-react-native/src/components/flatList.js");
var Platform$BsReactNative = require("bs-react-native/src/platform.js");
var SafeAreaView$BsReactNative = require("bs-react-native/src/components/safeAreaView.js");

var match = Platform$BsReactNative.os(/* () */0) === /* Android */0;

var pageContainer = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.flex(1.0),
      /* :: */[
        Style$BsReactNative.backgroundColor(/* String */Block.__(0, ["#FF6600"])),
        /* :: */[
          Style$BsReactNative.paddingTop(/* Pt */Block.__(0, [match ? Expo.Constants.statusBarHeight : 0.0])),
          /* [] */0
        ]
      ]
    ]);

var news = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.flex(1.0),
      /* :: */[
        Style$BsReactNative.backgroundColor(/* String */Block.__(0, ["#F6F6EF"])),
        /* [] */0
      ]
    ]);

var AppStyle = /* module */[
  /* pageContainer */pageContainer,
  /* news */news
];

var component = ReasonReact.reducerComponent("App");

function make(_children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */(function (self) {
              var newPage = self[/* state */1][/* page */1] + 1 | 0;
              Data.fetchNewList(String(newPage), /* () */0).then((function (newsList) {
                      return Promise.resolve(Curry._1(self[/* send */3], /* Loaded */[/* tuple */[
                                        newPage,
                                        newsList
                                      ]]));
                    }));
              return /* () */0;
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              var renderItem = function (param) {
                return FlatList$BsReactNative.renderItem((function (news) {
                              return ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[
                                              ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[news[/* item */0][/* title */1]])),
                                              ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[]))
                                            ]));
                            }), param);
              };
              var keyExtractor = function (item, _index) {
                return String(item[/* id */0]);
              };
              var data = $$Array.of_list(self[/* state */1][/* newsList */0]);
              return ReasonReact.element(undefined, undefined, Curry.app(SafeAreaView$BsReactNative.make, [
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              Js_primitive.some(pageContainer),
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              /* array */[ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(news), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[ReasonReact.element(undefined, undefined, FlatList$BsReactNative.make(data, renderItem, keyExtractor, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[]))]))]
                            ]));
            }),
          /* initialState */(function (param) {
              return /* record */[
                      /* newsList : [] */0,
                      /* page */0,
                      /* loading */false
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (action) {
                var match = action[0];
                return /* Update */Block.__(0, [/* record */[
                            /* newsList */List.append(state[/* newsList */0], match[1]),
                            /* page */state[/* page */1] + match[0] | 0,
                            /* loading */state[/* loading */2]
                          ]]);
              } else {
                return /* Update */Block.__(0, [/* record */[
                            /* newsList */state[/* newsList */0],
                            /* page */state[/* page */1],
                            /* loading */true
                          ]]);
              }
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (_jsProps) {
        return make(/* array */[]);
      }));

exports.AppStyle = AppStyle;
exports.component = component;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* pageContainer Not a pure module */
