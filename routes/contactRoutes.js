const express = require("express");
const { check, validationResult } = require("express-validator");
const Contact = require("../models/Contact");

const router = express.Router();

// Get all contacts
router.get("/", async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

// Get single contact by ID
router.get("/:id", async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({ msg: "Contact not found" });
        res.json(contact);
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

// Create a contact
router.post(
    "/",
    [
        check("name", "Name is required").not().isEmpty(),
        check("email", "Please include a valid email").isEmail(),
        check("phone", "Phone number is required").not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, phone, address } = req.body;

        try {
            const newContact = new Contact({ name, email, phone, address });
            await newContact.save();
            res.json(newContact);
        } catch (error) {
            res.status(500).send("Server Error");
        }
    }
);

// Update contact
router.put("/:id", async (req, res) => {
    const { name, email, phone, address } = req.body;
    try {
        let contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({ msg: "Contact not found" });

        contact = await Contact.findByIdAndUpdate(req.params.id, { name, email, phone, address }, { new: true });
        res.json(contact);
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

// Delete contact
router.delete("/:id", async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({ msg: "Contact not found" });

        await Contact.findByIdAndDelete(req.params.id);
        res.json({ msg: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

module.exports = router;
