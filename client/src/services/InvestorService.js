import { db, auth, storage } from '../config/firebase';


async function getInvestors(id) {
    try {
        const response = await db.collection("start_ups").doc(id).collection("investors").get();
        
        const responseArray = []
        response.forEach((doc)=> 
            responseArray.push({...doc.data(), id: doc.id})
        )
        return responseArray;
    } catch (error) {
        console.log(error);        
    }
}

async function addInvestor(id, value) {
    try {
        const response = await db.collection("start_ups").doc(id).collection("investors").add({
            ...value,
            name: value.fullname
        });
        console.log("hello")
        console.log(response)
    } catch (error) {
        console.log(error);        
    }
}

async function reportStartup(id) {
    try {
        const startupResponse = await db.collection("start_ups").doc(id).get()
        const response = await db.collection("start_ups").doc(id).update({
            reports: startupResponse.data().reports? (startupResponse.data().reports + 1) : 1 
        })
    } catch (error) {
        console.log(error)
    }
}

export { getInvestors, addInvestor, reportStartup };