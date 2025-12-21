import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Bot,
  Workflow,
  Database,
  Zap,
  CheckCircle,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Server,
  Brain,
  MessageSquare,
  BarChart3,
  Code2,
  Cpu,
  Globe,
  Layers,
  Terminal,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"overview" | "technical" | "results">("overview");

  const techStack = [
    { name: "React 19", category: "Frontend", icon: Code2 },
    { name: "TypeScript", category: "Language", icon: Terminal },
    { name: "Node.js", category: "Backend", icon: Server },
    { name: "tRPC", category: "API", icon: Zap },
    { name: "MySQL", category: "Database", icon: Database },
    { name: "n8n", category: "Automation", icon: Workflow },
    { name: "OpenAI/Claude", category: "AI/LLM", icon: Brain },
    { name: "Tailwind CSS", category: "Styling", icon: Layers },
    { name: "Railway", category: "Deployment", icon: Globe },
    { name: "GitHub Actions", category: "CI/CD", icon: Github },
  ];

  const automationCapabilities = [
    {
      title: "AI-Powered Lead Qualification",
      description: "LLM agents analyze leads using custom prompts to score and qualify prospects automatically",
      icon: Brain,
      metrics: "50% qualification rate",
    },
    {
      title: "Multi-Source Lead Scraping",
      description: "Automated data extraction from Google Maps, LinkedIn, Facebook, and web sources",
      icon: Globe,
      metrics: "400+ leads/month",
    },
    {
      title: "Intelligent Form Submission",
      description: "Automated form filling with retry logic, error handling, and success tracking",
      icon: CheckCircle,
      metrics: "99% success rate",
    },
    {
      title: "WhatsApp Outreach Automation",
      description: "Personalized messaging workflows with response tracking and follow-up sequences",
      icon: MessageSquare,
      metrics: "95% contact rate",
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Live KPIs, conversion funnels, and performance metrics with interactive charts",
      icon: BarChart3,
      metrics: "15+ metrics tracked",
    },
    {
      title: "Self-Optimizing Workflows",
      description: "Weekly performance analysis with automated parameter tuning based on results",
      icon: Sparkles,
      metrics: "7000%+ ROI",
    },
  ];

  const systemArchitecture = [
    { stage: "1. Lead Discovery", description: "Multi-source scraping (Google Maps, LinkedIn, Facebook)", color: "blue" },
    { stage: "2. AI Qualification", description: "LLM-powered scoring & package recommendation", color: "purple" },
    { stage: "3. Outreach", description: "Automated WhatsApp messaging with personalization", color: "green" },
    { stage: "4. Form Submission", description: "Automated Airtel partner portal submission", color: "orange" },
    { stage: "5. Tracking", description: "Real-time dashboard with CSV exports", color: "red" },
    { stage: "6. Optimization", description: "Weekly performance analysis & tuning", color: "pink" },
  ];

  const results = [
    { metric: "Lead Generation", value: "400+", unit: "leads/month", change: "+300%" },
    { metric: "Qualification Rate", value: "50%", unit: "qualified", change: "+25%" },
    { metric: "Activation Rate", value: "99%", unit: "success", change: "+40%" },
    { metric: "Cost Per Lead", value: "KSh 20", unit: "per lead", change: "-80%" },
    { metric: "Revenue Potential", value: "KSh 596K", unit: "monthly", change: "+500%" },
    { metric: "ROI", value: "7,350%", unit: "return", change: "∞" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.1),transparent_50%)]" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-2xl shadow-violet-500/30"
          >
            <Bot size={48} className="text-white" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
            Reagan Ochola
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="text-violet-400 font-semibold">Automation Engineer</span> building intelligent systems that transform manual processes into 
            <span className="text-violet-400 font-semibold"> self-operating machines</span>. 
            From lead generation to revenue optimization—fully automated.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["AI/ML", "Workflow Automation", "Full-Stack Dev", "Data Engineering", "LLM Integration"].map((skill) => (
              <Badge key={skill} variant="outline" className="px-4 py-2 text-sm border-violet-500/50 text-violet-300 bg-violet-500/10">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <Button
              onClick={() => document.getElementById("case-study")?.scrollIntoView({ behavior: "smooth" })}
              className="h-12 px-8 bg-violet-600 hover:bg-violet-700 text-white rounded-full shadow-lg shadow-violet-600/30"
            >
              View Case Study
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="h-12 px-8 border-slate-600 text-slate-300 hover:bg-slate-800 rounded-full"
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                Featured Project
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
              Bazztech Networks
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-3xl mx-auto">
              An end-to-end AI-powered sales automation system for an ISP in Kenya. 
              From lead discovery to activation—100% automated.
            </motion.p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-800/50 rounded-full p-1.5 border border-slate-700">
              {[
                { id: "overview", label: "Overview" },
                { id: "technical", label: "Technical" },
                { id: "results", label: "Results" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-violet-600 text-white shadow-lg"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {automationCapabilities.map((capability, index) => (
                <Card
                  key={index}
                  className="p-6 bg-slate-800/50 border-slate-700 hover:border-violet-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <capability.icon className="text-violet-400" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{capability.description}</p>
                  <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
                    {capability.metrics}
                  </Badge>
                </Card>
              ))}
            </motion.div>
          )}

          {activeTab === "technical" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-center">System Architecture</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {systemArchitecture.map((step, index) => (
                    <div
                      key={index}
                      className="relative p-6 bg-slate-800/50 border border-slate-700 rounded-xl"
                    >
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center">
                        <span className="text-violet-400 font-bold text-sm">{index + 1}</span>
                      </div>
                      <h4 className="font-semibold text-white mb-2">{step.stage}</h4>
                      <p className="text-slate-400 text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="bg-slate-800" />

              <div>
                <h3 className="text-2xl font-semibold mb-8 text-center">Tech Stack</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-violet-500/50 transition-all"
                    >
                      <tech.icon size={20} className="text-violet-400" />
                      <div>
                        <p className="font-medium text-white text-sm">{tech.name}</p>
                        <p className="text-xs text-slate-500">{tech.category}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Separator className="bg-slate-800" />

              <div>
                <h3 className="text-2xl font-semibold mb-8 text-center">Sample Integration</h3>
                <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-4 text-sm text-slate-400">lead-qualification.ts</span>
                  </div>
                  <pre className="p-6 text-sm overflow-x-auto">
                    <code className="text-slate-300">{`// AI-powered lead qualification with LLM
const qualifyLead = async (lead: Lead) => {
  const prompt = buildQualificationPrompt(lead);
  
  const analysis = await llm.chat({
    model: "claude-3-opus",
    messages: [{ role: "user", content: prompt }],
  });

  const score = parseQualificationScore(analysis);
  const pkg = recommendPackage(lead, score);

  await db.leads.update({
    where: { id: lead.id },
    data: { 
      status: score > 0.7 ? "qualified" : "rejected",
      preferredPackage: pkg,
      qualificationNotes: analysis,
    },
  });

  if (score > 0.7) {
    await workflows.trigger("outreach", { leadId: lead.id });
  }
};`}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "results" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((result, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-800/40 border-slate-700 text-center"
                  >
                    <p className="text-sm text-slate-400 mb-2">{result.metric}</p>
                    <p className="text-4xl font-bold text-white mb-1">{result.value}</p>
                    <p className="text-sm text-slate-500 mb-3">{result.unit}</p>
                    <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                      {result.change}
                    </Badge>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 bg-red-500/5 border-red-500/20">
                  <h4 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    Before Automation
                  </h4>
                  <ul className="space-y-4 text-slate-400">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✗</span>
                      Manual lead research (4+ hours/day)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✗</span>
                      Copy-paste form submissions (error-prone)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✗</span>
                      2 leads per month conversion rate
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✗</span>
                      No tracking or analytics
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">✗</span>
                      High cost per acquisition
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 bg-emerald-500/5 border-emerald-500/20">
                  <h4 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    After Automation
                  </h4>
                  <ul className="space-y-4 text-slate-400">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">✓</span>
                      AI scrapes & qualifies 400+ leads/month
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">✓</span>
                      99% automated form submission success
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">✓</span>
                      200+ activations/month potential
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">✓</span>
                      Real-time KPI dashboard with 15+ metrics
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">✓</span>
                      KSh 20 cost per lead (80% reduction)
                    </li>
                  </ul>
                </Card>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6">
              What I Automate
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-2xl mx-auto">
              From simple scripts to complex AI-driven systems—if it's repetitive, I can automate it.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Bot, title: "AI Agents", desc: "LLM-powered decision making" },
              { icon: Workflow, title: "Workflows", desc: "n8n, Zapier, custom pipelines" },
              { icon: Database, title: "Data Pipelines", desc: "ETL, scraping, transformation" },
              { icon: MessageSquare, title: "Outreach", desc: "Email, WhatsApp, SMS automation" },
              { icon: Cpu, title: "API Integration", desc: "REST, GraphQL, webhooks" },
              { icon: BarChart3, title: "Analytics", desc: "Dashboards, reports, alerts" },
              { icon: Server, title: "DevOps", desc: "CI/CD, infrastructure as code" },
              { icon: Sparkles, title: "Self-Optimization", desc: "ML-driven parameter tuning" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-slate-800/30 border-slate-700 hover:border-violet-500/50 transition-all text-center group h-full">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all">
                    <skill.icon className="text-violet-400" size={28} />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{skill.title}</h3>
                  <p className="text-sm text-slate-400">{skill.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's Build Something</h2>
            <p className="text-xl text-slate-400 mb-12">
              Have a process that needs automation? Let's talk about how AI and automation can 10x your operations.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="mailto:reagan@bazztech.co.ke"
                className="flex items-center gap-3 px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl hover:border-violet-500/50 transition-all group"
              >
                <Mail className="text-violet-400 group-hover:scale-110 transition-transform" size={24} />
                <div className="text-left">
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="font-medium text-white">reagan@bazztech.co.ke</p>
                </div>
              </a>

              <a
                href="https://github.com/Ocholar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl hover:border-violet-500/50 transition-all group"
              >
                <Github className="text-violet-400 group-hover:scale-110 transition-transform" size={24} />
                <div className="text-left">
                  <p className="text-xs text-slate-500">GitHub</p>
                  <p className="font-medium text-white">@Ocholar</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/reagan-ochola-aba10927/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl hover:border-violet-500/50 transition-all group"
              >
                <Linkedin className="text-violet-400 group-hover:scale-110 transition-transform" size={24} />
                <div className="text-left">
                  <p className="text-xs text-slate-500">LinkedIn</p>
                  <p className="font-medium text-white">Reagan Ochola</p>
                </div>
              </a>
            </div>

            <Button
              size="lg"
              onClick={() => window.location.href = "mailto:reagan@bazztech.co.ke"}
              className="h-14 px-10 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white rounded-full shadow-xl shadow-violet-500/30"
            >
              Start a Conversation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2025 Reagan Ochola. Built with React, TypeScript & Tailwind.</p>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <Badge variant="outline" className="border-violet-500/50 text-violet-400">
              AI + Coffee ☕
            </Badge>
          </div>
        </div>
      </footer>
    </div>
  );
}
