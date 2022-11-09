import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './DetailStyle'
import fetchHooks from '../../hooks/fetchHooks';
import config from '../../../config';
import Loading from '../../loading';
import Error from '../../error/Error';

const Detail = ({ route }) => {
  const { id } = route.params;
  const { data, error, loading} = fetchHooks(`${config.API_URL}/${id}`)
  console.log(data)
  if(loading) {
    return  <Loading />
  }

  if(error) {
    return <Error />
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.image}} ></Image>
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price} ₺</Text>
      </View>
    </View>
  )
}

export default Detail
