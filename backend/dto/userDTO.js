

const UserDTO = class {
    constructor(userModel) {
        this.id = userModel._id,
        this.name = userModel.name,
        this.phone = userModel.phone,
        this.email = userModel.email
    }
}

module.exports = UserDTO;