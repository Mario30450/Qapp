import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useChat } from "./useChat";
import { db } from "./firebase";

function App() {
  const [message, setMessage] = React.useState("");
  const { loading, messages, error } = useChat();
  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages").add({ timestamp: Date.now(), message });
  };

  return (
    <div className="App">
      <div className="App-header">
        <p>Escribe tu mensaje...</p>
        <form>
          <input value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type="submit" onClick={sendMessage}>
            Enviar mensaje
          </button>
        </form>
        <ul>
          {messages.map((m) => (
            <li key={m.id}>{m.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
