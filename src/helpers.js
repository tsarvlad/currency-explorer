export function getYesterdayDate() {
    const today = new Date();
    const oneDayAgo = new Date(today);
    oneDayAgo.setDate(today.getDate() - 2);
    const year = oneDayAgo.getFullYear();
    const month = (oneDayAgo.getMonth() + 1).toString().padStart(2, "0");
    const day = oneDayAgo.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
}

export function unixtimeToDate(unixTime) {
    const date = new Date(unixTime * 1000);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear().toString();
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export function calculateExchangePercentageChange(yesterday, today) {
    if (today > yesterday) {
        const difference = today - yesterday
        const percentageChange = (difference / yesterday) * 100;
        return { value: Math.abs(Math.round(percentageChange * 100) / 100), sign: 'positive' };
    } else {
        const difference = yesterday - today;
        const percentageChange = (difference / yesterday) * 100;
        return { value: Math.abs(Math.round(percentageChange * 100) / 100), sign: 'negative' };
    }
}