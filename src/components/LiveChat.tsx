import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Smile } from 'lucide-react';
import './LiveChat.css';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hi there! 🐾 I am FurryBot. How can I help you and your pet today?', time: 'Just now' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const newMsg: Message = { sender: 'user', text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, newMsg]);
    if (!textToSend) setInputText('');

    // Trigger mock bot response
    setTimeout(() => {
      let botResponse = 'Thank you for reaching out! A member of our support team will connect with you shortly. 🐶';
      const cleanText = text.toLowerCase();
      
      if (cleanText.includes('order') || cleanText.includes('track')) {
        botResponse = 'You can track your order status in real time by clicking the "Track Order" link in our header, or visiting /track-order and entering your order ID.';
      } else if (cleanText.includes('subscription') || cleanText.includes('box')) {
        botResponse = 'Subscriptions save you 15%! You can customize your monthly delivery frequency and edit items from your Account Dashboard under "My Subscriptions".';
      } else if (cleanText.includes('hello') || cleanText.includes('hi')) {
        botResponse = 'Hello! Hope you and your furry companion are having a wonderful day! What can I assist you with? 🐱';
      } else if (cleanText.includes('refund') || cleanText.includes('return')) {
        botResponse = 'We offer a 30-day money-back guarantee! You can initiate a return or exchange by emailing support@furrycart.com.';
      }

      setMessages(prev => [...prev, {
        sender: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 800);
  };

  return (
    <div className="live-chat-widget">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button className="chat-trigger btn-primary shadow-lg" onClick={() => setIsOpen(true)}>
          <MessageCircle size={26} />
          <span className="trigger-text">Live Chat</span>
        </button>
      )}

      {/* Expanded Chat Box */}
      {isOpen && (
        <div className="chat-window glass shadow-lg anim-scale-up">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">🐾</div>
              <div>
                <h4>FurryBot</h4>
                <span className="chat-status">Online • Helper</span>
              </div>
            </div>
            <button className="chat-close" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-bubble-container ${msg.sender}`}>
                <div className={`chat-bubble ${msg.sender}`}>
                  {msg.text}
                </div>
                <span className="chat-time">{msg.time}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-suggestions">
            <button onClick={() => handleSend('Track my order')}>📦 Track Order</button>
            <button onClick={() => handleSend('Subscription help')}>🔄 Subscriptions</button>
            <button onClick={() => handleSend('Talk to agent')}>💬 Live Agent</button>
          </div>

          <form className="chat-input-bar" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" className="chat-send-btn">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
