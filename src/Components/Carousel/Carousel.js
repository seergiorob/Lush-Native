import { StyleSheet, Text, View, Dimensions, SafeAreaView, Image, ImageBackground } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import imagenes from '../../../assets/imagenesCarousel.js'

const widthScreen = Dimensions.get("window").width

export default class CarouselHome extends React.Component {
  
    constructor(props){
      super(props);
        this.state = {
          activeIndex:0,
          carouselItems: imagenes
        }
      }
    _renderItem({item,index}){
      return (
        <View style={{
              backgroundColor:'white',
              borderRadius: 5,
              height: 450,
              padding: 0,
              marginTop: 16,
              marginLeft: 8,
              marginRight: 8, }}>
            
            <ImageBackground style={{flex: 1, width: 350, justifyContent: 'center', alignItems: 'center', justifyContent: 'flex-end',}} source={{uri:`${item.image}`}} resizeMode="cover"> 
            
            </ImageBackground>
          </View>

)
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'white', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"stack"}
                  // layoutCardOffset={`18`}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={350}
                  itemWidth={350}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}
