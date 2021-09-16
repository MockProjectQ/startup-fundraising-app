import {isEmpty, isURL, isEmail, isLength, isInt, matches} from 'validator';


export default function validateSignupForm(formValues) {
    const errors = {};

    // Name validation
    if('fullname' in formValues){
        if(isEmpty(formValues.fullname)){
            errors['fullname'] = "Must not be empty"
        }
    }

    // Email validation
    if('email' in formValues){
        if(isEmpty(formValues.email)){
            errors['email'] = "Must not be empty"
        }
        else if (!isEmail(formValues.email)){
            errors['email'] = "Must be a valid email"
        }
    }

    // password
    if('password' in formValues) {
        if(isEmpty(formValues.password)){
            errors['password'] = "Must not be empty"
        }
        else if(!isLength(formValues.password, {min: 6})){
            errors['password'] = "Password should be minimum 6 characters"
        }
    }

    // confirmPassword
    if('confirmPassword' in formValues) {
        if(isEmpty(formValues.confirmPassword)){
            errors['confirmPassword'] = "Must not be empty"
        }
        else if(formValues.confirmPassword!==formValues.password){
            errors['confirmPassword'] = "Passwords don't match"
        }
    }

    // company Name
    if('companyName' in formValues){
        if(isEmpty(formValues.companyName)){
            errors['companyName'] = "Must not be empty"
        }
    }

    // CIN Number
    if('CINNumber' in formValues){
        if(isEmpty(formValues.CINNumber)){
            errors['CINNumber'] = "Must not be empty"
        }
        else if(!matches((formValues.CINNumber),/^\w\d{5}\w{2}\d{4}\w{3}\d{6}$/)){
            errors['CINNumber'] = "Invalid CIN Number"
        }
    }
    
    // URL validation
    if('websiteUrl' in formValues){
        if(!isURL(formValues.websiteUrl)){
            errors['websiteUrl'] = "Invalid URL"
        }
        if(formValues.websiteUrl===''){
            delete errors['websiteUrl']
        }
    }

    // Company Email validation
    if('companyEmail' in formValues){
        if(isEmpty(formValues.companyEmail)){
            errors['companyEmail'] = "Must not be empty"
        }
        else if (!isEmail(formValues.companyEmail)){
            errors['companyEmail'] = "Must be a valid email"
        }
    }
    
    // company Phone validation
    if('companyPhone' in formValues){
        if(isEmpty(formValues.companyPhone)){
            errors['companyPhone'] = "Must not be empty"
        }
        else if (!isLength(formValues.companyPhone, {min: 10, max: 10  })){
            errors['companyPhone'] = "Must be exactly 10 digits"
        }
    }

    // company address
    if('companyAddress' in formValues){
        if(isEmpty(formValues.companyAddress)){
            errors['companyAddress'] = "Must not be empty"
        }
    }
    
    // company description
    if('description' in formValues){
        if(isEmpty(formValues.description)){
            errors['description'] = "Must not be empty"
        }
    }
    
    // investment Required
    if('investmentRequired' in formValues){
        if(isEmpty(formValues.investmentRequired.toString())){
            errors['investmentRequired'] = "Must not be empty"
        }
    }
    
    // expected ROI
    if('expectedROI' in formValues){
        if(isEmpty(formValues.expectedROI.toString())){
            errors['expectedROI'] = "Must not be empty"
        }
        else if((formValues.expectedROI < 0 || formValues.expectedROI > 100)){
            errors['expectedROI'] = "Must be between 0 and 100"
        }
    }


    if(Object.keys(errors).length) return {success:false, errors: errors}
    return {success: true, errors:{}}
}
