class Contacts {
    constructor() {
        this.contacts = []
    }

    getAllContacts =() => this.contacts

    getContactById = id => {
        console.log(`the ID is ${id}`)
        const newContact = this.contacts.find(contact => contact.id === id)
        return newContact
    }

    createContact =(contact) => {
        contact.id = this.contacts.length + 1
        this.contacts.push(contact)
        return contact
    }

    updateContact = (id, changedItems) => {
        const index = this.contacts.findIndex(item => item.id === id)

        this.contacts[index].name = changedItems.name || this.contacts[index].name
        this.contacts[index].email = changedItems.email || this.contacts[index].email
        this.contacts[index].phone = changedItems.phone || this.contacts[index].phone

        return this.contacts[index]
    }

    deleteContact = (id) => {
        // const index = this.contacts.findIndex(item => item.id === id)
        // const deletedContact = this.contacts[index]

        const updatedData = this.contacts.filter(contact => contact.id !== id)
        return this.contacts = updatedData
    }
}

module.exports = new Contacts