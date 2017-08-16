class DateConversion {
    static monthsToSeconds(months) {
        return months * 2592000;
    }

    static daysToSeconds(days) {
        return days * 86400;
    }

    static hoursToSeconds(hours) {
        return hours * 3600;
    }

    static minutesToSeconds(minutes) {
        return minutes * 60;
    }
}

export default DateConversion;