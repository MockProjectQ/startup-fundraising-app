import React from 'react'
import {isEmpty, isAlpha, isEmail, isLength, isInt} from 'validator';


export default function validateInvestorForm(formValues) {
    const errors = [];

    // Name validation
    if(isEmpty(formValues.fullname)){
        errors.push({fullname: "Must not be empty"})
    }
    else if(!isAlpha(formValues.fullname)){
        errors.push({fullname: "Must contain only alphabets"})
    }

    // Email validation
    if(isEmpty(formValues.email)){
        errors.push({email: "Must not be empty"})
    }
    else if (!isEmail(formValues.email)){
        errors.push({email: "Must be a valid email"})
    }
    
    // Phone validation
    if(isEmpty(formValues.phone)){
        errors.push({phone: "Must not be empty"})
    }
    else if (!isLength(formValues.phone, {min: 10, max: 10  })){
        errors.push({phone: "Must be exactly 10 digits"})
    }

    // minimum Investment validation
    if(!isInt(formValues.minAmount.toString(),{gt: 0})){
        errors.push({minAmount: "Must be greater than 0"})
    }
    
    // maximum Investment validation
    if(!isInt(formValues.maxAmount.toString(),{gt: formValues.minAmount})){
        errors.push({maxAmount: "Must be greater than minimum investment"})
    }


    if(errors.length) return {success:false, errors: errors}
    return {success: true}
}
