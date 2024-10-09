import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: [true, "First name is required"],
			trim: true,
			minlength: [2, "First name must be at least 2 characters long"],
		},
		lastName: {
			type: String,
			required: [true, "Last name is required"],
			trim: true,
			minlength: [2, "Last name must be at least 2 characters long"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
			lowercase: true,
			validate: {
				validator: function (v) {
					return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
				},
				message: "Please provide a valid email address",
			},
		},
		identityType: {
			type: String,
			enum: ["CNIC", "NICOP", "POC"],
			required: [true, "Identity type is required"],
		},
		identityNum: {
			type: String,
			required: [true, "Identity number is required"],
			unique: true,
		},
		membershipNum: {
			type: String,
			unique: true,
			sparse: true, // Allows null/undefined values to be ignored in uniqueness checks
		},
		phone: {
			type: String,
			required: [true, "Phone number is required"],
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: [8, "Password must be at least 8 characters long"],
			select: false, // Prevents password from being returned in queries
		},
		role: {
			type: String,
			enum: ["admin", "user"],
			default: "user",
		},
	},
	{
		timestamps: true,
	}
);

// Pre-save middleware to hash password before saving the user
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next(); // Only hash if password is new/changed
	this.password = await bcrypt.hash(this.password, 12); // 12 is the salt rounds
	next();
});

// Instance method to compare entered password with hashed password in DB
userSchema.methods.correctPassword = async function (
	candidatePassword,
	userPassword
) {
	return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

export default User;
