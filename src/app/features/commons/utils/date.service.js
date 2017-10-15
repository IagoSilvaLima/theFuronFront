export default class DateService {
    normalize(date) {
        if (date instanceof Date)
            return date;
        var dateArray = date.split('/');
        return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
    }

    format(isoDate){
        var date = new Date(isoDate);
        return date.getDate() + '/' + (date.getMonth() + 1) +  '/' + date.getFullYear();
    }
}