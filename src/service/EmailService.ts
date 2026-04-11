// run on Node, not in the browser
import express from "express";
import * as sgMail from "@sendgrid/mail";

const router = express.Router();
// sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

router.post("/send", async (req, res) => {
  const { from, subject, text } = req.body;
  try {
    await sgMail.send({
      to: "sahandhanujaya18@gmail.com",
      from,
      subject,
      text,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("SendGrid error", err);
    res.status(500).json({ error: "failed to send" });
  }
});

export default router;