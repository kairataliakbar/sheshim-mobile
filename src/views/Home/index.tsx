import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import moment from 'moment'

import {CardQuestion, Tag, CardState} from '../../components'
import colors from '../../theme/colors'

interface Questions {
  readonly id: number, 
  title: string,
  votes: number,
  answers: number,
  views: number,
  tags: string[],
  createdAt: string
}

const questions: Questions[] = [
  {
    id: 1,
    title: 'What do these three dots in React do?',
    votes: 12,
    answers: 2,
    views: 17,
    tags: ['javascript', 'react'],
    createdAt: '2021-01-08T16:52:34+06:00'
  },
  {
    id: 2,
    title: 'What is jsx?',
    votes: 3,
    answers: 310,
    views: 6,
    tags: ['react'],
    createdAt: '2020-01-08T16:52:34+06:00'
  },
  {
    id: 3,
    title: 'React',
    votes: 10,
    answers: 3,
    views: 20,
    tags: ['react'],
    createdAt: '2020-12-08T16:52:34+06:00'
  }
]

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

export default function Home() {
  const handlePressCard = (): void => console.log('press card')

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item: {id: any}) => item.id}
        data={questions}
        renderItem={(itemData: {item: Questions, index: number}) => (
          <CardQuestion
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
          </CardQuestion>
        )}
      />
    </View>
  )
}
