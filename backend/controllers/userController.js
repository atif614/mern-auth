import asyncHandler from 'express-async-handler'

//  Auth user/set token
//  route POST/api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth User' })
})

//  Register a new user
//  route POST  /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Register User' })
})

//  Logout user/set token
//  route POST/api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Logout User' })
})

//  Get user profile
//  route  GET/api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: ' User Profie' })
})

//  updste user profile
//  route  PUT/api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'update User Profie' })
})
export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}