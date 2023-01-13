const express = require('express')
const router =express.Router()

const board = require('../board/board.route')
const user = require('../user/user.route')


router.use('/board',board)
router.use('/user',user)


module.exports=router