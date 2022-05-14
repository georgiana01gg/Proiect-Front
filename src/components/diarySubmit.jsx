import axios from "axios";
import React from "react";

const handleDiarySent = async (e) => {
    
    const writerName = document.getElementById('writeName').value;
    const writerMail = document.getElementById('writerMail').value;
    const date_write = document.getElementById('date_write').value;
    const subject = document.getElementById('subject').value;
    const content = document.getElementById('content').value;

    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/diary`, 
            {
                writerName,
                writerMail,
                date_write,
                subject,
                content
            })

            if(response) {
                alert(`\nA fost trimis mesajul cu subiectul: ${subject} \nCu un refresh, notificarea va aparea impreuna cu cele mai recente mesaje in partea stanga a ecranului!`);
            }
    }
    catch (error) {
        alert('Something went wrong');
        console.log(error);
    }
}


function Submit() {

    return (
        <div id="Submit">
            <h2 className="italic hover:not-italic text-2xl font-bold mb-4 font-serif">Write in your diary</h2>
            <form  action="http://localhost:8080/diary" method="POST" encType = "multipart/form-data">
                <label className="block uppercase text-gray-700 text-xs font-bold mb-2">Your name</label>
                <input id="writeName" className="block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3"  type="text" placeholder="Popescu" />

                <label className="block uppercase text-gray-700 text-xs font-bold mb-2">Your e-mail</label>
                <input id = "writerMail" className="block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3"  type="text" placeholder="Popescu@gmail.com" />

                <label className="block uppercase text-gray-700 text-xs font-bold mb-2">Date</label>
                <input id = "date_write" className="block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3"  type="date"/>

                <label className="block uppercase text-gray-700 text-xs font-bold mb-2"> The subject</label>
                <input id ="subject" className="block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3"  type="text" placeholder="Zi frumoasa" />

                <label className="block uppercase text-gray-700 text-xs font-bold mb-2">The message</label>
                <textarea rows={5} id ="content" className="shadow-md block w-full bg-gray-200 sm:text-sm border-gray-800 rounded-md p-5" placeholder={"Cum a fost ziua ta?"}/>

            </form>
            <button className="bg-violet-600 hover:bg-violet-300 text-white font-bold py-2 px-4 rounded m-2 capitalize" onClick={handleDiarySent}>Submit</button>

            
           
        </div>
    );


}


export default Submit;