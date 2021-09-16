import { db, auth, storage } from '../config/firebase';

async function approveStartupWithId(id){
    db.collection('start_ups').doc(id).update({status:"approved",reports:0});
}

async function rejectStartupWithId(id){
    db.collection('start_ups').doc(id).update({status:"rejected"});
}

export { approveStartupWithId, rejectStartupWithId };