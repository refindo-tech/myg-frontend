export const formattedDate = (date)=>{
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('id-ID', options);
}
export const formattedDateAndDay = (dateStart, dateFinish)=>{
    // const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const indexDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const indexMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const getDay = new Date(dateStart).getDay()
    const getDate = new Date(dateStart).getDate()
    const getMonth = new Date(dateStart).getMonth()
    const getYear = new Date(dateStart).getFullYear()
    const day = indexDays[getDay]
    const month = indexMonths[getMonth]
    return `${day}, ${month} ${getDate}, ${getYear} `;
}
export const formattedTime = (dateStart, dateFinish)=>{
    // const options = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: false };
    // const startDate = new Date(dateStart).toLocaleTimeString('en-GB', options);
    // const finishDate = new Date(dateFinish).toLocaleTimeString('en-GB', options);
    const addOffset = (date) => {
        // const offset = 7; // WIB offset dari UTC adalah +7 jam
        const newDate = new Date(date);
        newDate.setHours(newDate.getHours());
        return newDate;
    };
    const formatTime = (date) => {
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const startDate = addOffset(dateStart);
    const finishDate = addOffset(dateFinish);

    const formattedStart = formatTime(startDate);
    const formattedFinish = formatTime(finishDate);

    return `${formattedStart} - ${formattedFinish} WIB`;
    // return `${startDate} - ${finishDate} WIB`;
    // const hoursStart = new Date(startDate).getHours().toString().padStart(2, '0');
    // const hoursFinish = new Date(finishDate).getHours().toString().padStart(2, '0');
    // const minuteStart = new Date(startDate).getMinutes().toString().padStart(2, '0');
    // const minuteFinish = new Date(finishDate).getMinutes().toString().padStart(2, '0');
    // return `${hoursStart}:${minuteStart} - ${hoursFinish}:${minuteFinish} WIB`;
}
