export const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
];

export function convertDateToDDMMYYY(inputFormat) {
    function pad(s) {
        return (s < 10) ? '0' + s : s;
    }

    const d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('-');
}

export function convertDateToYYYMMDD(inputFormat) {
    function pad(s) {
        return (s < 10) ? '0' + s : s;
    }

    const d = new Date(inputFormat);
    return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-');
}

function monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() +
        (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
}

export function getMonthsInDateRange(startDate, endDate) {
    try {
        startDate = new Date(startDate);
        endDate = new Date(endDate);
        let startMonth = startDate.getMonth();
        let startYear = startDate.getFullYear();
        const monthDifference = monthDiff(startDate, endDate);
        const stringMonths = [];
        let initialMonth = 0;
        while (initialMonth <= monthDifference) {
            if (startMonth === 12) {
                startYear += 1;
                startMonth = 0;
            }
            stringMonths.push({
                month: monthNames[startMonth],
                year: startYear,
            });
            initialMonth += 1;
            startMonth += 1;
        }
        return stringMonths;
    } catch (error) {
        console.debug('Error occurred in getMonthsInDateRange');
        console.error(error);
        throw error;
    }
}
