const saltRounds = 10
export const hashPassword = (password) => {
    const genSalt = bcrypt.genSaltSync(saltRounds)
    return bcrypt.hashSync(password, genSalt)
}