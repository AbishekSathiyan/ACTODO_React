import React, { useState } from "react";
import emailjs from "emailjs-com";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_064phx6",
        "template_tlz4xda",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "snTHEuCIgnl90M1Jk"
      )
      .then((response) => {
        console.log("Message sent successfully", response);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form fields
      })
      .catch((error) => {
        console.error("Failed to send message", error);
        setStatus("Failed to send message. Try again!");
      });
  };

  // Internal CSS styles
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f4f4f4",
    },
    card: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      width: "350px",
      textAlign: "center",
    },
    title: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#333",
      marginBottom: "15px",
    },
    input: {
      width: "95%",
      padding: "10px",
      margin: "8px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      outline: "none",
    },
    textarea: {
      width: "95%",
      padding: "10px",
      margin: "8px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      outline: "none",
      resize: "none",
    },
    button: {
      backgroundColor: "#007BFF",
      color: "white",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      width: "100%",
      marginTop: "10px",
      transition: "background 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    statusMessage: {
      fontSize: "14px",
      marginBottom: "10px",
    },
    success: {
      color: "green",
    },
    error: {
      color: "red",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Contact Me</h2>
        {status && (
          <p
            style={{
              ...styles.statusMessage,
              ...(status.includes("Failed") ? styles.error : styles.success),
            }}
          >
            {status}
          </p>
        )}
        <form
          onSubmit={sendEmail}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={styles.textarea}
          ></textarea>
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor =
                styles.buttonHover.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = styles.button.backgroundColor;
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
