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
        return { ...response.docs[0].data(), id: response.docs[0].id };
    } catch (error) {
        console.log(error);
    }
}

async function addUserDetails(formValues) {
    try {
        console.log(formValues)
        const userSignup = await auth.createUserWithEmailAndPassword(formValues.email, formValues.password)
        if (userSignup.user) {
            const response = await db.collection('user').add({
                name: formValues.fullname,
                email: formValues.email,
                role: 'user'
            });
            const userId = response.id


            if (userId) {
                if (formValues.companyLogo.type === "image/jpeg" &&
                    formValues.pitchDeck.type === "application/pdf") {
                    const logoFileName = `${formValues.companyName}-logo-${userId}-${Math.random()}.jpeg`;
                    const pitchDeckName = `${formValues.companyName}-pitchdeck-${userId}-${Math.random()}.pdf`;

                    const uploadLogoTask = await storage.ref(`logo/${logoFileName}`).put(formValues.companyLogo)
                    const uploadPitchDeckTask = await storage.ref(`pitchDeck/${pitchDeckName}`).put(formValues.pitchDeck)

                    if (uploadLogoTask.state === "success" && uploadPitchDeckTask.state === "success") {
                        const logoUrl = await storage
                            .ref(`logo/${logoFileName}`)
                            .getDownloadURL()

                        const pitchDeckUrl = await storage
                            .ref(`pitchDeck/${pitchDeckName}`)
                            .getDownloadURL()


                        const response = await db.collection("start_ups").add({
                            CINNumber: formValues.CINNumber,
                            companyAddress: formValues.companyAddress,
                            companyEmail: formValues.companyEmail,
                            companyLogo: logoUrl,
                            companyName: formValues.companyName,
                            companyPhone: formValues.companyPhone,
                            companyWebsite: formValues.companyWebsite ? formValues.companyWebsite : "",
                            description: formValues.description,
                            expectedROI: formValues.expectedROI,
                            investmentRequired: formValues.investmentRequired,
                            pitchDeck: pitchDeckUrl,
                            reports: 0,
                            status: "pending",
                            tags: formValues.tags ? formValues.tags : [],
                            userId: userId
                        })

                        if (response.id) {
                            console.log(response.id)
                            return { success: true, response: response.id }
                        }
                    }

                }
            }
        }
    } catch (error) {
        console.log(error)
        return { success: false, error: error }
    }
}

async function updateUserDetails(id, formValues) {
    try {

        const response = await db.collection('start_ups').doc(id).get();
        const responseData = response.data()

        if (responseData) {
            if (formValues.companyLogo.type === "image/jpeg") {
                const logoFileRef = storage.refFromURL(responseData.companyLogo);
                console.log(responseData.companyLogo)
                console.log(logoFileRef.fullPath)
                await storage.ref(logoFileRef.fullPath).delete()
                    .then(async () => {
                        const logoFileName = `${formValues.companyName}-logo-${formValues.userId}-${Math.random()}.jpeg`;
                        const uploadLogoTask = await storage.ref(`logo/${logoFileName}`).put(formValues.companyLogo)

                        if (uploadLogoTask.state === "success") {
                            formValues.companyLogo = await storage
                                .ref(`logo/${logoFileName}`)
                                .getDownloadURL()
                        }
                    })
                    .catch((error) => error)

            }
            if (formValues.pitchDeck.type === "application/pdf") {
                const pitchDeckRef = storage.refFromURL(responseData.pitchDeck);
                await storage.ref(pitchDeckRef.fullPath).delete()
                    .then(async () => {
                        const pitchDeckName = `${formValues.companyName}-pitchdeck-${formValues.userId}-${Math.random()}.pdf`;
                        const uploadPitchDeckTask = await storage.ref(`pitchDeck/${pitchDeckName}`).put(formValues.pitchDeck)

                        if (uploadPitchDeckTask.state === "success") {
                            formValues.pitchDeck = await storage
                                .ref(`pitchDeck/${pitchDeckName}`)
                                .getDownloadURL()
                        }
                    })
                    .catch((error) => error)


            }

            const updateResponse = await db.collection("start_ups").doc(id).update({
                CINNumber: formValues.CINNumber,
                companyAddress: formValues.companyAddress,
                companyEmail: formValues.companyEmail,
                companyLogo: formValues.companyLogo,
                companyName: formValues.companyName,
                companyPhone: formValues.companyPhone,
                companyWebsite: formValues.companyWebsite ? formValues.companyWebsite : "",
                description: formValues.description,
                expectedROI: formValues.expectedROI,
                investmentRequired: formValues.investmentRequired,
                pitchDeck: formValues.pitchDeck,
                reports: 0,
                status: "pending",
                tags: formValues.tags ? formValues.tags : [],
                userId: formValues.userId
            })

            if (response.id) {
                console.log(response.id)
                return { success: true, response: response.id }
            }
            else {
                console.log('error')
            }
        }


    } catch (error) {
        console.log(error)
        return { success: false, error: error }
    }
}

export { getUserById, getUserByEmail, addUserDetails, updateUserDetails };