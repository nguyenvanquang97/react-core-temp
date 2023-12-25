const moment = require('moment');

export const FDate = {
  yMd(inputDate: string): string {
    if (moment(inputDate, moment.ISO_8601, true).isValid()) {
      return moment(inputDate, moment.ISO_8601).format('YYYY-MM-DD');
    }

    return moment(inputDate, 'DD/MM/YYYY').format('YYYY/MM/DD');
  },
  dMy(inputDate: string) {
    if (moment(inputDate, moment.ISO_8601, true).isValid()) {
      return moment(inputDate, moment.ISO_8601).format('DD/MM/YYYY');
    }
    return moment(inputDate, 'DD/MM/YYYY').format('DD/MM/YYYY');
  },
};
