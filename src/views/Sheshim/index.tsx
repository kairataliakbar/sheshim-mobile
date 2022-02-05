import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import moment from 'moment'

import {Card, Tag} from '../../components'
import colors from '../../theme/colors'
import {Question} from '../../models'
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
  },
  customStats: {
    height: 50,
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4
  },
  customStatsText: {
    fontSize: 16,
    textAlign: 'center',
  },
  details: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingRight: 20
  },
  detailsInner: {
    display: 'flex',
    flexDirection: 'column'
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

interface ICardCustomStateProps {
  children: React.ReactNode
  type: string
  customStyle?: { [key: string]: string | number }
}

function CardCustomState(props: ICardCustomStateProps) {
  const { children, type, customStyle } = props

  const textColor: string = type === 'answers' ? 'white' : 'black'

  return (
    <View
      style={{
        ...styles.customStats,
        backgroundColor: type === 'answers' ? '#75b782' : 'transparent',
        ...customStyle
      }}
    >
      <Text style={{ ...styles.customStatsText, color: textColor }}>
        {children}
      </Text>
      <Text style={{ ...styles.customStatsText, color: textColor }}>{type}</Text>
    </View>
  )
}

export default function Sheshim() {
  const questionsByDate: Question[] = questions.sort((a, b) => (
    new Date(b.createdAt) - new Date(a.createdAt)
  ))

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item: {id: any}) => item.id}
        data={questionsByDate}
        renderItem={(itemData: {item: Question}) => (
          <Card
            onPressCard={() => {}}
            customStyle={styles.card}
          >
            <View style={styles.stats}>
              <CardCustomState type="votes">{itemData.item.votes}</CardCustomState>
              <CardCustomState type="answers" customStyle={{ marginTop: 10 }}>
                {itemData.item.answers}
              </CardCustomState>
            </View>

            <View style={styles.details}>
              <View style={styles.detailsInner}>
                <Text style={styles.title}>{itemData.item.title}</Text>

                <View style={styles.tags}>
                  {itemData.item.tags.map((tag: string, index: number) => (
                    <Tag key={index} customStyle={styles.tag}>{tag}</Tag>
                  ))}
                </View>
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
