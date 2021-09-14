import {db} from '../config/firebase';

async function getUserById(id) {
    try {
        const response = await db.collection('user').doc(id).get();
        return response.data();
    } catch (error) {
        console.log(error);        
    }
}

export default getUserById
