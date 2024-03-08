let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', "Aug", 'Sep', 'Oct', 'Nov', 'Dec']
let days = ['Sunday', 'Monday', "Tuesday", 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

export const getDate= (timeStamp)=>{
    let date = new Date(timeStamp)
    return `${date.getDate()} ${month[date.getMonth()]}`
}

export const getFullDay = (timeStamp) => {
    let date = new Date(timeStamp)

    return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
}