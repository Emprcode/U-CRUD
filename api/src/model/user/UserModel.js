import UserSchema from "./UserSchema.js"

export const postUser = (userObj) => {
    return UserSchema(userObj).save()
}

export const getUser = () => {
    return UserSchema.find()
}

export const updateUser = (filter, updateObj) => {
    return UserSchema.findByIdAndUpdate(filter, updateObj, {new: true})

}

export const deleteUser = (filter) => {
    return UserSchema.findOneAndDelete(filter)
}