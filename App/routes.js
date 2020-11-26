const { getAllContacts, getContactById, createContact, updateContact, deleteContact } = require('./controller')

const route = require('express').Router()

route.get('/', getAllContacts)
route.post('/', createContact)
route.get('/:id', getContactById)
route.put('/:id', updateContact)
route.delete('/:id', deleteContact)

module.exports = route