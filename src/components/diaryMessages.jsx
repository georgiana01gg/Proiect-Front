import axios from "axios";
import React, {useState,useEffect} from "react";


//Afisarea mesajelor din jurnal
function MessagesList(){

    const [message, setMessages] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            //const result = await axios.get("http://localhost:8080/diary");
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/diary`);
            
            if(result.data.message){
                let messagesArray = result.data.message;
                messagesArray.reverse();
                setMessages(messagesArray);



            }

        };
        fetchData();
        
    },[]);



    return (
        <div id="MessagesList" >
             <h2 className="italic hover:not-italic text-2xl font-bold   mb-4 font-serif"> Recent messages</h2>
            <ul className="mb-8 max-h-96 overflow-auto inline-grid grid-cols-1 gap-4">
                {
                    message.length ? message.map(message => 
                        <li key={message.ID}>
                            <p >
                                <span className="text-bold">{message.writerName}</span>
                                <span className="text-gray-600">{` wrote something in the diary, `}</span>
                                <span className="text-gray-600" >{ `with the subject "${message.subject}"`}</span>
                            </p>

                        </li>
                        )
                        : <li>No one wrote in their diary yet :(</li>
                }
            </ul>

        </div>

    );
}
export default MessagesList;