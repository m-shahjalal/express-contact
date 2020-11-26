const { json } = require('express')
const { updateContact, deleteContact, getAllContacts, getContactById, createContact } = require('./contacts')

exports.getAllContacts = (req, res) => {
    res.send(getAllContacts())
}
exports.getContactById = (req, res) => {
    const { id } = req.params
    const Id = parseInt(id)
    res.json(getContactById(Id))
}

exports.createContact = (req, res) => {
    const { name, email, phone } = req.body
    res.send(createContact({ name, email, phone }))
}

exports.updateContact = (req, res) => {
    const { name, email, phone } = req.body
    const { id } = req.params
    const Id = parseInt(id)
    console.log(`the post id is ${Id} and post changed item is [${name, email, phone}]`)
    res.json(updateContact(Id, {name, email, phone}))
}

exports.deleteContact = (req, res) => {
    const { id } = req.params
    const Id = parseInt(id)
    console.log(`this is the delete id ${Id}`)
    res.json(deleteContact(Id))
}