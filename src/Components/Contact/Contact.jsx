import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5759d7fc-28f1-473a-a904-ab8d5f981280");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      className="w-full flex items-center px-32 gap-10 justify-around  p-10 max-md:flex-col-reverse max-md:gap-20 max-md:px-10 "
      id=""
    >
      <div className="flex flex-col max-w-[500px] ">
        <div className=" flex  flex-col items-start max-md:items-center justify-center">
          <h3 className="flex items-center text-2xl max-md:text-md max-md:whitespace-nowrap gap-2 font-bold">
            Send us a message<img src={msg_icon} className="w-10 m-2 max-md:hidden" alt=""></img>
          </h3>
          <p className="text-left text-lg max-md:text-sm max-md:text-center">
            Feel free to reach out through contact form. Your feedback,
            questions and suggestions are important to us.
          </p>
        </div>
        <ul className="mt-5 flex flex-col justify-center text-xl font-semibold items-start gap-3 max-md:items-center">
          <li className="flex items-center gap-4 max-md:text-sm">
            <img src={mail_icon} className="w-7" alt=""></img>
            Contact@StartConnectHub.in
          </li>
          <li className="flex items-center gap-4 max-md:text-sm">
            <img src={phone_icon} className="w-7" alt=""></img>+91 1234567890
          </li>
          <li className="flex items-center gap-4 max-md:text-sm">
            <img src={location_icon} className="w-7" alt=""></img>Address xyz
          </li>
        </ul>
      </div>
	
      <div className=" max-w-[500px] ">
        <form
          onSubmit={onSubmit}
          className="flex justify-center flex-col border shadow-xl p-5 gap-3  rounded-lg"
        >
          <div className="">
            <label className="font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 focus:outline-none border-none shadow-md"
              required
            />
          </div>

          <div className="">
            <label className="font-semibold">Phone number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone"
              className="p-2 focus:outline-none border-none shadow-md"
              required
            ></input>
          </div>

          <div className=" flex flex-col">
            <label className="font-semibold">Write your message here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              className="p-2 focus:outline-none border-none shadow-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className=" w-32 p-2 font-semibold flex bg-blue-500 text-white"
          >
            Submit <img src={white_arrow} className="w-10 ml-2"></img>
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
