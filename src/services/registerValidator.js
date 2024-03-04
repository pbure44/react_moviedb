import Joi from "joi";

const registerValidator= Joi.object({
    username: Joi.string().pattern(/^[a-zA-Z]\w{1,19}$/).required().messages({
        'string.pattern.base':'First letter, then letters/digits or "_" min 2 max 20 char'
    }),
    password: Joi.string().pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{4,20}$/).required().messages({
        'string.pattern.base':'min 1 digit, min 1 uppercase, min 1 lowercase, min 1 special character, 4-20 char'
    })
})

export {
    registerValidator
}