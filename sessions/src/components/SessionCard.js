import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Card, CardSection } from './common'

const SessionCard = ({ nav, name, description }) =>{
  return(
    <View>
      <TouchableOpacity onPress={() => nav.navigate('Session')}>
        <CardSection>
          <Text>{name}</Text>
          <Text>{description}</Text>
        </CardSection>
      </TouchableOpacity>
    </View>
  )
}

export { SessionCard }
