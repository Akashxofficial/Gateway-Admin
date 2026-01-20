"use client"

import { motion } from "framer-motion"
import { Suspense, useState } from "react"
import { Search, Send, Smile } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"

const conversations = [
  { id: 1, name: "John Doe", message: "Hey, how are you?", time: "2m ago", unread: true },
  { id: 2, name: "Jane Smith", message: "Thanks for your help!", time: "1h ago", unread: false },
  { id: 3, name: "Mike Johnson", message: "See you tomorrow", time: "3h ago", unread: false },
]

function MessagesContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <main className="flex-1 overflow-hidden">
      <div className="h-full flex gap-4 p-4 md:p-8">
        {/* Conversations List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-80 bg-card border border-border rounded-lg flex flex-col"
        >
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 p-4">
            {conversations.map((conv) => (
              <motion.div
                key={conv.id}
                whileHover={{ backgroundColor: "hsl(var(--color-muted))" }}
                className="p-4 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-primary/30"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium">{conv.name}</h3>
                  <span className="text-xs text-muted-foreground">{conv.time}</span>
                </div>
                <p
                  className={`text-sm line-clamp-1 ${conv.unread ? "font-medium text-foreground" : "text-muted-foreground"}`}
                >
                  {conv.message}
                </p>
                {conv.unread && (
                  <div className="flex justify-end mt-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Chat Area */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex flex-1 bg-card border border-border rounded-lg flex-col"
        >
          <div className="p-4 border-b border-border">
            <h2 className="font-bold">John Doe</h2>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg px-4 py-2 max-w-xs">
                <p className="text-sm">Hey, how are you?</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 max-w-xs">
                <p className="text-sm">I'm doing great, thanks!</p>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 pl-4 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
              />
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Smile className="w-5 h-5" />
              </button>
              <button className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default function MessagesPage() {
  return (
    <Suspense fallback={null}>
      <MessagesContent />
    </Suspense>
  )
}
