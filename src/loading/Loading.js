import React from 'react'
import Lottie from 'lottie-react-native';


const Loading = () => {
  return (
    <Lottie source={require('../assets/atom.json')} autoPlay/>
  )
}

export default Loading
