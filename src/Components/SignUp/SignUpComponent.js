import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native'
import React, { useRef, useState } from 'react'
import userActions from '../../redux/actions/userActions.js';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function SignUpComponent(props) {

    console.log(props)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState('')

    const handleSubmit = (event) => {
  
        event.preventDefault()
    
        const userData = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          profileurl: photo,
          from: 'signup'
        }
        props.signUpUser(userData)
    
        }

  return (
    <KeyboardAwareScrollView style={styles.wrapperSignUp}>
      <ImageBackground source={require('../../../assets/img/hero.jpg')}  style={styles.imageSignUp}>
      {props.user ? ( 
      
      <View>
    <Image style={styles.imgLogged} source={{ uri: `${props.user.profileurl}`}} />
    <Text style={styles.textLogged}>You are logged in as: {props.user.firstName}</Text>
    </View>)

      : (<>
      

      <TextInput
      type="text"
      style={styles.inputSignUp}
      label="firstName"
      placeholder={'First Name'}
      onChangeText={(text) => setFirstName(text)}
      />

<TextInput
      type="text"
      style={styles.inputSignUp}
      label="lastName"
      placeholder={'Last Name'}
      onChangeText={(text) => setLastName(text)}
      />

      <TextInput
      type="text"
      style={styles.inputSignUp}
      label="email"
    //   value={email}
      placeholder={'email'}
      onChangeText={(text) => setEmail(text)}
      />

    <TextInput
      style={styles.inputSignUp}
      label="password"
      placeholder={'Password'}
      type="text"
      secureTextEntry={true}
      onChangeText={(text) => setPassword(text)}
      />

<TextInput
      style={styles.inputSignUp}
      label="photo"
      placeholder={'Add a url with your best photo!'}
      type="text"
      const onChangeText={(text) => setPhoto(text)}
      />

<Button 
    type="submit"
    title="Sign Up"
    onPress={handleSubmit}
    >
    </Button>
    </>
    )}
    </ImageBackground>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
    wrapperSignUp: {
      backgroundColor: 'white',
      borderRadius: 16,
      // margin: 20,
      // padding: 15,
  },
    inputSignUp: {
    margin: 30,
    fontSize: 18,
    backgroundColor: 'whitesmoke',
    padding: 10,
    borderRadius: 16,
    color: 'black',
    },
    imgLogged: {
      width: 100,
      height: 100,
      backgroundColor: 'red',
      borderRadius:360,
      alignSelf: 'center',
      margin: 50,
      marginTop: 100,
    },
    textLogged: {
      fontSize: 25,
      textAlign: 'center',
      marginBottom: 100,
      color: 'black',
    },
    imageSignUp: {
      height: 1200,
      width: '100%',
      paddingTop: 100,
    }
})

const mapDispatchToProps = {
    signUpUser: userActions.signUpUser,
  }
  const mapStateToProps = (state) => {
    return {
      user: state.userReducer.user,
      message: state.userReducer.message,
      message2: state.userReducer.message2,
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);