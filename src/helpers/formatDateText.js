const formatDateText = (i) => {
    const date = new Date(i)
    const tanggal = date.getDate()
    const month = date.toLocaleDateString()
    const year = date.getFullYear()
    return `${tanggal} ${month} ${year}`
}
export default formatDateText