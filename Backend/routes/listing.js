const router = require("express").Router();
// Add New listing
router.post("/", (req, res) => {
    res.send("Add New listing");
    });

// Get All listings
router.get("/", async (req, res) => {
    try {
    const listings = await Listing.find();
    res.json(listings);
    } catch (error) {
    res.json({ message: error });
    }
    });

// Single listing
router.get("/:listingId", async (req, res) => {
try {
const listing = await Listing.findById(req.params.listingId);
res.json(listing);
} catch (error) {
res.json({ message: error });
}
});  

// Update listing
router.put("/:listingId", async (req, res) => {
    try {
    const listing = {
    title: req.body.title,
    price: req.body.price,
    locality: req.body.locality,
    details: req.body.details
    };
    const updatedListing = await Listing.findByIdAndUpdate(
    { _id: req.params.listingId },
    listing
    );
    res.json(updatedListing);
    } catch (error) {
    res.json({ message: error });
    }
    });
    
// Delete listing
router.delete("/:listingId", async (req, res) => {
    try {
    const removeListing = await
    Listing.findByIdAndDelete(req.params.listingId);
    res.json(removeListing);
    } catch (error) {
    res.json({ message: error });
    }
    });   
module.exports = router;