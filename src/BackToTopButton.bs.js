// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Text$BsReactNative = require("bs-react-native/src/components/text.js");
var Style$BsReactNative = require("bs-react-native/src/style.js");
var TouchableOpacity$BsReactNative = require("bs-react-native/src/components/touchableOpacity.js");

var fab = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.backgroundColor(/* String */Block.__(0, ["transparent"])),
      /* :: */[
        Style$BsReactNative.marginLeft(/* Auto */0),
        /* :: */[
          Style$BsReactNative.marginRight(/* Pt */Block.__(0, [15.0])),
          /* :: */[
            Style$BsReactNative.elevation(8.0),
            /* :: */[
              Style$BsReactNative.position(/* Absolute */0),
              /* :: */[
                Style$BsReactNative.bottom(/* Pt */Block.__(0, [0.0])),
                /* :: */[
                  Style$BsReactNative.right(/* Pt */Block.__(0, [15.0])),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var arrow = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.fontSize(/* Float */Block.__(0, [45.0])),
      /* :: */[
        Style$BsReactNative.color(/* String */Block.__(0, ["black"])),
        /* :: */[
          Style$BsReactNative.Transform[/* make */0](undefined, undefined, undefined, undefined, undefined, 1.25, undefined, undefined, undefined, undefined, undefined, /* () */0),
          /* [] */0
        ]
      ]
    ]);

var Style = /* module */[
  /* fab */fab,
  /* arrow */arrow
];

var component = ReasonReact.statelessComponent("BackToTopButton");

function make(onPress, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              return ReasonReact.element(undefined, undefined, TouchableOpacity$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(fab), undefined, onPress, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Js_primitive.some(arrow), undefined, undefined, undefined, undefined, undefined, undefined, "^", /* array */[]))]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.Style = Style;
exports.component = component;
exports.make = make;
/* fab Not a pure module */
