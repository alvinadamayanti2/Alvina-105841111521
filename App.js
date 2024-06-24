import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import ButtonComponent from './component/button/button'

const App = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#000', // To blend with the background image
    }}>
      <Image
        source={require('./assets/shooping.jpg')}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          opacity: 0.5,
          zIndex: -1,
        }}
        resizeMode="cover"
      />
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
        <Image 
          source={require('./assets/LogoNs.jpg')} 
          style={{
            width: 100,
            height: 100,
            marginTop: 50,
            marginRight: 150,
            opacity: 1,
            zIndex: 1,
            borderRadius: 100,
          }}
        />
        <Text style={{
          color: 'black',
          fontSize: 28,
          fontWeight: '300',
          textAlign: 'center',
          marginTop: 20,
          fontWeight: 'bold'
        }}>
          Welcome To MyNs (Vinashoop) 
        </Text>
        <Text style={{
          color: 'black',
          fontSize: 15,
          textAlign: 'center',
          marginTop: 20,
        }}>
          Untuk gadis-gadisku yang tersayang🌷shooping merupakan suatu hal yang populer dan sudah menjadi bagian dari hidup seorang wanita. Kali ini kami hadir untuk untuk membuat kalian semua tidak repot lagi dalam hal mencari barang-barang yang akan menjadi incaran gadis-gadis yang lain ceunahhhh🌷🛍.
        </Text>
        <Text style={{
          color: 'black',
          fontSize: 15,
          textAlign: 'center',
          marginTop: 20,
        }}>
          Kami hadir dengan kualitas yang terbaik, ori, tercepat, dan 100% barang-barang kami limitid edition ceunahh🌷🛍
        </Text>
        <Text style={{
          color: 'black',
          fontSize: 15,
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 20,
          fontWeight : 'bold'
        }}>
           "Cerita horor terpendek yang pernah ada: sold out💳💸"
        </Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 50,
        }}>
          <ButtonComponent title= "Sign In" color="blue" />
          <ButtonComponent title= "Sign Up" color="tomato" />
        </View>
      </ScrollView>
    </View>
  );
};

export default App;