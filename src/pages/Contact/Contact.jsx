import { React, useState, useEffect } from "react";
import "./Contact.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { getTokenStorage } from "../../Storage/UserStorage";
import { postNewMessageApi } from "../../service/MessageService";

function Contact() {
  const location = useLocation();
  const navigate = useNavigate();
  const [receiverName, setReceiverName] = useState(location?.state?.recipent);
  const [topic, setTopic] = useState();
  const [content, setContent] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await postNewMessageApi({ receiverName, topic, content });
    if (data.ok) navigate("/mail");
  };

  useEffect(() => {
    if (!getTokenStorage()) navigate("/login");
  }, []);

  return (
    <div className="contact-wrapper soft-edges old-paper-background">
      <h1>New Message:</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="topic-wrapper">
          <label htmlFor="receiverName" className="topic-input-label">
            <span>Recipient:&nbsp;</span>
          </label>
          <input
            type="text"
            id="receiverName"
            className="topic-input"
            name="receiverName"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
          ></input>
        </div>
        <div className="topic-wrapper">
          <label htmlFor="topic" className="topic-input-label">
            <span>Topic:&nbsp;</span>
          </label>
          <input
            type="text"
            id="topic"
            className="topic-input"
            name="topic"
            onChange={(e) => setTopic(e.target.value)}
          ></input>
        </div>
        <div className="contact-message-wrapper">
          <textarea
            className="contact-message-input"
            placeholder="Write your message here"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button className="send-message-btn primary-btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
