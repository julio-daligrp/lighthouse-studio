import React, { useState } from 'react';
import { X, Check, Copy, Send, Mail, MapPin, Phone } from 'lucide-react';
import { LighthouseLogo } from './LighthouseLogo';
import { StencilBorder } from './StencilBorder';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  onSuccessToast: (msg: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  email,
  phone,
  addressLine1,
  addressLine2,
  onSuccessToast,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Identidad de Marca',
    message: '',
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onSuccessToast(`${label} copiado al portapapeles`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onSuccessToast('¡Mensaje enviado a LIGHTHOUSE Studio!');
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', projectType: 'Identidad de Marca', message: '' });
        onClose();
      }, 1500);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#14343A]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#F8F4EB] rounded-[25px] shadow-2xl border border-[#14343A]/15 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#14343A]/10 bg-[#F8F4EB]">
          <div className="flex items-center gap-3">
            <LighthouseLogo variant="horizontal" size="sm" />
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-2 text-[#14343A]/60 hover:text-[#14343A] hover:bg-[#14343A]/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7">
          
          {/* Quick Copy Contact Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => copyToClipboard(email, 'Correo electrónico')}
              className="p-3.5 rounded-[25px] border border-[#14343A]/15 hover:border-[#C42A27] bg-white/70 hover:bg-white text-left transition-all group flex items-start justify-between"
            >
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#14343A]/60 font-semibold mb-1 uppercase tracking-wider">
                  <Mail size={13} className="text-[#C42A27]" />
                  <span>Email</span>
                </div>
                <p className="text-xs font-bold text-[#14343A] truncate max-w-[140px]">{email}</p>
              </div>
              {copiedField === 'Correo electrónico' ? (
                <Check size={14} className="text-[#C42A27] mt-0.5" />
              ) : (
                <Copy size={14} className="text-[#14343A]/40 group-hover:text-[#14343A] mt-0.5" />
              )}
            </button>

            <button
              type="button"
              onClick={() => copyToClipboard(phone, 'Teléfono')}
              className="p-3.5 rounded-[25px] border border-[#14343A]/15 hover:border-[#C42A27] bg-white/70 hover:bg-white text-left transition-all group flex items-start justify-between"
            >
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#14343A]/60 font-semibold mb-1 uppercase tracking-wider">
                  <Phone size={13} className="text-[#C42A27]" />
                  <span>Teléfono</span>
                </div>
                <p className="text-xs font-bold text-[#14343A]">{phone}</p>
              </div>
              {copiedField === 'Teléfono' ? (
                <Check size={14} className="text-[#C42A27] mt-0.5" />
              ) : (
                <Copy size={14} className="text-[#14343A]/40 group-hover:text-[#14343A] mt-0.5" />
              )}
            </button>

            <button
              type="button"
              onClick={() => copyToClipboard(`${addressLine1}, ${addressLine2}`, 'Dirección')}
              className="p-3.5 rounded-[25px] border border-[#14343A]/15 hover:border-[#C42A27] bg-white/70 hover:bg-white text-left transition-all group flex items-start justify-between"
            >
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#14343A]/60 font-semibold mb-1 uppercase tracking-wider">
                  <MapPin size={13} className="text-[#C42A27]" />
                  <span>Ubicación</span>
                </div>
                <p className="text-xs font-bold text-[#14343A] truncate max-w-[130px]">{addressLine2}</p>
              </div>
              {copiedField === 'Dirección' ? (
                <Check size={14} className="text-[#C42A27] mt-0.5" />
              ) : (
                <Copy size={14} className="text-[#14343A]/40 group-hover:text-[#14343A] mt-0.5" />
              )}
            </button>
          </div>

          {/* Contact Form */}
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#C42A27]/10 text-[#C42A27] flex items-center justify-center mb-4">
                <Check size={24} />
              </div>
              <h4 className="text-lg font-bold text-[#14343A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Consulta Recibida
              </h4>
              <p className="text-sm text-[#14343A]/70 mt-1 max-w-sm">
                Gracias por comunicarte con LIGHTHOUSE Studio. Te responderemos en menos de 24 horas.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider text-[#14343A] mb-1.5 font-secondary"
                    style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                  >
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alejandro Moreno"
                    className="w-full px-3.5 py-2.5 text-sm rounded-[25px] border border-[#14343A]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#14343A] transition-all font-primary"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider text-[#14343A] mb-1.5 font-secondary"
                    style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                  >
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alejandro@empresa.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-[25px] border border-[#14343A]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#14343A] transition-all font-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-bold uppercase tracking-wider text-[#14343A] mb-1.5 font-secondary"
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                >
                  Tipo de Consulta
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-[25px] border border-[#14343A]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#14343A] transition-all font-primary"
                >
                  <option value="Identidad de Marca">Sistema de Identidad de Marca</option>
                  <option value="Experiencia Digital">Experiencia Digital y Web</option>
                  <option value="Dirección de Arte">Dirección de Arte e Iluminación 3D</option>
                  <option value="Consultoría">Asesoría y Estrategia Creativa</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-xs font-bold uppercase tracking-wider text-[#14343A] mb-1.5 font-secondary"
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                >
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntanos sobre tu marca, visión y plazos estimados..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-[25px] border border-[#14343A]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#14343A] transition-all resize-none font-primary"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-semibold text-[#14343A]/70 hover:text-[#14343A] transition-colors rounded-[25px]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#C42A27] hover:bg-[#761113] active:scale-[0.99] rounded-[25px] transition-colors inline-flex items-center gap-2.5 shadow-sm disabled:opacity-60 font-secondary overflow-visible cursor-pointer"
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                >
                  <span className="text-[#ADC5D9] group-hover:text-white transition-colors select-none font-bold">—</span>
                  {isSubmitting ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                  <StencilBorder className="text-white/80 group-hover:text-[#ADC5D9]" />
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
