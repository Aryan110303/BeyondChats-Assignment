import React, { useState, useRef, useEffect } from 'react';
import SidePanel from './SidePanel';
import up from '../assets/up.svg';
import down from '../assets/down.png';
import chat from '../assets/chat.png';
import smile from '../assets/smile.png';
import spark from '../assets/spark.png';
import ribbon from '../assets/ribbon.png';
import threeDots from '../assets/threedots.png';
import moon from '../assets/moon.png';
import panel from '../assets/panel.png';
import fin from '../assets/Fin icon.png';
import bold from '../assets/bold.png';
import italic from '../assets/italic.png';
import link from '../assets/link.png';
import h1 from '../assets/h1.png';
import h2 from '../assets/h2.png';
import ai from '../assets/ai.png';
import PreLoader from './PreLoader';


const Dashboard = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [aiTab, setAiTab] = useState('AI Copilot');
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState({
    1: [
      { from: 'them', text: 'Hey! I have a question about the new repository settings. Can you help?', time: '12:00 PM' },
      { from: 'me', text: 'Let me just look into this for you.', time: '2:02 PM' },
    ],
    2: [
      { from: 'them', text: 'Hi there, I have a question about my recent order. Can you help me with the details?', time: '9:15 AM' },
    ],
    3: [
      { from: 'them', text: 'Good morning, let me know if you need any more information regarding the proposal.', time: '8:30 AM' },
    ],
    4: [
      { from: 'them', text: 'Bug report: The API is returning a 500 error when booking a new appointment.', time: '7:45 AM' },
    ],
    5: [
      { from: 'them', text: "Hey there, I'm here to assist you with your banking queries. Let me know how I can help!", time: '10:00 AM' },
    ],
  });
  const chatEndRef = useRef(null);
  const [mobileView, setMobileView] = useState('contacts'); // 'contacts' | 'chat' | 'ai'

  // AI chat state
  const [aiInput, setAiInput] = useState('');
  const [aiHistory, setAiHistory] = useState([]); // {from: 'me'|'ai', text: string, time: string}
  const pendingAiInputRef = useRef(null);

  // Debug effect to track state changes
  useEffect(() => {
    console.log('AI Input State:', aiInput);
    console.log('Mobile View:', mobileView);
    console.log('Pending Input:', pendingAiInputRef.current);
  }, [aiInput, mobileView]);

  // Effect to set AI input when panel becomes visible
  useEffect(() => {
    console.log('Panel Visibility Effect - mobileView:', mobileView);
    console.log('Panel Visibility Effect - pendingInput:', pendingAiInputRef.current);
    if (mobileView === 'ai' && pendingAiInputRef.current) {
      setAiInput(pendingAiInputRef.current);
      pendingAiInputRef.current = null;
    }
  }, [mobileView]);

  // Selection state
  const [selection, setSelection] = useState({ text: '', x: 0, y: 0, show: false });
  const chatAreaRef = useRef(null);

  // Listen for text selection in chat area
  useEffect(() => {
    const handleMouseUp = (e) => {
      const sel = window.getSelection();
      if (
        sel &&
        sel.toString().trim() &&
        chatAreaRef.current &&
        chatAreaRef.current.contains(sel.anchorNode)
      ) {
        // Only show if selection is inside a chat message text
        let node = sel.anchorNode;
        let found = false;
        while (node) {
          if (node.classList && node.classList.contains('chat-message-text')) {
            found = true;
            break;
          }
          node = node.parentNode;
        }
        if (found) {
          const range = sel.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          console.log('Selection made:', sel.toString());
          setSelection({
            text: sel.toString(),
            x: rect.left + window.scrollX,
            y: rect.top + window.scrollY,
            show: true,
          });
          return;
        }
      }
      setSelection({ text: '', x: 0, y: 0, show: false });
    };
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  // Hide selection button on scroll or click elsewhere
  useEffect(() => {
    const hide = (e) => {
      // Don't hide if clicking the Ask Fin AI button
      if (e.target.closest('.ask-fin-ai-button')) {
        return;
      }
      setSelection({ text: '', x: 0, y: 0, show: false });
    };
    window.addEventListener('scroll', hide, true);
    window.addEventListener('mousedown', hide);
    return () => {
      window.removeEventListener('scroll', hide, true);
      window.removeEventListener('mousedown', hide);
    };
  }, []);

  // Mock contacts data
  const contacts = [
    {
      id: 1,
      name: 'Luis',
      company: 'Github',
      message: 'Hey! I have a question about the new repository settings. Can you help?',
      time: '45m',
      color: 'bg-blue-400',
      initials: 'L',
    },
    {
      id: 2,
      name: 'Ivan',
      company: 'Nike',
      message: 'Hi there, I have a question about my recent order. Can you help me with the details?',
      time: '3min',
      color: 'bg-red-400',
      initials: 'I',
    },
    {
      id: 3,
      name: 'Lead from New York',
      company: '',
      message: 'Good morning, let me know if you need any more information regarding the proposal.',
      time: '40m',
      color: 'bg-indigo-400',
      initials: 'LN',
    },
    {
      id: 4,
      name: 'Booking API problems',
      company: '',
      message: 'Bug report: The API is returning a 500 error when booking a new appointment.',
      time: '45m',
      color: 'bg-gray-400',
      initials: 'B',
    },
    {
      id: 5,
      name: 'Miracle',
      company: 'Exemplary Bank',
      message: "Hey there, I'm here to assist you with your banking queries. Let me know how I can help!",
      time: '45m',
      color: 'bg-green-400',
      initials: 'M',
    },
  ];

  // At the top, after other useStates:
  const chatInputRef = useRef(null);
  const [inputSelection, setInputSelection] = useState({ text: '', rect: null, show: false });

  // Handler for chat input selection
  const handleInputSelect = (e) => {
    const input = chatInputRef.current;
    if (!input) return;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const value = input.value;
    if (start !== end) {
      // Get the position of the input box
      const inputRect = input.getBoundingClientRect();
      // Estimate the position of the selection (top center of input)
      setInputSelection({
        text: value.substring(start, end),
        rect: {
          left: inputRect.left + window.scrollX + inputRect.width / 2,
          top: inputRect.top + window.scrollY,
          width: inputRect.width,
        },
        show: true,
      });
      // Hide the message selection
      setSelection({ text: '', x: 0, y: 0, show: false });
    } else {
      setInputSelection({ text: '', rect: null, show: false });
    }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PreLoader />;

  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh',
      background: '#e9eafc',
      minHeight: 0
    }}>
      {/* Left Panel - Contacts */}
      <div className={`h-full ${mobileView === 'contacts' ? 'block' : 'hidden'} md:block md:relative md:h-auto`} style={{ minWidth: 0 }}>
        <SidePanel position="left" defaultWidth={280}>
          <div className='flex flex-col h-full'>
            {/* Header */}
            <div className='flex items-center justify-between pb-3 border-b border-gray-200 px-4 pt-4 md:pt-4'>
              <h2 className="text-lg text-black font-semibold">Your inbox</h2>
              {/* AI button for mobile */}
              <button className='md:hidden p-2 rounded-md bg-[#dbdbdb]' onClick={() => setMobileView('ai')}>
                <img src={panel} alt="AI" className='w-4 h-4' />
              </button>
            </div>
            {/* Filter/Sort row (optional, can add later) */}
            <div className='flex-1 overflow-y-auto mt-2'>
              {contacts.map(contact => (
                <div
                  key={contact.id}
                  className={`flex items-center px-3 py-2 cursor-pointer rounded-lg mb-1 transition-colors ${
                    selectedContact?.id === contact.id ? 'bg-blue-50' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    setSelectedContact(contact);
                    if (window.innerWidth < 768) setMobileView('chat');
                  }}
                >
                  {/* Profile icon */}
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-bold text-base mr-3 ${contact.color}`}>
                    {contact.initials}
                  </div>
                  {/* Name, company, message */}
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-center justify-between'>
                      <span className='font-medium text-sm text-black truncate'>
                        {contact.name}
                        {contact.company && <span className='font-normal text-gray-500'> · {contact.company}</span>}
                      </span>
                      <span className='text-xs text-gray-400 ml-2 whitespace-nowrap'>{contact.time}</span>
                    </div>
                    <div className='text-xs text-gray-500 truncate'>{contact.message}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SidePanel>
      </div>

      {/* Middle Panel - Chat */}
      <div className={`flex-1 bg-white flex flex-col min-w-0 ${mobileView === 'chat' ? 'block' : 'hidden'} md:flex`}>
        {/* Top Heading */}
        <div className="p-4 border-b border-[#e9ecef] min-h-[64px] flex justify-between items-center font-semibold text-lg text-[#222]">
          <div className='flex items-center gap-2'>
            {/* Back button for mobile */}
            <button className='md:hidden p-2 rounded-md bg-[#dbdbdb]' onClick={() => setMobileView('contacts')}>
              <svg className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' /></svg>
            </button>
            <span>{selectedContact ? selectedContact.name : 'No conversation selected'}</span>
          </div>
          <div className='flex items-center gap-2'>
            {/* AI button for mobile */}
            <button className='md:hidden p-2 rounded-md bg-[#dbdbdb]' onClick={() => setMobileView('ai')}>
              <img src={panel} alt="AI" className='w-4 h-4' />
            </button>
            <a href="" className='p-2 rounded-md bg-[#dbdbdb] hidden md:inline'><img src={threeDots} alt="threeDots" className='w-3 h-3' /></a>
            <a href="" className='p-2 rounded-md bg-[#dbdbdb] hidden md:inline'><img src={moon} alt="moon" className='w-3 h-3' /></a>
            <button className='rounded-md bg-black text-white text-[12px] px-2 py-1 hidden md:inline' onClick={() => setSelectedContact(null)}>Close</button>
          </div>
        </div>
        {/* Main Chat Area */}
        <div style={{flex: 1, overflowY: 'auto', padding: '1.5rem 1rem'}}>
          <div ref={chatAreaRef} className='relative'>
            {selectedContact ? (
              <div>
                {chatHistory[selectedContact.id]?.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col text-black mb-4 p-4 rounded-lg max-w-[60%] ${
                      msg.from === 'me'
                        ? 'bg-[#d2dcf4] ml-auto text-right'
                        : 'bg-[#edecec] text-left'
                    }`}
                  >
                    <span className='text-sm chat-message-text'>{msg.text}</span>
                    <span className='text-xs mt-4'>{msg.time}</span>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                Select a contact to start chatting
              </div>
            )}
            {/* Floating Ask Fin AI button */}
            {selection.show && selection.text && (
              <button
                className='ask-fin-ai-button flex items-center gap-2 bg-white text-black px-3 py-1 rounded shadow text-xs font-semibold hover:bg-indigo-300 hover:text-indigo-700 transition'
                style={{
                  position: 'absolute',
                  left: selection.x - chatAreaRef.current?.getBoundingClientRect().left,
                  top: selection.y - chatAreaRef.current?.getBoundingClientRect().top - 36,
                  zIndex: 50
                }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event from bubbling up
                  console.log('Ask Fin AI clicked with text:', selection.text);
                  pendingAiInputRef.current = selection.text;
                  setMobileView('ai');
                  setSelection({ text: '', x: 0, y: 0, show: false });
                }}
              >
                <img src={fin} alt="fin" className='w-4 h-4' />
                <span>Ask Fin AI</span>
              </button>
            )}
          </div>
        </div>
        {/* Chat Input Box */}
        <div className='flex flex-col px-8 pb-2 w-full'>
          <form
            className='flex flex-col rounded-lg border bg-white border-gray-200 p-2'
            onSubmit={e => {
              e.preventDefault();
              if (!selectedContact || !chatInput.trim()) return;
              const now = new Date();
              const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
              setChatHistory(prev => ({
                ...prev,
                [selectedContact.id]: [
                  ...(prev[selectedContact.id] || []),
                  { from: 'me', text: chatInput, time },
                ],
              }));
              setChatInput('');
              setTimeout(() => {
                chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          >
            <div className='flex items-center px-4 gap-1 p-1'>
            <a href="" className='flex items-center gap-1'>
              <img src={chat} alt="chat" className='w-4 h-4' />
              <span className='text-black text-sm font-semibold'>Chat</span>
              <img src={down} alt="down" className='w-2 h-3 pt-1' />
            </a>
            </div>
            <div className='flex justify-start mt-2 h-16'>
              <input
                ref={chatInputRef}
                type="text"
                className='w-full outline-none text-black placeholder:text-sm placeholder:px-2'
                placeholder='Use CTRL + K for shortcuts'
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                autoComplete='off'
                onSelect={handleInputSelect}
              />
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex gap-1'>
                <a href=""><img src={spark} alt="" width={20} height={20} /></a>
                <a href=""><img src={ribbon} alt="" width={20} height={20} /></a>
                <a href=""><img src={smile} alt="" width={20} height={20} /></a>
              </div>
              <button
                type='submit'
                className='bg-white rounded-md border text-black border-gray-200 p-2 hover:bg-black hover:text-white transition-colors duration-200'
              >
                <div className='flex items-center gap-10'>
                  <span className='text-sm font-semibold'>Send</span>
                  <img src={up} alt="up" width={20} height={20} className=''/>
                </div>
              </button>
            </div>
          </form>
          {/* Render the formatting bar if inputSelection.show is true */}
          {inputSelection.show && inputSelection.rect && (
            <div
              style={{
                position: 'absolute',
                left: inputSelection.rect.left - 120, // Center the bar (adjust width as needed)
                top: inputSelection.rect.top - 40,   // Above the input
                zIndex: 100,
                width: 240,
                height: 36,
                background: '#f4f4f6',
                borderRadius: 8,
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 12px',
              }}
            >
              {/* Replace these with your icons */}
              <button className='flex items-center gap-1'>
                <span className=' text-black'>AI</span> 
                <img src={ai} alt="ai" className='w-4 h-4' />
              </button>
              <button>
                <img src={bold} alt="bold" className='w-4 h-4' />
              </button>
              <button>
                <img src={italic} alt="italic" className='w-4 h-4' />
              </button>
              <button>
                <img src={link} alt="link" className='w-4 h-4' />
              </button>
              <button>
                <img src={h1} alt="h1" className='w-4 h-4' />
              </button>
              <button>
                <img src={h2} alt="h2" className='w-4 h-4' />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right Panel - AI Chat */}
      <div className={`h-full ${mobileView === 'ai' ? 'block' : 'hidden'} md:block md:relative md:h-auto`} style={{ minWidth: 0 }}>
        <SidePanel position="right" defaultWidth={340}>
          <div className='flex flex-col h-full justify-between'>
            {/* Tabs */}
            <div className='bg-gradient-to-b from-slate-50 via-violet-50 to-violet-100 absolute top-0 left-0 w-full h-full z-10'></div>
            <div className='flex border-b border-gray-200 min-h-[28px] z-20'>
              <div className='flex items-center gap-4 justify-between w-full'>
                <div className='flex items-center gap-6'>
                  {/* Back button for mobile */}
                  <button className='md:hidden p-2 rounded-md bg-[#dbdbdb]' onClick={() => setMobileView(selectedContact ? 'chat' : 'contacts')}>
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' /></svg>
                  </button>
                  <button onClick={() => setAiTab('AI Copilot')} className={` flex items-center gap-1 py-1 bg-gradient-to-r from-violet-800 via-purple-500 to-indigo-700 bg-clip-text text-transparent border-0 border-b-2 ${aiTab === 'AI Copilot' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900'} font-semibold text-sm  cursor-pointer focus:outline-none transition-colors duration-200`}>
                    <img src={fin} alt="ai" className='w-4 h-4' />AI Copilot
                  </button>
                  <button onClick={() => setAiTab('Details')} className={` py-1 bg-transparent border-0 border-b-2 ${aiTab === 'Details' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900'} font-semibold text-sm cursor-pointer focus:outline-none transition-colors duration-200`}>
                    Details
                  </button>
                </div>
                <a href="" className='hidden md:inline'><img src={panel} alt="panel" className='w-4 h-4' /></a>
              </div>
            </div>
            {/* Main Content */}
            <div className={`overflow-y-auto p-4 text-black z-20 ${aiHistory.length > 0 ? 'h-full' : 'h-auto'}`}>
              {aiTab === 'AI Copilot' ? (
                <>
                  <div className={`flex flex-col items-center mx-auto w-full ${aiHistory.length > 0 ? 'hidden' : 'block'}`}>
                    <img src={fin} alt="fin" className='w-16 h-16' />
                    <div className={`text-2xl font-semibold mb-2`}>Hi, I'm Fin AI Copilot</div>
                    <div className='text-gray-500 text-sm'>Ask me anything about this conversation.</div>
                  </div>
                  {/* AI chat history */}
                  <div className='flex flex-col items-start w-full md:max-w-lg md:mx-auto mt-6 gap-6'>
                    {aiHistory.map((msg, idx) => (
                      <div key={idx} className="w-full">
                        <div className="flex items-center gap-2 mb-1">
                          {msg.from === 'me' ? (
                            <>
                              <img
                                src="https://randomuser.me/api/portraits/women/44.jpg" // Dummy profile photo
                                alt="You"
                                className="w-6 h-6 rounded-full object-cover"
                              />
                              <span className="text-xs font-semibold text-gray-700">You</span>
                            </>
                          ) : (
                            <>
                              <img
                                src={fin}
                                alt="Fin"
                                className="w-6 h-6 rounded-full object-cover"
                              />
                              <span className="text-xs font-semibold text-gray-700">Fin</span>
                            </>
                          )}
                        </div>
                        <div className="text-base text-gray-900 ml-8">{msg.text}</div>
                        {/* Optionally, handle the 'searching' and links as a special case if needed */}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className='text-gray-500 text-sm flex items-center justify-center h-full'>Details content goes here.</div>
              )}
            </div>
            {/* AI Input Box */}
            <form
              className='flex flex-col mx-auto w-full z-20'
              onSubmit={e => {
                e.preventDefault();
                if (!aiInput.trim()) return;
                const now = new Date();
                const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                setAiHistory(prev => [
                  ...prev,
                  { from: 'me', text: aiInput, time },
                  { from: 'ai', text: `I don't know that yet.`, time },
                ]);
                setAiInput('');
              }}
            >
              <div className='flex items-center justify-center rounded-lg border bg-white border-gray-200 p-2'>
                <input
                  type="text"
                  placeholder='Ask a question...'
                  className='w-full text-sm outline-none text-black placeholder:text-sm placeholder:px-2'
                  value={aiInput}
                  onChange={e => {
                    console.log('AI Input changed:', e.target.value);
                    setAiInput(e.target.value);
                  }}
                  autoComplete='on'
                />
                <button type='submit' className={`${aiInput.length > 0 ? 'bg-black' : 'bg-transparent'} p-1 rounded-sm`}>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${aiInput.length > 0 ? 'text-white' : 'text-gray-300'} transition-colors`}
                  >
                    <path 
                      d="M5 12H19M19 12L12 5M19 12L12 19" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </SidePanel>
      </div>
    </div>
  );
};

export default Dashboard; 