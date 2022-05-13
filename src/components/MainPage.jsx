import React from "react";
import Header from "./header";
import MessagesList from "./diaryMessages";
import Submit from "./diarySubmit";


function MainPage(props) {
    const { title } = props;
    console.log(title);
    return (
        <div id="MainPag" >
            <Header title={"Cloud Computing project - Crisan Geogiana-Alina"} />
            <h1 className="italic text-2xl font-bold mt-10 text-violet-500 text-3xl font-bold font-serif">Main Page</h1>
            <div className="flex max-x-7xl m-auto px-4 py-24">
                <div className="w-1/2 pl-5 pr-3">
                    <MessagesList />


                </div>

                <div className="w-1/2 pr-5 pl-3">
                    <Submit />

                </div>
            </div>
          
        </div>
    );

}


export default MainPage;