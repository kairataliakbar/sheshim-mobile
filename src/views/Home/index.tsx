import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'

import {CardQuestion} from '../../components'
import colors from '../../theme/colors'

const questions: object[] = [
  {
    id: 1,
    title: 'What do these three dots in React do?',
    votes: 12,
    answers: 2,
    views: 17,
    tags: ['javascript', 'react'],
    date_published: '2021-01-08T16:52:34+06:00'
  },
  {
    id: 2,
    title: 'What is jsx?',
    votes: 3,
    answers: 3,
    views: 6,
    tags: ['react'],
    date_published: '2020-01-08T16:52:34+06:00'
  },
  {
    id: 3,
    title: 'React',
    votes: 10,
    answers: 3,
    views: 20,
    tags: ['react'],
    date_published: '2020-12-08T16:52:34+06:00'
  }
]

interface Styles {
  screen: object
}

interface Item {
  title: string
  votes: number
  answers: number
  views: number
  tags: string[]
  data_published: string
}

const styles: Styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  card: {
    flexDirection: 'row'
  },
  statistics: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statisticsText: {
    fontSize: 16,
  },
  details: {
    width: '80%',
    flexDirection: 'column'
  },
  title: {
    fontSize: 22,
    color: colors.darkBlue
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  datePublished: {
    textAlign: 'right'
  }
})

export default function Home() {
  const handlePressCard = () => console.log('press card')

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item: {id: any}) => item.id}
        data={questions}
        renderItem={(itemData: {item: any}) => (
          <CardQuestion onPressCard={handlePressCard} customStyle={styles.card}>
            <View style={styles.statistics}>
              <Text style={styles.statisticsText}>{itemData.item.votes}</Text>
              <Text style={styles.statisticsText}>{itemData.item.answers}</Text>
              <Text style={styles.statisticsText}>{itemData.item.views}</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{itemData.item.title}</Text>
              <View style={styles.tags}>
                {itemData.item.tags.map((tag: string, index: number) => (
                  <Text key={index}>{tag}</Text>
                ))}
              </View>
              <Text style={styles.datePublished}>
                {itemData.item.date_published}
              </Text>
            </View>
          </CardQuestion>
        )}
      />
    </View>
  )
}
