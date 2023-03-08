import React, { useState } from 'react';

function Input(props) {
    const [text, setText] = useState("");


    
    const onSubmit = (e) => {
        console.log('ovo je text',text)
        e.preventDefault();
        props.onSendMessage(text);
        setText("");
        
    }

    const onChange = (e) => {
        setText(e.target.value);
        // handle input change logic
    }

    return (
        <div className="Input">
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={text}
                    type="text"
                    placeholder="Enter your message and press ENTER"
                    autoFocus={true}
                />
                <button>Send</button>
            </form>
        </div>
    );
}

export default Input;