import { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class AirDateTime extends PureComponent {
  render() {
    const { dateString } = this.props
    const dateTime = new Date(dateString)
    const date =
      dateTime.getFullYear() + '-' + (dateTime.getMonth() + 1) + '-' + dateTime.getDate()
    const hourString =
      dateTime.getHours() > 9 ? dateTime.getHours() : `${dateTime.getHours()}`
    const minuteString =
      dateTime.getMinutes() > 9 ? dateTime.getMinutes() : `0${dateTime.getMinutes()}`
    const time = `${hourString}:${minuteString}`
    return `${date} ${time}`
  }
}
AirDateTime.defaultProps = {
  dateString: null
}

AirDateTime.propTypes = {
  dateString: PropTypes.string
}

export class AirTimeZone extends PureComponent {
  render() {
    const { dateString } = this.props
    const dateTime = new Date(dateString)
    const zone = dateTime
      .toLocaleString('en', { timeZoneName: 'short' })
      .split(' ')
      .pop()
    return `${zone}`
  }
}

AirTimeZone.defaultProps = {
  dateString: null
}

AirTimeZone.propTypes = {
  dateString: PropTypes.string
}
