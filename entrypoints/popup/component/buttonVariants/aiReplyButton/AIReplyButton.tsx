import React from 'react'
import AIWandIcon from '../../../../../assets/wand-icon.svg'


const AIReplyButton: React.FC =()=>{
    return (
        <button className='ai-reply-btn w-full h-full flex justify-center items-center rounded-full absolute shadow-md'  onClick={()=>console.log('AI Reply button is clicked!')}>
            <img src={AIWandIcon} alt="Linkreply-Button" className="w-5 h-5"/>
            
        </button>
    )

};

export default AIReplyButton;