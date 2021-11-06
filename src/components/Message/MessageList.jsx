import { React, useRef, useEffect } from "react";

import bender from '../../img/bender1.png';
import zoidberg from '../../img/zoidberg2.png';
import fry from '../../img/fry.png';
import lola from '../../img/lola1.png';

export function MessageList({ messageList }) {

    const chatRef = useRef(null);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
        }
    }, [messageList]);

    return (
        <div className='chatContainer'>
            {messageList.map((e) => (
                <div className='bubble text_area' key={e.id} ref={chatRef}>
                    <div>{e.gender === '1' && <img className='gender_avatar' src={lola} alt='avatar' />}</div>
                    <div>{e.gender === '2' && <img className='gender_avatar' src={fry} alt='avatar' />}</div>
                    <div>{e.gender === '3' && <img className='gender_avatar' src={zoidberg} alt='avatar' />}</div>
                    <div>{e.gender === '4' && <img className='gender_avatar' src={bender} alt='avatar' />}</div>
                    <div className='name_author'>{e.author}</div>
                    {e.text}
                </div>
            ))}
        </div>
    )
};