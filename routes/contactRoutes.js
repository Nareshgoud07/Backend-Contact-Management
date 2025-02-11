const express = require("express");
const { check, validationResult } = require("express-validator");
const Contact = require("../models/Contact");

const router = express.Router();

// ✅ GET all contacts
router.get("/", async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ POST - Create a new contact
router.post(
    "/",
    [
        check("name", "Name is required").not().isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("phone", "Phone number is required").not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { name, email, phone, address } = req.body;
            const newContact = new Contact({ name, email, phone, address });

            await newContact.save();
            res.status(201).json(newContact);
        } catch (error) {
            res.status(500).json({ message: "Server error" });
        }
    }
);

// ✅ GET single contact by ID
router.get("/:id", async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({ message: "Contact not found" });
        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ PUT - Update a contact by ID
router.put("/:id",
    [
        check("name", "Name is required").not().isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("phone", "Phone number is required").not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            console.log("Updating contact with ID:", req.params.id); // Debugging

            const { name, email, phone, address } = req.body;
            const updatedContact = await Contact.findByIdAndUpdate(
                req.params.id,
                { name, email, phone, address },
                { new: true }
            );

            if (!updatedContact) {
                console.log("Contact not found:", req.params.id);
                return res.status(404).json({ message: "Contact not found" });
            }

            res.json(updatedContact);
        } catch (error) {
            console.error("Error updating contact:", error);
            res.status(500).json({ message: "Server error", error: error.message });
        }
    }
);


// ✅ DELETE - Remove a contact by ID
router.delete("/:id", async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) return res.status(404).json({ message: "Contact not found" });

        res.json({ message: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
