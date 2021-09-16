import {isEmpty, isAlpha, isEmail, isLength, isInt} from 'validator';


export default function validateInvestorForm(formValues) {
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
    
    // Phone validation
    if('phone' in formValues){
        if(isEmpty(formValues.phone)){
            errors['phone'] = "Must not be empty"
        }
        else if (!isLength(formValues.phone, {min: 10, max: 10  })){
            errors['phone'] = "Must be exactly 10 digits"
        }
    }

    // minimum Investment validation
    if('minAmount' in formValues){
        if(!isInt(formValues.minAmount.toString(),{gt: 0})){
            errors['minAmount'] = "Must be greater than 0"
        }
    }
    
    // maximum Investment validation
    if('maxAmount' in formValues){
        if(!isInt(formValues.maxAmount.toString(),{gt: formValues.minAmount})){
            errors['maxAmount'] = "Must be greater than minimum investment"
        }
    }


    if(Object.keys(errors).length) return {success:false, errors: errors}
    return {success: true, errors:{}}
}
