"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { X, Send, MessageCircle, User } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Lee Day 👋 I help small businesses with web development and AI solutions. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickReplies = [
    "I need a website for my business",
    "Tell me about AI chatbots",
    "What are your prices?",
    "I want to discuss my project",
  ]

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  const handleSendMessage = (message?: string) => {
    const messageText = message || inputValue.trim()
    if (!messageText) return

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay then redirect to WhatsApp
    setTimeout(() => {
      setIsTyping(false)

      // Create WhatsApp URL with the message
      const whatsappMessage = `Hi Lee! ${messageText}`
      const whatsappUrl = `https://wa.me/447586266007?text=${encodeURIComponent(whatsappMessage)}`

      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank", "noopener,noreferrer")

      // Add system message
      const systemMessage: Message = {
        id: Date.now() + 1,
        text: "Great! I've opened WhatsApp for you. Let's continue our conversation there! 🚀",
        isUser: false,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, systemMessage])
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 border-2 border-white/20"
            aria-label="Open chat"
          >
            <MessageCircle className="w-8 h-8" />
          </Button>
        )}

        {/* Chat Window */}
        {isOpen && (
          <div className="w-80 h-96 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 flex flex-col overflow-hidden animate-fade-in-up">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Lee Day</h3>
                  <p className="text-green-100 text-xs">Web Developer & AI Specialist</p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 w-8 h-8 p-0"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-800">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      message.isUser
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "bg-gray-700 text-gray-100"
                    } shadow-lg`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isUser ? "text-blue-100" : "text-gray-400"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 px-4 py-2 rounded-2xl shadow-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="p-3 bg-gray-800 border-t border-gray-700">
                <p className="text-xs text-gray-400 mb-2">Quick replies:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <Button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      variant="outline"
                      size="sm"
                      className="text-xs bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600 hover:text-white transition-colors"
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-gray-800 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white p-0 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              {/* WhatsApp Notice */}
              <div className="flex items-center justify-center mt-2 text-xs text-gray-400">
                <WhatsAppIcon className="w-3 h-3 mr-1" />
                <span>Powered by WhatsApp</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
