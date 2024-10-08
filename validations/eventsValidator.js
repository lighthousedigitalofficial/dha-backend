import { eventsValidation } from "../validation/eventsValidation.js"; // Adjust the import path if needed
import Events from "../models/eventsModel.js";

export const createEvents = async (req, res) => {
    try {
        // Validate incoming request data
        const { error } = eventsValidation.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { title, slug, description, images } = req.body;

        // Create the event
        const newEvent = await Events.create({
            title,
            slug,
            description,
            images,
        });

        res.status(201).json({
            message: "Event created successfully.",
            event: newEvent,
        });
    } catch (error) {
        console.error("Error creating event:", error);
        res.status(500).json({ message: "Error creating event." });
    }
};
