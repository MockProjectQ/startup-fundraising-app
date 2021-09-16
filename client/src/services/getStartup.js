import {db} from '../config/firebase';

async function getStartupByUser(id) {
    try {
        const response = await db.collection('start_ups').where("userId","==",id).get();
        return {...response.docs[0].data(), id: response.docs[0].id};
    } catch (error) {
        console.log(error);        
    }
}

async function getStartupById(id) {
    try {
        const response = await db.collection('start_ups').doc(id).get();
        return {...response.data(), id: response.id};
    } catch (error) {
        console.log(error);        
    }
}

export {getStartupByUser, getStartupById}
