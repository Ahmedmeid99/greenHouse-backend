const express = require('express') // to create server & routes
const auth = require('../middleware/auth')
const GreenHouse = require('../models/greenhouse')

const router = new express.Router()
////////////////////////////////////
// add task
// get tasks
// delete task
// delete tasks
// update task (update all properties)
// update task (update completed)
////////////////////////////////////

// add task
router.post('/greenHouses', auth, async (req, res) => {

    try {
        const greenHouse = new GreenHouse({ ...req.body, owner: req.user._id })
        greenHouse.save()
        res.status(200).json({ greenHouse, status: 'ok' })
    } catch (e) {
        res.status(401).json({ error: e.message })
    }
})
////////////////////////////////
// get greenHouses
router.get('/greenHouses', auth, async (req, res) => {

    try {
        const greenHouses = await GreenHouse.find({ owner: req.user._id })
        res.status(200).send(greenHouses)
    } catch (e) {
        res.status(401).json({ error: e.message })
    }
})

// delete greenHouse
router.delete('/greenHouses/:id', auth, async (req, res) => {
    try {
        const id = req.params.id
        const greenHouse = await GreenHouse.findOneAndDelete({ owner: req.user._id, _id: id })
        res.status(200).json({ greenHouse, status: 'ok' })
    } catch (e) {
        res.status(401).json({ error: e.message })
    }
})
// delete greenHouses
// router.delete('/greenHouses', auth, async (req, res) => {
//     try {
//         await GreenHouse.deleteMany({ owner: req.user._id })
//         res.status(200).json({ status: 'ok' })
//     } catch (e) {
//         res.status(401).json({ error: e.message })
//     }
// })
// update greenHouse (update all properties)
router.put('/greenHouses/:id', auth, async (req, res) => {
    try {
        const id = req.params.id
        const greenHouse = await GreenHouse.findByIdAndUpdate({ owner: req.user._id, _id: id }, { ...req.body })
        res.status(200).json({ greenHouse, status: 'ok' })
    } catch (e) {
        res.status(401).json({ error: e.message })
    }
})
// update greenHouses.notes by add or remove or delete one

module.exports = router