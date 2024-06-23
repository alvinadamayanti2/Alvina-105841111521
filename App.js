import { StyleSheet, Text, View, Image } from 'react-native';

import React from 'react'
const App = () => {
  return (
    <View style= {{
      //justifycontent = baris
      //alignitems = kolom
      flex: 1,justifyContent:'flex-end', alignItems:'flex-end',
    }}>
      <View style={{
        width: 100, height: 100, backgroundColor: 'blue',
      }}>
        <View style= {{
          flex: 2,justifyContent:'flex-star', alignItems:'flex-star',
        }}><View style={{
          width: 100, height: 100, backgroundColor: 'red',
        }}>
          </View>
          </View>
      </View>
    </View>
  );
}
 
export default App
