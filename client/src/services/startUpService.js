import { db, auth, storage } from '../config/firebase';


async function getAllStartUpDetails() {
    let results = []
    let response = await db.collection('start_ups').where("status","==","approved").get();
    response.docs.forEach(async (ele) => {
        let startupData = {...ele.data(), id: ele.id};
        results.push(startupData);
    })

    return results;
}


async function getReportedStartUps() {
    let results = []
    let response = await db.collection('start_ups').where("reports" , ">" , 0).get();

    console.log(response)
    response.docs.forEach((ele) => {

        let reportedData = ele.data();
        if(reportedData.status === "approved"){
            results.push({...reportedData,id:ele.id});
        }
        
    })

    return results;
}

async function getStartUpsForApproval() {
    let results = []
    let response = await db.collection('start_ups').where("status" , "==" , "pending").get();
    response.docs.forEach((ele) => {
        let approvalData = ele.data();
        results.push({...approvalData, id : ele.id});

    })

    return results;
}

async function approveStartup(data){
    db.collection('start_ups').doc(data.id).update({status:"approved",reports:0});
}

async function rejectStartup(data){
    db.collection('start_ups').doc(data.id).update({status:"rejected"});
    
}

export { getAllStartUpDetails,
        getReportedStartUps,
        getStartUpsForApproval,
        approveStartup,
        rejectStartup };