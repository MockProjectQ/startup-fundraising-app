import { db, auth, storage } from '../config/firebase';


async function getUserById(id) {
    try {
        const response = await db.collection('user').doc(id).get();
        return response.data();
    } catch (error) {
        console.log(error);        
    }
}

async function getUserByEmail(email) {
    try {
        const response = await db.collection('user').where("email", "==", email).get();
        return response.docs[0].data();
    } catch (error) {
        console.log(error);        
    }
}

export { getUserById, getUserByEmail };