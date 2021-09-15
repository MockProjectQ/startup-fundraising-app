import { db, storage } from '../config/firebase';
import firebase from 'firebase'

async function addFinancialStatement(id, props) {
    try {
        const { year, statementName, file } = props

        if (year && statementName && file) {

            if (file.type === "application/pdf") {

                const fileName = `${statementName}-${year}-${id}-${Math.random()}.pdf`;

                const uploadTask = await storage.ref(`financialStatements/${fileName}`).put(file)

                if (uploadTask.state === "success") {
                    const fileUrl = await storage
                        .ref(`financialStatements/${fileName}`)
                        .getDownloadURL()

                    
                    const startupRef = db.collection("start_ups").doc(id).collection("financialStatements");

                    const docInDB = await startupRef.where("year", "==", year).get()
                    let response;

                    if (docInDB.empty) {
                        response = startupRef.add({
                            year: year,
                            files: [
                                {
                                    name: statementName,
                                    fileUrl: fileUrl
                                }
                            ]
                        });
                    }
                    else {
                        response = docInDB.docs[0].ref.update({
                            files: firebase.firestore.FieldValue.arrayUnion({
                                name: statementName,
                                fileUrl: fileUrl
                            })
                        })
                    }

                }

            }
        }
        else {
            throw Error("Fields can't be empty")
        }
    } catch (error) {
        console.log(error);
    }
}

export default addFinancialStatement
