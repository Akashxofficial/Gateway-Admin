"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { useIsMobile } from "@/hooks/use-mobile"

const chartData = [
  { name: "October", value: 2400 },
  { name: "November", value: 3200 },
  { name: "December", value: 2800 },
]

const visitorData = [
  { name: "Week 1", users: 1200, visits: 2400 },
  { name: "Week 2", users: 1500, visits: 2210 },
  { name: "Week 3", users: 1800, visits: 2290 },
  { name: "Week 4", users: 2100, visits: 2000 },
]

const pieData = [
  { name: "Category A", value: 400 },
  { name: "Category B", value: 300 },
  { name: "Category C", value: 300 },
]

const COLORS = ["hsl(var(--color-chart-1))", "hsl(var(--color-chart-2))", "hsl(var(--color-chart-3))"]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(useIsMobile()? false : true)
  

  return (
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-8 space-y-6">
            {/* Welcome Section */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold">Welcome back!</h1>
              <p className="text-muted-foreground">Here's what's happening with your data today.</p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { icon: DollarSign, label: "Total Revenue", value: "$45,231", change: "+12.5%", color: "text-primary" },
                { icon: Users, label: "Total Users", value: "2,234", change: "+4.3%", color: "text-chart-2" },
                { icon: Activity, label: "Active Now", value: "1,234", change: "+8.1%", color: "text-chart-3" },
                { icon: TrendingUp, label: "Growth", value: "28.5%", change: "+2.1%", color: "text-chart-4" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-green-600 mt-2">{stat.change} from last month</p>
                    </div>
                    <div className={`p-3 rounded-lg bg-primary/10 ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Charts Grid */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Bar Chart */}
              <motion.div variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4">Analytics</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--color-muted-foreground))" />
                    <YAxis stroke="hsl(var(--color-muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--color-card))",
                        border: "1px solid hsl(var(--color-border))",
                      }}
                    />
                    <Bar dataKey="value" fill="hsl(var(--color-primary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Line Chart */}
              <motion.div variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4">Visitors Trend</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={visitorData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--color-muted-foreground))" />
                    <YAxis stroke="hsl(var(--color-muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--color-card))",
                        border: "1px solid hsl(var(--color-border))",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="hsl(var(--color-primary))"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </motion.div>

            {/* Bottom Row */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Pie Chart */}
              <motion.div variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4">Distribution</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--color-card))",
                        border: "1px solid hsl(var(--color-border))",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Stats Cards */}
              <motion.div variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4">Key Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Conversion Rate</p>
                    <p className="text-2xl font-bold">65%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Avg. Time</p>
                    <p className="text-2xl font-bold">1m 45s</p>
                  </div>
                </div>
              </motion.div>

              {/* Products Card */}
              <motion.div variants={itemVariants} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4">Top Products</h3>
                <div className="space-y-3 text-sm">
                  {["Product A", "Product B", "Product C"].map((p) => (
                    <div key={p} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{p}</span>
                      <span className="font-bold">12.5K</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>
  )
}
