import React from "react";
import "./Contact.css";
import { BiMailSend } from "react-icons/bi";
import { PiPhoneCallFill } from "react-icons/pi";
import { BiArrowFromLeft } from "react-icons/bi";
import { ImInstagram } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "68c55ffe-d598-4393-a2b6-d92616166373");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="Contact">
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>
          Feel free to reach out through contact form or find our
          contactinformation below.Your <br></br>feedback, Questions,and
          suggestion are important to us as we <br></br> strive to provide
          exceptional Service to our university commutnity
          <ul>
            <li>
              {" "}
              <BiMailSend className="icons-to" />
              gihozoismail@gmail.com{" "}
            </li>
            <li>
              <PiPhoneCallFill className="icons-to" />
              +250783227185
            </li>
            <li>
              <ImInstagram className="icons-to"></ImInstagram>
              ismail de great
            </li>
            <li>
              <BsYoutube className="icons-to"></BsYoutube>
              Technological tricks
            </li>
          </ul>
        </p>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <h2>Share your idea here</h2>
          <label> Your name</label>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            required
          />
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label> Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your messsage"
            required
          ></textarea>
          <button type="submit" className="btn22 dark-btn">
            Send now <BiArrowFromLeft />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
