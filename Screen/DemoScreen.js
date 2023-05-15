import React,{useState} from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import { FontAwesome } from '@expo/vector-icons';
  import { MaterialIcons,Feather } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";
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
function MainScreen () {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [flatList,setFlatlist] = useState(list)
    const handleClick = () =>{
        return(
            <FlatList 
            data={flatList}
            renderItem={<Text>welcome</Text>}
            />
        )
    }
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20,fontWeight:'bold',padding:10}}>Fruits & Vegetables</Text>

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

                <View style={styles.MainScreen}>
                    <View style={styles.sideView}>
                        <TouchableOpacity onPress={handleClick}>
                        <Image source={{
                        uri: "https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg?w=2000"
                      }} style={{width:80,height:80,borderRadius:50,paddingBottom:10}}/>
                      <Text styles={{paddingLeft:5}}>Vegetables</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleClick}>
                        <Image source={{
                        uri: "https://www.dairyfoods.com/ext/resources/2022/10/27/Dairy-Products.jpeg?1666879344"
                      }} style={{width:80,height:80,borderRadius:50}}/>
                      <Text styles={{paddingLeft:5}}>Milk Product</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleClick}>
                        <Image source={{
                        uri: "https://nypost.com/wp-content/uploads/sites/2/2022/03/Best-House-Cleaning-Products-feature-image.jpg?quality=75&strip=all"
                      }} style={{width:80,height:80,borderRadius:50}}/>
                      <Text styles={{paddingLeft:5}}>Home clean</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleClick}>
                        <Image source={{
                        uri: "https://www.itcportal.com/brands-microsite/images/sunfeast/new-launches-sun-02.png"
                      }} style={{width:80,height:80,borderRadius:50}}/>
                      <Text styles={{paddingLeft:20 ,}}>Food</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleClick}>
                        <Image source={{
                        uri: "https://4.bp.blogspot.com/-f3rOY1fN6Nc/VuKQnslUeyI/AAAAAAAADdI/xoGXZ4aO0_sWCIA1KnuE5H4uUZh0x7_rw/s1600/ITC-Products-Aashirvad-Aata.jpg"
                      }} style={{width:80,height:80,borderRadius:50}}/>
                      <Text styles={{paddingLeft:5,textAlign:'center'}}>Fruits</Text>
                        </TouchableOpacity>
                        
                      
                    </View>
                    
                    <View style={styles.centerView}>
                    <ScrollView>
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
                    </ScrollView>
                    </View>
                    </View>    
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        textAlign:'center'
    },
    SearchBox:{
        flexDirection:'row',
        marginTop:20,
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
          MainScreen:{
            flex:1,
            flexDirection:'row',
            paddingTop:10
            
          },
          sideView:{
            flex:0.3,
            // backgroundColor:'darkblue'
          },
          centerView:{
            flex:1,
            width:200,
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
});


export default MainScreen;