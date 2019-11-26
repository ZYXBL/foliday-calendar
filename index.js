import FolidayCalendar from './src/calendar'

export default {
    install: function (Vue, options) {
        Vue.component('foliday-calendar', FolidayCalendar);
    },
}
export { FolidayCalendar }