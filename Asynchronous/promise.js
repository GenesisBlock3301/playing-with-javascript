const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
//    do stuff
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Meeting',
            location: "Google Meet",
            time: "10:00 PM"
        }
        resolve(meetingDetails)
    } else {
        reject(new Error("Meeting already scheduled.."))
    }
})

const addToCalender = (meetingDetail) => {
    return new Promise((resolve, reject) => {
        const calendar = `${meetingDetail.name} has been scheduled on ${meetingDetail.time}`
        resolve(calendar)
    })
}

// const addToCalender=(meetingDetail)=>{
//
//         const calendar = `${meetingDetail.name} has been scheduled on ${meetingDetail.time}`
//         return Promise.resolve(calendar)
// }

meeting
    .then(addToCalender)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => console.log("Rejected data.."))
console.log("hello world")