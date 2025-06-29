const express =  require("express");
const {protect} = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  getUserInfo,
  forgotPassword,       
  resetPassword,
  googleLogin       
} = require("../controllers/authControllers");

const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect,getUserInfo);

router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  res.status(200).json({ imageUrl });
});

// Forgot Password + Reset Password
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/google", googleLogin);

module.exports = router;