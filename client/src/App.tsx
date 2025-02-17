import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { clearMessages, connectWebSocket } from './store/slices/chatSlice';
import { socket } from './services/socket';

const App: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const messages = useSelector((state: RootState) => state.chat.messages);
    const [text, setText] = useState("");

    useEffect(() => {
        dispatch(connectWebSocket());
    }, [dispatch]);

    const sendMessage = () => {
        if (text.trim()) {
            const message = { id: Date.now(), user: "Me", text };
            socket.send(JSON.stringify(message))
            setText("");
        }
    };

    return (
        <div>
            <h1>Chat</h1>
            <div>
                {messages.map((msg) => (
                    <p key={msg.id}>
                        <strong>{msg.user}:</strong> {msg.text}
                    </p>
                ))}
            </div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
            <button onClick={() => dispatch(clearMessages())}>Clear</button>
        </div>
    )
}

export default App;