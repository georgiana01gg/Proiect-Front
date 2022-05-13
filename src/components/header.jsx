import React from 'react';


function Header(props){
    const {title} = props;
    return (
        <header id="Header" className='italic text-2xl font-bold h-14 bg-violet-300 flex justify-center font-serif'>
            <span className='text-black text-bold text-xl self-center'> {title}</span>

        </header>
       
    );

}

export default Header;