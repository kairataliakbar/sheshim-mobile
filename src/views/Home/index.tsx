import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import moment from 'moment'

import {CardQuestion, Tag} from '../../components'
import colors from '../../theme/colors'

interface Styles {
  screen: object,
  card: object,
  stats: object,
  statsText: object,
  details: object,
  title: object,
  tags: object,
  tag: object,
  createdAt: object
}

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
    answers: 3,
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

const styles: Styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  card: {
    flexDirection: 'row'
  },
  stats: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  statsText: {
    fontSize: 18,
  },
  details: {
    width: '80%',
    flexDirection: 'column',
    padding: 10
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
              <Text style={styles.statsText}>{itemData.item.votes}</Text>
              <Text style={styles.statsText}>{itemData.item.answers}</Text>
              <Text style={styles.statsText}>{itemData.item.views}</Text>
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
