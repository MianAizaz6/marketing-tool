import { useState } from 'react';
import { postChat } from '../apis/speed-chatbot';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const parseMessages = (messages: { user: string; bot: string }[]): Message[] => {
  const parsed: Message[] = [];

  messages.forEach(msg => {
    if (msg.user) {
      parsed.push({ role: 'user', content: msg.user });
    }
    if (msg.bot) {
      parsed.push({ role: 'assistant', content: msg.bot });
    }
  });

  return parsed;
};

// onboardProcessId and websiteSpeedId can be undefined now
export const useChatbot = (type: string, onboardProcessId?: number, moduleId?: number) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (question: string) => {
    // 🛡️ Prevent sending messages before IDs are ready
    if (!onboardProcessId || !moduleId) {
      console.warn('Chatbot not ready: Missing onboardProcessId or moduleId');
      return;
    }

    setLoading(true);

    try {
      const response = await postChat({ onboardProcessId, moduleId, question, type });
      const parsed = parseMessages(response.messages);
      setMessages(prev => [...prev, ...parsed]);
    } catch (err) {
      console.error('Chat error:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    sendMessage,
    loading,
  };
};
