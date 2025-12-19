import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { quickOptions } from '@/data/mockData';
import type { ChatMessage, QuickOptionType } from '@/types';

export function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hello! I'm your fitness assistant. How can I help you start your fitness journey today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');

  const getBotResponse = (option?: QuickOptionType): string => {
    if (option === 'events') {
      return "We host various events throughout the year including our Annual Fitness Championship, Monthly Workout Challenges, and Wellness Seminars. Check our Instagram @fitnessclubvitc for upcoming events!";
    }
    if (option === 'recruitment') {
      return "We recruit new members at the beginning of each semester. Watch for announcements on our social media or visit us at the Student Activities Fair. Simply fill out the membership form and attend an orientation session.";
    }
    if (option === 'general') {
      return "I can help with questions about our programs, schedules, facilities, or general inquiries. Feel free to ask about anything fitness-related!";
    }
    const responses = [
      "That's a great question about the club! Our team focuses on creating an inclusive environment for all fitness levels.",
      "For specific inquiries about events or membership, I recommend checking our Instagram @fitnessclubvitc for the latest updates.",
      "We have sessions for all fitness levels. Beginners are always welcome in our introductory classes.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleQuickOption = (option: QuickOptionType, label: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: label,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(option),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 gradient-primary rounded-full shadow-2xl flex items-center justify-center text-3xl z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        💬
      </motion.button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-full sm:w-96 p-0">
          <SheetHeader className="gradient-primary text-white p-6">
            <SheetTitle className="text-white text-xl">Club Assistant</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col h-[calc(100vh-120px)]">
            <div className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        message.isUser
                          ? 'bg-secondary-teal text-white'
                          : 'bg-white shadow-sm'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      {!message.isUser && message.id === '1' && (
                        <div className="mt-4 space-y-2">
                          {quickOptions.map((option) => (
                            <Button
                              key={option.id}
                              onClick={() => handleQuickOption(option.value, option.label)}
                              variant="outline"
                              size="sm"
                              className="w-full text-left justify-start hover:bg-secondary-teal/10 hover:border-secondary-teal"
                            >
                              {option.label}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="p-4 bg-white border-t flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 border rounded-full outline-none focus:border-secondary-teal"
              />
              <Button
                onClick={handleSend}
                className="gradient-primary text-white rounded-full px-6"
              >
                Send
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}