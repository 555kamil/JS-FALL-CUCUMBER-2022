const moment = require("moment/moment");

class Dates {

    async getCurrentDate() {
        const now = moment();
        return now.format('D');
    }

    async getCurrentMonthNameInShort() {
        const now = moment();
        return now.format('MMM');
    }

    static getCurrentYearInYYYY() {
        const now = moment();
        return now.format('YYYY');
    }

    async getCurrentMonthAndYear() {
        const now = moment() 
        return now.format('MMMM YYYY')
    }

    async getFormat_MM_DD_YY(time) {
        time = moment(time)
        return time.format('MM/DD/YY')
    }

    async getFormat_DD_MMMM_YYYY(time) {
        time = moment(time)
        return time.format('DD MMMM, YYYY')
    }
}
module.exports = Dates;