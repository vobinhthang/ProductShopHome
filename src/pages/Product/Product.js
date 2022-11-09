import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Config from '../../../config'
import ProductCard from '../../components/ProductCard/ProductCard';
import fetchHooks from '../../hooks/fetchHooks';
import Loading from '../../loading';
import Error from '../../error/Error';

const Product = ({ navigation }) => {
  
  const { data, loading, error} = fetchHooks(Config.API_URL);

  function handleSelect (id) {
      navigation.navigate('DetailPage', {id})   
  }

  function renderProduct({item}) {
    return <ProductCard product={item} onSelect={() => handleSelect(item.id)} />
  }

  if(loading) {
    return  <Loading />
  }

  if(error) {
    return <Error />
  }
  
  return (
    <View>
      <FlatList data={data} renderItem={renderProduct}></FlatList>
    </View>
  )
}

export default Product
