import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export interface ProjectProps {
    title: string;
    description: string;
    technologies: string[];
    metrics?: string;
    icon: LucideIcon;
    link?: string;
    featured?: boolean;
}

export function ProjectCard({ title, description, technologies, metrics, icon: Icon, link, featured }: ProjectProps) {
    return (
        <Card className={`p-6 bg-slate-800/50 border-slate-700 hover:border-violet-500/50 transition-all group h-full flex flex-col ${featured ? 'border-violet-500/30 bg-violet-500/5' : ''}`}>
            <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${featured ? 'bg-violet-500/20' : 'bg-slate-700/50'}`}>
                    <Icon className={featured ? "text-violet-400" : "text-slate-400"} size={24} />
                </div>
                {metrics && (
                    <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
                        {metrics}
                    </Badge>
                )}
            </div>

            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                {title}
            </h3>

            <p className="text-slate-400 text-sm mb-6 flex-grow">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-slate-900/50 text-slate-500 text-xs hover:text-slate-300">
                        {tech}
                    </Badge>
                ))}
            </div>
        </Card>
    );
}
