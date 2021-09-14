import {db} from '../config/firebase';

async function getStartupById(id) {
    try {
        // Sign 
        // Fires
        const response = await db.collection('start_ups').doc(id).get();
        return response.data();
    } catch (error) {
        console.log(error);        
    }
}

export default getStartupById
