import React,{useState,useRef} from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    // FlatList,
    Dimensions,
    Image,
    TextInput,
    useWindowDimensions,
  } from 'react-native';
  import dbJson from './db.json'
  const {width1,height1} = Dimensions.get('screen');
  import Animated, {useSharedValue, useAnimatedStyle, useAnimatedScrollHandler, interpolate } from "react-native-reanimated";
  import { AntDesign } from '@expo/vector-icons';
  import { MaterialIcons,Feather } from '@expo/vector-icons';
  import { FontAwesome } from '@expo/vector-icons';
  import ImageList1 from './Image1.png';
  import ImageList2 from './image8.png';
  import ImageList3 from './image6.png';
  import { useNavigation } from "@react-navigation/native";

  import FlatlistScreen from './flatlistScreen';

  import { FlatList } from 'react-native-gesture-handler';
  
  const list  = [
    {
      image: 'https://www.savethestudent.org/uploads/grocery-basket.jpg',
      name: "add1"
    },
    {
      image: "https://goodcheapeats.com/wp-content/uploads/2022/02/flatlay-of-budget-ingredients.jpg",
      name: "add2"
    },
    {
      image: "https://img.freepik.com/premium-photo/paper-bag-with-fresh-vegetables-other-food_565470-220.jpg",
      name: "add2"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeF3KV3SFLUeRIt0EsH0MdlU79l19IH6t7Tg&usqp=CAU",
      name: "add2"
    },
    

  ]
  

  

const OVERFLOW_HEIGHT = 70;
const SPAING = 10;


 function GroceryScreen () {
  const navigation = useNavigation();
const [flatList, setFlatlist] = useState(list)

 const userData = dbJson;
    console.log("asdasdas",flatList);
   
    const {width} = useWindowDimensions();
    const size = width * 0.8;
    const spacer = (width - size) / 2;
    const x = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: event =>{
            x.value = event.contentOffset.x;
        }
    })
    
    const data = [
        {id: 1, name: 'React JS', url: ImageList1},
        {id: 2, name: 'JavaScript', url: ImageList2},
        {id: 3, name: 'Node JS', url: ImageList3},
      ];
      const [newData] = useState([
        {key: 'spacer-left'}, 
        ...data,
         {key:'spacer-right'},
        ])
    const [region,setRegion] = useState('')
    const [searchPhrase, setSearchPhrase] = useState('');
    const [index, setIndex] = useState(0);
  const getInitialState = () => {
  return {
    region: {
      latitude: 2.755010,
      longitude: 32.302930,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };
}
function onRegionChange(region) {
    setRegion(region);
  }

  const Item = ({listData}) =>{
    console.log('console',listData)
    return(
      <View>
        <Image source={listData.image} style={{width:90,height:95}}/>
      </View>
    )
  }
  console.log(newData);
    return (
        <ScrollView> 
                <View style={styles.container}>
                    <View style={styles.header}>
                     <TouchableOpacity onPress={() => navigation.navigate("/TempleScreen")}>
                     <AntDesign name="left" size={30} color="black" />
                      </TouchableOpacity> 
                    
                    <Text style={styles.headingText}>Grocery</Text>
                    <View style={styles.deliveryIcon}>
                    <MaterialIcons name="delivery-dining" size={26} color="black"></MaterialIcons>
                    <Text style={{paddingLeft:9,fontSize:12,paddingTop:2}}>20 - 30 mins</Text>
                    </View>
                    </View>
                    {/* <View>
                    <MapView style={styles.map} 
                        region={region}
                        onRegionChange={onRegionChange}
                        initialRegion={getInitialState}
                        />
                    </View> */}
                    <View style={styles.SearchBox}>
                    <Feather
                        name="search"
                        size={20}
                        color="black"
                        style={{marginTop:2,marginLeft:4}}
                        />
                        {/* Input field */}
                        <TextInput
                        style={styles.input}
                        placeholder="Search"
                        value={searchPhrase}
                        onChangeText={setSearchPhrase}
                        // onFocus={() => {
                        //     setClicked(true);
                        // }}
                        />
                        <Feather 
                        name="mic" 
                        size={20} 
                        color="black" 
                        style={{marginLeft:190}}
                        />
                    </View>
                    <Animated.ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false} 
                    bounces={false}
                    scrollEventThrottle={16}
                    snapToInterval={size}
                    decelerationRate="fast"
                    onScroll={onScroll}
                    >
                        {newData.map((item,index) => {
                            //eslint-disable-next-line react-hooks/rules-of-hooks
                            const style = useAnimatedStyle(() =>{
                                const scale = interpolate(
                                    x.value,
                                    [(index -2) *size, (index -1) * size, index * size],
                                    [0.88, 1, 0.88]
                                )
                                return{
                                    transform:[{scale}],
                                }
                            })
                            if(!item.url){
                                return <View style={{width:spacer}} key={index}/> 
                            }
                         
                        return(
                            
                            <View style={{width: size}} key={index}>
                                <Animated.View style={[styles.container,style]}>
                                    <Image source={item.url} style={styles.image}/>
                             
                                </Animated.View>
                            </View>
                        )})}
                    </Animated.ScrollView>
                        <View style={{flexDirection:'row',}}>
                          <Text style={{fontSize:25,paddingTop:10, paddingLeft:5,fontWeight:500}}>Trending near you </Text>
                          <TouchableOpacity style={{paddingTop:10,marginLeft:75}} onPress={() => navigation.navigate("nestedscreen")}>
                            <Text style={{fontSize:21}}>See all <AntDesign name="right" size={24} color="black" /></Text>
                          </TouchableOpacity>
                         </View>
                        <ScrollView style={{padding:5, boxShadow:' 0 4px 12px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.29)',}} horizontal={true} showsHorizontalScrollIndicator={false} >
                         
                          <View style={styles.srcoll2}>
                            <Image source={require('./assets/images/0.jpg')} style={{width:120,height:160,borderRadius:20}}/>
                            <Text style={styles.bodyText}>Brown eggs</Text>
                            <Text style={styles.bodyText2}>Rating 4</Text>
                            <View style={{flexDirection:'row'}}>
                            <FontAwesome name="rupee" size={20} color="black" style={{paddingLeft:5,marginTop:5}} />
                             <Text style={{paddingLeft:4,fontWeight:500, fontSize:15,marginTop:5}}>28.1</Text>
                              <TouchableOpacity style={{borderWidth:1,borderColor:'red',width:60,height:25, marginLeft:15,borderRadius:10}}>
                                <Text style={{textAlign:'center',paddingTop:3,fontWeight:500}}>Add</Text>
                              </TouchableOpacity>
                            </View>
                            </View>
                            <View style={styles.srcoll2}>
                            <Image source={require('./assets/images/1.jpg')} style={{width:120,height:160,borderRadius:20}}/>
                            <Text style={styles.bodyText}>stawberry</Text>
                            <Text style={styles.bodyText2}>Rating 4.5</Text>
                            <View style={{flexDirection:'row'}}>
                            <FontAwesome name="rupee" size={20} color="black" style={{paddingLeft:5,marginTop:5}} />
                             <Text style={{paddingLeft:4,fontWeight:500, fontSize:15,marginTop:5}}>28.1</Text>
                              <TouchableOpacity style={{borderWidth:1,borderColor:'red',width:60,height:25, marginLeft:15,borderRadius:10}}>
                                <Text style={{textAlign:'center',paddingTop:3,fontWeight:500}}>Add</Text>
                              </TouchableOpacity>
                            </View>
                            </View>
                            <View style={styles.srcoll2}>
                            <Image source={require('./assets/images/2.jpg')} style={{width:120,height:160,borderRadius:20}}/>
                            <Text style={styles.bodyText}>Asparagus</Text>
                            <Text style={styles.bodyText2}>Rating 4.2</Text>
                            <View style={{flexDirection:'row'}}>
                            <FontAwesome name="rupee" size={20} color="black" style={{paddingLeft:5,marginTop:5}} />
                             <Text style={{paddingLeft:4,fontWeight:500, fontSize:15,marginTop:5}}>28.1</Text>
                              <TouchableOpacity style={{borderWidth:1,borderColor:'red',width:60,height:25, marginLeft:15,borderRadius:10}}>
                                <Text style={{textAlign:'center',paddingTop:3,fontWeight:500}}>Add</Text>
                              </TouchableOpacity>
                            </View>
                            </View>
                            <View style={styles.srcoll2}>
                            <Image source={require('./assets/images/3.jpg')} style={{width:120,height:160,borderRadius:20}}/>
                            <Text style={styles.bodyText}>smoothie</Text>
                            <Text style={styles.bodyText2}>Rating 3.9</Text>
                            <View style={{flexDirection:'row'}}>
                            <FontAwesome name="rupee" size={20} color="black" style={{paddingLeft:5,marginTop:5}} />
                             <Text style={{paddingLeft:4,fontWeight:500, fontSize:15,marginTop:5}}>28.1</Text>
                              <TouchableOpacity style={{borderWidth:1,borderColor:'red',width:60,height:25, marginLeft:15,borderRadius:10}}>
                                <Text style={{textAlign:'center',paddingTop:3,fontWeight:500}}>Add</Text>
                              </TouchableOpacity>
                            </View>
                            </View>

                        </ScrollView>
                        <View style={styles.FlatList}>
                          <FlatlistScreen />
                        </View>
                        <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:10,paddingTop:20}}>HouseHold Favouties</Text>
                        <Text style={{paddingLeft:10}}>Explore your trusted brand</Text>
                        <ScrollView style={{padding:5, boxShadow:' 0 4px 12px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.29)',}} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.srcoll3}>
                            <Image source={require('./assets/images/11.jpeg')} style={{width:120,height:160,borderRadius:20}}/>
                            
                            <Text style={styles.bodyText3}>Handwash</Text>
                            </View>
                            <View style={styles.srcoll3}>
                            <Image source={require('./assets/images/12.jpeg')} style={{width:120,height:160,borderRadius:20}}/>
                            
                            <Text style={styles.bodyText3}>Bodywash</Text>
                            </View>
                            <View style={styles.srcoll3}>
                            <Image source={require('./assets/images/13.webp')} style={{width:120,height:160,borderRadius:20}}/>
                            
                            <Text style={styles.bodyText3}>Soap</Text>
                            </View>
                            <View style={styles.srcoll3}>
                            <Image source={require('./assets/images/14.webp')} style={{width:120,height:160,borderRadius:20}}/>
                            
                            <Text style={styles.bodyText3}>Cloathwash</Text>
                            </View>
                            <View style={styles.srcoll3}>
                            <Image source={require('./assets/images/15.jpeg')} style={{width:120,height:160,borderRadius:20}}/>
                            
                            <Text style={styles.bodyText3}>Drink</Text>
                            </View>
                            <View style={styles.srcoll3}>
                            <Image source={require('./assets/images/16.webp')} style={{width:120,height:160,borderRadius:20}}/>
                            
                            <Text style={styles.bodyText3}>Milk</Text>
                            </View>
                        </ScrollView>

                        <Text style={{fontWeight:'bold', fontSize:20,paddingLeft:10}}>Explore more</Text>
                        <Text style={{paddingLeft:10}}>All are now under</Text>
                        <ScrollView style={{ boxShadow:' 0 4px 12px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.29)',}} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.srcoll3}>
                            <Image source={require('./assets/images/17.jpeg')} style={{width:120,height:160,borderRadius:20}}/>
                            
                            
                            </View>
                            <View style={styles.srcoll3}>
                            <Image source={require('./assets/images/18.webp')} style={{width:120,height:160,borderRadius:20}}/>
                            
                           
                            </View>
                            <View style={styles.srcoll3}>
                            <Image source={require('./assets/images/19.webp')} style={{width:120,height:160,borderRadius:20}}/>
                            
                           
                            </View>
                            <View style={styles.srcoll3}>
                            <Image source={require('./assets/images/20.jpeg')} style={{width:120,height:160,borderRadius:20}}/>
                            
                            
                            </View>
                            <View style={styles.srcoll3}>
                            <Image source={require('./assets/images/21.png')} style={{width:120,height:160,borderRadius:20}}/>
                            
                            
                            </View>
                            <View style={styles.srcoll3}>
                            <Image source={require('./assets/images/22.png')} style={{width:120,height:160,borderRadius:20}}/>
                            
                           
                            </View>
                        </ScrollView>
                        
                            
                </View>

        </ScrollView>
       
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        textAlign:'center'
    },
    header:{
        flexDirection:'row',
        paddingTop:30,
    },
    headingText:{
        color:'#ccc',
        fontSize:21,
        fontWeight:600,
        paddingLeft:20
    },
    deliveryIcon:{
        flexDirection:'row',
       marginLeft:130,
        width:'30%',
        borderRadius:3,
        height:30,
        padding:5,
        backgroundColor:'#F79540'
    },
    map: {
        width: '100%',
        height: '100%',
      },
      SearchBox:{
        flexDirection:'row',
        marginTop:80,
        padding: 10,
        marginLeft:20,
        borderRadius:25,
        // paddingTop:10,
        flexDirection: "row",
        width: "90%",
        backgroundColor: "#d9dbda",
        height:45
        },
      input: {
        fontSize: 20,
        
        paddingLeft:25,
        
      },
      imageContainer:{
        borderRadius:32,
        overflow:'hidden'
      },
      image:{
        aspectRatio:16/9,
        width:'100%',
        height: undefined,
        borderRadius:20,
        backgroundColor:'#ccc'
      },
      srcoll2:{
        height:250,
        width:120,
        marginRight:10,
        // borderWidth:1,
        // borderColor:'#ccc',
        borderRadius:10,
        
        marginTop:35
      },
      bodyText:{
        fontSize:21,
        fontWeight:'bold',
        paddingLeft:3
      },
      bodyText2:{
        paddingLeft:5,
        fontWeight:'bold'
      },
      bodyText3:{
        paddingTop:5,
        padding:5,
        fontWeight:'bold'
      },
      FlatList:{
        paddingLeft:10,
       
        // backgroundColor:"red"
      },
      srcoll3:{
        height:250,
        width:120,
        marginRight:10,
        // borderWidth:1,
        // borderColor:'#ccc',
        borderRadius:10,
        padding:10,
        marginTop:15
      }


});


export default GroceryScreen;