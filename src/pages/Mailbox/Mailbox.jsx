import { React, useState, useEffect } from "react";
import "./Mailbox.scss";
import { Link } from "react-router-dom";

function MailsList(props) {
  const Messages = props.messages;

  const [selectedRowIndex, setSelectedRowIndex] = useState(-1);
  const [currentMessage, setCurrentMessage] = useState(null);

  //we need this additional useEffect to clear message content when changing between inbox/sent
  useEffect(() => {
    setCurrentMessage(
      Messages?.find((message) => message.id === selectedRowIndex)
    );
  }, [Messages]);
  useEffect(() => {
    setCurrentMessage(
      Messages?.find((message) => message.id === selectedRowIndex)
    );
  }, [selectedRowIndex]);

  if (
    localStorage.getItem("token") === "undefined" ||
    localStorage.getItem("token") === null
  )
    return <>Unauthorized</>;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>{props.box === "Inbox" ? "From" : "To"}</th>
            <th>Topic</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Messages ? (
            Messages.map((message) => (
              <tr
                className={
                  selectedRowIndex === message.id ? "mail-selected" : ""
                }
                onClick={() => setSelectedRowIndex(message.id)}
                key={message.id}
              >
                <td>
                  {props.box === "Inbox"
                    ? message.senderName
                    : message.receiverName}
                </td>
                <td>{message.topic}</td>
                <td>{message.dateSend}</td>

                <td>
                  <Link
                    className="reply-cell nostyle"
                    to={`/contact`}
                    state={{
                      recipent:
                        props.box === "Inbox"
                          ? message.senderName
                          : message.receiverName,
                    }}
                  >
                    Reply
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td></td>
              <td></td>
              <td></td>

              <td></td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="mailbox-main-content">
        {currentMessage ? (
          <>
            <h2 className="message-content-topic">{currentMessage?.topic}</h2>
            <span className="message-content-user">
              {currentMessage?.receiverName}
            </span>
            <span className="message-content-content">
              {currentMessage?.content}
            </span>
            <br />
            <span className="message-content-footer">
              Sent: {currentMessage?.dateSend}
            </span>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

function Mailbox() {
  //inbox or sent
  const [box, setBox] = useState("Inbox");

  const [outMessages, setOutMessages] = useState(null);
  const [inMessages, setInMessages] = useState(null);

  const apiOutMessagesUrl =
    process.env.REACT_APP_API_BASE_URL + "/api/messages/getAllUserMessagesOut";
  const apiInMessagesUrl =
    process.env.REACT_APP_API_BASE_URL + "/api/messages/getAllUserMessagesIn";

  const handleBoxSelect = async (box) => {
    setBox(box);
    if (box === "Inbox" && inMessages === null) {
      const data = await apiMessages(apiInMessagesUrl);
      if (data?.status === 200) setInMessages(await data.json());
    } else if (box === "Sent" && outMessages === null) {
      const data = await apiMessages(apiOutMessagesUrl);
      if (data?.status === 200) setOutMessages(await data.json());
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiMessages(apiInMessagesUrl);
      if (data?.status === 200) setInMessages(await data.json());
    };

    fetchData();
  }, []);

  const apiMessages = async (apiMessagesUrl) => {
    var result = await fetch(apiMessagesUrl, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return result;
  };

  return (
    <div className="mailbox-wrapper soft-edges old-paper-background">
      <div className="mailbox-side">
        <h3>Mailbox</h3>
        <Link className="nostyle sendmail-btn" to={"/contact"}>
          <p>Send Message</p>
        </Link>
        <p
          className={box === "Inbox" ? "mail-selected" : ""}
          onClick={() => handleBoxSelect("Inbox")}
        >
          Inbox
        </p>
        <p
          className={box === "Sent" ? "mail-selected" : ""}
          onClick={() => handleBoxSelect("Sent")}
        >
          Sent
        </p>
      </div>
      <div className="mailbox-main">
        <MailsList
          box={box}
          messages={box === "Inbox" ? inMessages : outMessages}
        />
      </div>
    </div>
  );
}

export default Mailbox;
