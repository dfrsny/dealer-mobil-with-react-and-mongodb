const mongoose = require('mongoose');
const User = require('./src/users/user.model'); //
const bcrypt = require('bcrypt');
require('dotenv').config(); // Load .env file

async function main() {
    // Koneksi ke MongoDB
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connected.");

    // Membuat user admin dengan password terenkripsi
    const hashedPassword = await bcrypt.hash("12345678", 10);
    const admin = new User({
        username: "adminGarda",
        password: hashedPassword,
        role: "admin"
    });
    await admin.save();
    console.log("Admin user created successfully.");

    // Tutup koneksi database
    await mongoose.disconnect();
    console.log("MongoDB disconnected.");
}

// Panggil fungsi main
main().catch(err => console.error("Error creating admin user:", err));
