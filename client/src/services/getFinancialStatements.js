import {db} from '../config/firebase';

async function getFinancialData(id) {
    try {
        const response = await db.collection("start_ups").doc(id).collection("financialStatements").get();
        
        const responseArray = []
        response.forEach((doc)=> 
            responseArray.push({...doc.data(), id: doc.id})
        )
        return responseArray;
    } catch (error) {
        console.log(error);        
    }
}

export default getFinancialData
