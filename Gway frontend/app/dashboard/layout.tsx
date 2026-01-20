"use client"

import type React from "react"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { useIsMobile } from "@/hooks/use-mobile"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const [sidebarOpen, setSidebarOpen] = useState(useIsMobile()? false : true)

  return (
    <div className="pb-20 lg:pb-0">
      <div className="flex h-screen bg-background overflow-hidden">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

          {children}
        </div>
      </div>
      <MobileBottomNav />
    </div>
  )
}
