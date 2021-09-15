import {db} from '../config/firebase';

async function getStartupByUser(id) {
    try {
        const response = await db.collection('start_ups').where("userId","==",id).get();
        return response.docs[0].data();
    } catch (error) {
        console.log(error);        
    }
}

export default getStartupByUser
