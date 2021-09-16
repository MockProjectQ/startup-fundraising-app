import { db, auth, storage } from '../config/firebase';


async function getAllStartUpDetails() {
    let results = []
    let response = await db.collection('start_ups').where("status","==","approved").get();
    response.docs.forEach(async (ele) => {
        let startupData = {...ele.data(), id: ele.id};
        /*let user = await db.collection('user').doc(startupData.userId).get();
        console.log("User ",user.data());*/
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
            results.push(reportedData);
        }
        
    })

    return results;
}

async function getStartUpsForApproval() {
    let results = []
    let response = await db.collection('start_ups').where("status" , "==" , "pending").get();
    response.docs.forEach((ele) => {
        let approvalData = ele.data();
        results.push(approvalData);

    })

    return results;
}

async function approveStartup(data){
    db.collection('start_ups').where("CINNumber","==",data.CINNumber).get().then((snapshot)=>{
        snapshot.forEach((doc)=>{
            doc.ref.update({status:"approved",reports:0});
        });
    });
}

async function rejectStartup(data){
    db.collection('start_ups').where("CINNumber","==",data.CINNumber).get().then((snapshot)=>{
        snapshot.forEach((doc)=>{
            doc.ref.update({status:"rejected"});
        });
    });
}

export { getAllStartUpDetails,
        getReportedStartUps,
        getStartUpsForApproval,
        approveStartup,
        rejectStartup };