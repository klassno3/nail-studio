const Booking = require("../Model/BookingModel");
const nodemailer = require('nodemailer');

exports.createBooking = async (req, res) => {
  try {
    const { fullName, PhoneNumber, email, serviceType } = req.body;

    if (!fullName || typeof fullName !== "string" || !PhoneNumber || typeof PhoneNumber !== "string" || !email || typeof email !== "string" || !serviceType || typeof serviceType !== "string") {
      return res.status(400).json({
        status: "error",
        message: "Invalid input data",
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        status: "error",
        message: "Invalid email format",
      });
    }

    const booking = new Booking({
      name: fullName,
      phone: PhoneNumber,
      email,
      serviceType,
    });

    try {
      const saveResult = await booking.save();

      if (!saveResult) {
        res.status(500).json({
          status: "error",
          message: "Failed to save booking",
        });
        return;
      }
    } catch (error) {
      console.error("Error saving booking:", error);
      res.status(500).json({
        status: "error",
        message: "An error occurred while saving the booking. Please try again later.",
      });
      return;
    }

    try {
      await sendEmail({
        to: email,
        subject: "Booking Confirmation",
        text: `Hello ${fullName}, your booking for ${serviceType} has been confirmed.`
      });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({
        status: "error",
        message: "Failed to send confirmation email",
      });
      return;
    }

    res.status(201).json({
        status: "success",
        message: "Booking created successfully",
        data: {
          name: booking.name,
          serviceType: booking.serviceType,
        },
      });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while creating the booking. Please try again later.",
    });
  }
};
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function validatePhoneNumber(phoneNumber) {
    const re = /^\+?[1-9]\d{1,14}$/; 
    return re.test(String(phoneNumber));
  }
  
async function sendEmail({ to, subject, text }) {
    let transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USERNAME, 
        pass: process.env.EMAIL_PASSWORD, 
      },
    });
  
    let mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: to,
      subject: subject,
      text: text,
    };
  
    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
      throw error; 
    }
  }