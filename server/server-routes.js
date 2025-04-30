const router = require('express').Router()
const todosRouter = require('./routes/todo-routes.js')
const usersRouter = require('./routes/users-routes.js')
const teamsRouter = require('./routes/teams-routes.js')
// const groupsRouter = require('./routes/groups-routes.js')

router.use('/todos', todosRouter)
router.use('/users', usersRouter)
router.use('/teams', teamsRouter)
// router.use('/groups', groupsRouter)

exports.module = router
