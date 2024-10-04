import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a name."],
        },
        designation: {
            type: String,
            required: [true, "Please provide a designation."],
        },
        extn: {
            type: String,
            required: [true, "Please provide an extension number."],
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active",
        },
    },
    {
        timestamps: true,
    }
);

const Team = mongoose.model("Team", teamSchema);

export default Team;
