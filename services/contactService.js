const Contact = require("../models/Contact");

const getAllContacts = async () => await Contact.find();
const getContactById = async (id) => await Contact.findById(id);
const createContact = async (data) => await Contact.create(data);
const updateContact = async (id, data) => await Contact.findByIdAndUpdate(id, data, { new: true });
const deleteContact = async (id) => await Contact.findByIdAndDelete(id);

module.exports = { getAllContacts, getContactById, createContact, updateContact, deleteContact };
