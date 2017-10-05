import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { Card, CardSection } from './common'
import Translation from '../topicImages/Translation'

const SessionCard = ({ nav, topic, name, description, creator }) =>{
  const topicImage = Translation[topic]
  return(
    <View>
      <TouchableOpacity onPress={() => nav.navigate('Session', { topic, name, description, creator })}>
        <CardSection>
          <Image
            source={topicImage}
            style={styles.thumbnailStyle}
          />
          <Text>{topic}</Text>
          <Text>{name}</Text>
        </CardSection>
      </TouchableOpacity>
    </View>
  )
}

const styles={
  thumbnailStyle: {
    height: 50,
    width: 50
  }
}
export { SessionCard }
