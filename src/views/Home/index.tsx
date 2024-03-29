import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import moment from 'moment'

import {Card, Tag, CardState} from '../../components'
import colors from '../../theme/colors'
import {Question, Navigation} from '../../models'
import {questions} from '../../models/mock'

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  card: {
    flexDirection: 'row'
  },
  stats: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  details: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 10,
    paddingRight: 20
  },
  title: {
    fontSize: 22,
    color: colors.darkBlue,
    marginBottom: 6
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 6
  },
  tag: {
    marginRight: 6
  },
  createdAt: {
    textAlign: 'right'
  }
})

export default function Home({navigation}: {navigation: Navigation}) {
  const handlePressCard = (): void => navigation.navigate('DetailsQuestion')

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item: {id: any}) => item.id}
        data={questions}
        renderItem={(itemData: {item: Question, index: number}) => (
          <Card
            onPressCard={handlePressCard}
            customStyle={styles.card}
          >
            <View style={styles.stats}>
              <CardState label={itemData.item.votes} iconName="md-arrow-up" iconColor="#21ba45" />
              <CardState label={itemData.item.answers} iconName="ios-chatbubbles" iconColor={colors.black} />
              <CardState label={itemData.item.views} iconName="ios-eye" iconColor={colors.black} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{itemData.item.title}</Text>
              <View style={styles.tags}>
                {itemData.item.tags.map((tag: string, index: number) => (
                  <Tag key={index} customStyle={styles.tag}>{tag}</Tag>
                ))}
              </View>
              <Text style={styles.createdAt}>
                asked {moment(itemData.item.createdAt).fromNow()}
              </Text>
            </View>
          </Card>
        )}
      />
    </View>
  )
}
