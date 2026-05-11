import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface MetricPill {
  label: string;
}

interface ProjectCardProps {
  id: string;
  title: string;
  tagline: string;
  company: string;
  description: string;
  metrics: MetricPill[];
  icon?: React.ReactNode;
}

export default function ProjectCard({
  id,
  title,
  tagline,
  company,
  description,
  metrics,
  icon,
}: ProjectCardProps) {
  return (
    <Link href={`/project/${id}`}>
      <div className="card-hover h-full group cursor-pointer">
          {/* Icon */}
          {icon && (
            <div className="mb-4 text-accent text-3xl">{icon}</div>
          )}

          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-sm text-secondary font-medium">{company}</p>
            <p className="text-sm text-foreground/60 italic mt-2">{tagline}</p>
          </div>

          {/* Description */}
          <p className="text-foreground/70 text-sm mb-6 line-clamp-2">
            {description}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-2 mb-6">
            {metrics.map((metric, index) => (
              <span
                key={index}
                className="badge-accent text-xs"
              >
                {metric.label}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
            Read Case Study
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
      </div>
    </Link>
  );
}
