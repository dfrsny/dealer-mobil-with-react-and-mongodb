const mongoose = require('mongoose');
const express = require('express');
const Car = require('../cars/car.model');
const router = express.Router();


// Function to calculate admin stats
router.get("/", async (req, res) => {
    try {


        // 4. Trending books statistics: 
        const trendingCarsCount = await Car.aggregate([
            { $match: { trending: true } },  // Match only trending books
            { $count: "trendingCarsCount" }  // Return the count of trending books
        ]);
        
        // If you want just the count as a number, you can extract it like this:
        const trendingCars = trendingCarsCount.length > 0 ? trendingCarsCount[0].trendingCarsCount : 0;

        // 5. Total number of books
        const totalCars = await Car.countDocuments();



        // Result summary
        res.status(200).json({  
            trendingCars,
            totalCars,
         });
      
    } catch (error) {
        console.error("Error fetching admin stats:", error);
        res.status(500).json({ message: "Failed to fetch admin stats" });
    }
})

module.exports = router;