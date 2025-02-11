const contactService = require("../services/contactService");
const { successResponse, errorResponse } = require("../utils/responseHandler");

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.getAllContacts();
    successResponse(res, 200, "Contacts retrieved successfully", contacts);
  } catch (error) {
    errorResponse(res, 500, error.message);
  }
};

exports.getContactById = async (req, res) => {
  try {
    const contact = await contactService.getContactById(req.params.id);
    if (!contact) return errorResponse(res, 404, "Contact not found");
    successResponse(res, 200, "Contact retrieved successfully", contact);
  } catch (error) {
    errorResponse(res, 500, error.message);
  }
};

exports.createContact = async (req, res) => {
  try {
    const contact = await contactService.createContact(req.body);
    successResponse(res, 201, "Contact created successfully", contact);
  } catch (error) {
    errorResponse(res, 400, error.message);
  }
};

exports.updateContact = async (req, res) => {
  try {
    const contact = await contactService.updateContact(req.params.id, req.body);
    if (!contact) return errorResponse(res, 404, "Contact not found");
    successResponse(res, 200, "Contact updated successfully", contact);
  } catch (error) {
    errorResponse(res, 400, error.message);
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const contact = await contactService.deleteContact(req.params.id);
    if (!contact) return errorResponse(res, 404, "Contact not found");
    successResponse(res, 204, "Contact deleted successfully");
  } catch (error) {
    errorResponse(res, 500, error.message);
  }
};
