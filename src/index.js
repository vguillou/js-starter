import moment from 'moment'

/**
 * Get a string representation of a date, with the YYYY-MM-DD format
 * @param {Date} date The date for which to get a string representation
 * @returns {string}
 */
export default function getDateString(date) {
  return moment(date.getTime()).format(moment.HTML5_FMT.DATE)
}
