import { useState } from 'react';
import { chatbotIcon, userBotIcon } from '../../../static-img-url';

const Chatbot = ({
  title,
  onSendMessage,
  messages,
  loading,
  toggle,
  handleToggle,
  isReady,
}: {
  title: string;
  onSendMessage: (input: string) => void;
  messages: {
    role: string;
    content: string;
  }[];
  loading: boolean;
  toggle: boolean;
  isReady: boolean;
  handleToggle: () => void;
}) => {
  const [input, setInput] = useState('');

  return (
    <>
      {toggle ? (
        <div
          className="fixed bottom-[30px] right-[24px] rounded-xl overflow-hidden w-[400px] shadow h-[70vh] flex flex-col bg-white"
          style={{ touchAction: 'none' }}
          onWheel={e => e.stopPropagation()}
          onTouchMove={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center px-[16px] py-[12px] bg-[#FF4400] mb-[10px]">
            <h2 className="text-[16px] font-semibold text-white">{title}</h2>
            <span
              className="text font-semibold cursor-pointer text-white"
              onClick={() => handleToggle()}
            >
              X
            </span>
          </div>
          <div className="flex-1 mx-[8px] overflow-y-auto scrollbar p-2 rounded-xl space-y-2 px-1">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-[8px] p-[16px] rounded-md ${msg.role !== 'user' ? 'bg-[#f2f3f6]' : ''} `}
              >
                {msg.role === 'user' ? (
                  <>
                    <img className="w-[20px] h-[20px]" src={userBotIcon} alt="userbot" />
                    <p className="text-[#1d1e20] text-[14px] leading-[18px] font-normal">
                      {msg.content}
                    </p>
                  </>
                ) : (
                  <>
                    <img className="w-[20px] h-[20px]" src={chatbotIcon} alt="userbot" />
                    <p className="text-[#1d1e20] text-[14px] leading-[18px] font-normal">
                      {msg.content}
                    </p>
                  </>
                )}
              </div>
              // <div
              //   key={i}
              //   className={`max-w-[75%] p-3 rounded-[8px] text-sm ${
              //     msg.role === 'user'
              //       ? 'min-w-full bg-[#45462A] text-white'
              //       : 'min-w-full bg-[#f2f3f6] text-black'
              //   }`}
              // >
              //   {msg.content}
              // </div>
            ))}
            {loading && (
              <div className="mr-auto bg-gray-100 rounded-lg p-3 text-sm italic animate-pulse">
                AI is typing...
              </div>
            )}
          </div>
          <form
            className="flex mx-[8px] my-4 border rounded-lg border-[#d8dae0] focus-within:border-[#FF4400]"
            onSubmit={e => {
              e.preventDefault();
              if (!input.trim()) return;
              onSendMessage(input);
              setInput('');
            }}
          >
            <textarea
              className="flex-1  py-[12px] px-[8px] rounded-l-lg  text-sm focus:outline-none"
              value={input}
              rows={1}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask your question..."
            />
            <button
              type="submit"
              disabled={!isReady || loading}
              className={`${
                !isReady || loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#FF4400] cursor-pointer'
              } text-white px-4 py-2 text-sm rounded-r-lg`}
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <div
          className="fixed bottom-[30px] bg-[#FF4400] right-[30px] px-2.5 py-1.5 cursor-pointer rounded-2xl flex items-center gap-[10px]"
          onClick={() => handleToggle()}
        >
          <h3 className="text-white flex items-center  ">Ask {title}</h3>
        </div>
      )}
    </>
  );
};

export default Chatbot;
