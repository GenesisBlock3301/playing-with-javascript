const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
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


async function myMeeting() {
    try {
        const meetingDetail = await meeting;
        const addToCalendar = await addToCalender(meetingDetail)
        console.log(addToCalendar)
    } catch (e) {
        console.log(e)
    }
}

myMeeting()
console.log("Hello world")
myMeeting()
console.log("Hello world")
