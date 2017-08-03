import React, { Component } from 'react';
import { Text, View, AppRegistry, Image, ScrollView, Dimensions, Animated } from 'react-native';

import Moment from './moment.js';

// const {width, height} = Dimensions.get("window");
// 4 images

const Items = [
  { image: require('../images/drink1.jpg'), title: "Vokda Cran" },
  { image: require('../images/drink2.jpg'), title: "Old Fashion"},
  { image: require('../images/drink3.jpg'), title: "Mule" },
  { image: require('../images/drink4.jpg'), title: "Strawberry Daiquiri" }
];
export default class Animation extends Component {
  constructor(props, context) {
    super(props, context);
     this.state = {
       animatedScroll: new Animated.Value(0)
    }
  }
  

  render() {
    return (
      <View>
        <ScrollView
          pagingEnabled
          horizontal
          scrollEventThrottle={16}
          onScroll={
            Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.state.animatedScroll
                  }
                }
              }
            ])
          }
        >
          {Items.map((item, i) => {
            return <Moment key={i} {...item}></Moment>
          })}
        </ScrollView>
      </View>
    );
  }
}