import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {

  state = {
    greeting:getGreeting(),
    time:getTime(),
    weekday:getWeekday(),
    month:getMonth(),
    day:getDay(),
    year:getYear()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.greet}>{this.state.greeting}</Text>
        <Text style={styles.greet}>It is {this.state.time} on</Text>
        <Text style={styles.greet}>{this.state.weekday}, {this.state.month} {this.state.day}, {this.state.year}.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greet: {
    marginTop: 10,
    color: 'white',
    fontSize: 20,
  },
})

export function getGreeting() {
  let date = new Date()
  let hour = date.getHours()
  let greeting = ''
  if (hour >= 0 && hour < 12) {
    greeting = 'Good morning!'
  } else if (hour >= 12 && hour < 17) {
    greeting = 'Good afternoon!'
  } else if (hour >= 17 && hour <= 23) {
    greeting = 'Good evening!'
  } else {
    greeting = 'Error'
  }
  return greeting
}

export function getTime() {
  let date = new Date()
  let time = date.toLocaleTimeString()
  return time
}

export function getWeekday() {
  let date = new Date()
  let day = date.getDay()
  let dayOfWeek = ''
  if (day === 0) {
    dayOfWeek = 'Sunday'
  } else if (day === 1) {
    dayOfWeek = 'Monday'
  } else if (day === 2) {
    dayOfWeek = 'Tuesday'
  } else if (day === 3) {
    dayOfWeek = 'Wednesday'
  } else if (day === 4) {
    dayOfWeek = 'Thursday'
  } else if (day === 5) {
    dayOfWeek = 'Friday'
  } else if (day === 6) {
    dayOfWeek = 'Saturday'
  } else {
    dayOfWeek = 'Error'
  }
  return dayOfWeek
}

export function getMonth() {
  let date = new Date()
  let month = date.getMonth()
  let monthOfYear = ''
  if (month === 0) {
    monthOfYear = 'January'
  } else if (month === 1) {
    monthOfYear = 'February'
  } else if (month === 2) {
    monthOfYear = 'March'
  } else if (month === 3) {
    monthOfYear = 'April'
  } else if (month === 4) {
    monthOfYear = 'May'
  } else if (month === 5) {
    monthOfYear = 'June'
  } else if (month === 6) {
    monthOfYear = 'July'
  } else if (month === 7) {
    monthOfYear = 'August'
  } else if (month === 8) {
    monthOfYear = 'September'
  } else if (month === 9) {
    monthOfYear = 'October'
  } else if (month === 10) {
    monthOfYear = 'November'
  } else if (month === 11) {
    monthOfYear = 'December'
  } else {
    monthOfYear = 'Error'
  }
  return monthOfYear
}

export function getDay() {
  let date = new Date()
  let day = date.getDate()
  return day
}

export function getYear() {
  let date = new Date()
  let year = date.getFullYear()
  return year
}