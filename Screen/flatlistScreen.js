import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import React,{useState} from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import { AntDesign } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";

function MainScreen () {
    const list  = [
        {
          image: 'https://www.savethestudent.org/uploads/grocery-basket.jpg',
          name: "GroceryBucket"
        },
        {
          image: "https://goodcheapeats.com/wp-content/uploads/2022/02/flatlay-of-budget-ingredients.jpg",
          name: "GroceryList"
        },
        {
          image: "https://img.freepik.com/premium-photo/paper-bag-with-fresh-vegetables-other-food_565470-220.jpg",
          name: "Vegetables"
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeF3KV3SFLUeRIt0EsH0MdlU79l19IH6t7Tg&usqp=CAU",
          name: "GroceryBag"
        },
        {
            image:'https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/heinz-tomato-ketchup.jpg',
            name:"Tomato"
        },
        {
            image:"https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/lays-potato-chips.jpg",
            name:'Lays'
        },
        {
            image:'https://5.imimg.com/data5/SELLER/Default/2020/12/LY/QF/YV/51068474/grocery-items-photography-500x500.jpg',
            name:'Corn Flakes'
        },
        {
          image:'https://m.media-amazon.com/images/I/717UwWquPpL._AC_UL400_.jpg',
          name:'Chille Powder'
      }
    
      ]

      const [flatList, setFlatlist] = useState(list)
      
      const Item = ({list}) =>{
        return(
          <View>
              <View style={{padding:9, margin:5,width:100,height:100,borderWidth:1,borderColor:'#ccc',borderRadius:10}}>
                <Image source={{uri: list.image}} style={{width:75,height:80, borderRadius:20}}/>
              
            </View>
            <View>
              <Text style={{color:'#9CB4CC',textAlign:'center'}}>{list.name}</Text>
            </View>
          </View>
            
        )
      }

      console.log('flatList',flatList)
    return (
        <View style={styles.container}>
          <View style={{flexDirection:'row'}}> 
          <Text style={{fontWeight:'bold',fontSize:20}}>Shop by Catagories</Text>
          <TouchableOpacity style={{marginLeft:95}} onPress>
                            <Text style={{fontSize:21}}>See all <AntDesign name="right" size={24} color="black" /></Text>
                          </TouchableOpacity>
          </View>
           
            <FlatList 
              // horizontal
            style={{width:'90%',}}
            
            data={flatList}
            renderItem={({item}) =>{
                return(
                   <Item list={item} />
                )
                
            }}
            numColumns={4}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        // textAlign:'center',
        // backgroundColor:'darkblue',
        // width:200,
        // height:100
    }
});


export default MainScreen;