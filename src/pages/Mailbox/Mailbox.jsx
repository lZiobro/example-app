import {React, useState, useEffect} from "react";
import './Mailbox.scss';
import {Link} from 'react-router-dom';

function MailsList(props) {
    const [selectedRowIndex, setSelectedRowIndex] = useState(-1);
    const Messages = props.messages;
    if(localStorage.getItem('token') == 'undefined' || localStorage.getItem('token') == null) return <>Unauthorized</>
    if(Messages == null) return <p>null</p>
    function handleRowSelect(index) {
        setSelectedRowIndex(index);
    }
    console.log("render mailsList");
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>
                            {props.box == "Inbox" ? "From" : "To"}
                        </th>
                        <th>
                            Topic
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Messages.map((message) => 
                    <tr className={selectedRowIndex == message.id ? "mail-selected" : ""} onClick={() => setSelectedRowIndex(message.id)} key={message.id}>
                        <td>
                            {message.receiverName}
                        </td>
                        <td>
                            {message.topic}
                        </td>
                        <td>
                            {message.dateSend}
                        </td>
                        
                        <td>
                        <Link className="reply-cell nostyle" to={`/contact`} >Reply</Link>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
            <div className="mailbox-main-content">
                {Messages.find(message => message.id == selectedRowIndex)?.content}
            </div>
            </>
    );
}


function Mailbox() {
    //inbox or sent
    const [box, setBox] = useState("Inbox");
    

    const [outMessages, setOutMessages] = useState(null);
    const [inMessages, setInMessages] = useState(null);

    const apiOutMessagesUrl = process.env.REACT_APP_API_BASE_URL+'/api/messages/getAllUserMessagesOut';
    const apiInMessagesUrl = process.env.REACT_APP_API_BASE_URL+'/api/messages/getAllUserMessagesIn';


    const handleBoxSelect = async (box) => {
        setBox(box);
        if(box == "Inbox" && inMessages == null) {
            var data = await apiMessages(apiInMessagesUrl);
            //console.log(await data.json());
            if(data?.status == 200) setInMessages(await data.json());
        } else if(box == "Sent" && outMessages == null) {
            var data = await apiMessages(apiOutMessagesUrl);
            if(data?.status == 200) setOutMessages(await data.json());
        }
    };

    useEffect(() => {
        console.log("UseEffect called");
        const fetchData = async () => {
            var data = await apiMessages(apiInMessagesUrl);
            if(data?.status == 200) setInMessages(await data.json());
        }

        fetchData();

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //const data = await apiNewMessage({receiverName, topic, content});
        //console.log(data);
    }

    const apiMessages = async (apiMessagesUrl) => {
    var result = await fetch(apiMessagesUrl, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      });
      return result;
    }

    console.log("renderd");




    return (
        <div className="mailbox-wrapper soft-edges old-paper-background">
            <div className="mailbox-side">
                <h3>Mailbox</h3>
                <p className={box == "Inbox" ? "mail-selected" : ""} onClick={() => handleBoxSelect("Inbox")}>Inbox</p>
                <p className={box == "Sent" ? "mail-selected" : ""} onClick={() => handleBoxSelect("Sent")}>Sent</p>
            </div>
            <div className="mailbox-main">
                <MailsList box={box} messages={box == "Inbox" ? inMessages : outMessages}/>
            </div>
        </div>
    )
}

export default Mailbox;

