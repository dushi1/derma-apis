
const age = (date: string) => {
    const today = new Date()
    const [day, month, year]: any = date.split('-')
    var age = today.getFullYear() - parseInt(year)
    const diff = today.getMonth() - parseInt(month)
    if (diff < 0 || (diff === 0 && today.getDate() < parseInt(day))) {
        age--;
    }
    return age
}

console.log(age('21-02-1996'))
