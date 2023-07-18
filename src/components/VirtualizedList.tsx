import React from 'react'

import { FlatList, View, ViewStyle } from 'react-native'

type Props = {
  children: React.ReactNode | React.ReactElement;
  style?: ViewStyle | ViewStyle[];
}

function VirtualizedList({ children, style }: Props) {
  return (
    <FlatList
      data={[]}
      keyExtractor={item => 'list'}
      ListFooterComponent={
        <View style={style}>{children}</View>
      }
      renderItem={({ item }) => {
        return null
      }}
    />
  )
}

export default VirtualizedList