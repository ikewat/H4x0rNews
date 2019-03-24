open BsReactNative;

let component = ReasonReact.statelessComponent("Comments");
let make = (~navigation: Config.navigationProp, ~storyId: int, _children) => {
  ...component,
  render: _self => {
    let back = () => navigation.navigate(News);

    <SafeAreaView style=AppStyle.pageContainer>
      /*
       * Header, title, back button
       */
      <View style=AppStyle.news>
        <Text value={"Show comments of story:" ++ string_of_int(storyId)} />
        <Button title="Back" onPress=back />
      </View>
      /*
       * Footer && ActivityIndicator
       * TODO: Transparent bg
       */
      <View>
        {
          if (false) {
            <ActivityIndicator style=AppStyle.activityIndicator size=`large />;
          } else {
            <View />;
          }
        }
      </View>
    </SafeAreaView>;
  },
};