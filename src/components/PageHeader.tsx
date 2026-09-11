import React from "react";
import { motion } from "motion/react";
import { ChevronRight, Home, Shield } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  onNavigate: (path: string) => void;
  breadcrumbs: { label: string; path?: string }[];
}

export default function PageHeader({ title, subtitle, onNavigate, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-gold/10 bg-gradient-to-b from-black via-obsidian-card to-obsidian">
      {/* Absolute visual patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_50%)]" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 radial-glow opacity-20 pointer-events-none -z-10" />

      {/* Decorative Law Scale/Shield watermark on background */}
      <div className="absolute right-12 md:right-32 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <Shield className="w-64 h-64 md:w-80 md:h-80 text-gold" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 mb-6 text-[10px] md:text-xs font-mono tracking-wider text-gray-500 uppercase">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("/");
            }}
            className="flex items-center gap-1 hover:text-gold transition-colors duration-300"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Início</span>
          </a>
          {breadcrumbs.map((bc, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-gold/40" />
              {bc.path ? (
                <a
                  href={bc.path}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(bc.path!);
                  }}
                  className="hover:text-gold transition-colors duration-300"
                >
                  {bc.label}
                </a>
              ) : (
                <span className="text-gold font-semibold">{bc.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Dynamic Animated Header Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 uppercase leading-tight">
            {title}
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Luxury double golden bottom line accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-[2px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
    </div>
  );
}
