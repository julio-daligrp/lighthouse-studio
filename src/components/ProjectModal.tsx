import React from 'react';
import { ProjectItem } from '../types';
import { ArtworkVisual } from './ArtworkVisual';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { StencilBorder } from './StencilBorder';

interface ProjectModalProps {
  project: ProjectItem | null;
  projects: ProjectItem[];
  onClose: () => void;
  onSelectProject: (proj: ProjectItem) => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  projects,
  onClose,
  onSelectProject,
  onOpenContact,
}) => {
  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#14343A]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#F8F4EB] rounded-[25px] shadow-2xl border border-[#14343A]/15 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#14343A]/10 bg-[#F8F4EB]">
          <div
            className="flex items-center gap-3 font-secondary"
            style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#C42A27]">Proyecto {project.number}</span>
            <span className="text-[#14343A]/30">/</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#14343A]/80">{project.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectProject(prevProject)}
              aria-label="Proyecto anterior"
              className="p-1.5 text-[#14343A]/60 hover:text-[#14343A] hover:bg-[#14343A]/10 rounded-lg transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              aria-label="Proyecto siguiente"
              className="p-1.5 text-[#14343A]/60 hover:text-[#14343A] hover:bg-[#14343A]/10 rounded-lg transition-colors"
            >
              <ChevronRight size={18} />
            </button>
            <div className="h-4 w-px bg-[#14343A]/15 mx-1" />
            <button
              onClick={onClose}
              aria-label="Cerrar modal"
              className="p-1.5 text-[#14343A]/60 hover:text-[#14343A] hover:bg-[#14343A]/10 rounded-lg transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto">
          {/* Hero Visual Banner */}
          <div className="w-full aspect-[16/9] relative bg-[#8FA9BD] overflow-hidden">
            <ArtworkVisual styleType={project.artStyle} className="w-full h-full" />
          </div>

          {/* Project Details */}
          <div className="p-6 sm:p-10 space-y-8 font-primary">
            <div className="space-y-2">
              <h3
                className="text-2xl sm:text-3xl font-extrabold text-[#14343A] tracking-tight"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
              >
                {project.title}
              </h3>
              <p className="text-base text-[#14343A]/80 leading-relaxed max-w-2xl font-normal">
                {project.overview || project.description}
              </p>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-[#14343A]/10 text-sm">
              <div>
                <span
                  className="block text-xs uppercase font-bold text-[#C42A27] mb-1 tracking-wider font-secondary"
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                >
                  Año
                </span>
                <span className="font-bold text-[#14343A]">{project.year}</span>
              </div>
              <div>
                <span
                  className="block text-xs uppercase font-bold text-[#C42A27] mb-1 tracking-wider font-secondary"
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                >
                  Cliente
                </span>
                <span className="font-bold text-[#14343A]">{project.client || 'Comisión privada'}</span>
              </div>
              <div>
                <span
                  className="block text-xs uppercase font-bold text-[#C42A27] mb-1 tracking-wider font-secondary"
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                >
                  Categoría
                </span>
                <span className="font-bold text-[#14343A]">{project.category}</span>
              </div>
              <div>
                <span
                  className="block text-xs uppercase font-bold text-[#C42A27] mb-1 tracking-wider font-secondary"
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                >
                  Rol
                </span>
                <span className="font-bold text-[#14343A]">Liderazgo LIGHTHOUSE</span>
              </div>
            </div>

            {/* Deliverables / Scope */}
            {project.deliverables && project.deliverables.length > 0 && (
              <div>
                <h4
                  className="text-xs font-bold uppercase tracking-widest text-[#14343A] mb-3 font-secondary"
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                >
                  Alcance y Entregables
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-[25px] bg-white border border-[#14343A]/10 text-[#14343A] text-xs font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#14343A]/10">
              <p className="text-xs text-[#14343A]/70 text-center sm:text-left">
                Inicia un proyecto a medida con LIGHTHOUSE Studio
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="relative group w-full sm:w-auto px-6 py-2.5 bg-[#C42A27] hover:bg-[#761113] active:scale-[0.99] text-white text-xs font-bold uppercase tracking-wider rounded-[25px] inline-flex items-center justify-center gap-2.5 transition-colors shadow-sm overflow-visible cursor-pointer font-secondary"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                <span className="text-[#ADC5D9] group-hover:text-white transition-colors select-none font-bold">—</span>
                <span>Consultar sobre este proyecto</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <StencilBorder className="text-white/80 group-hover:text-[#ADC5D9]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
