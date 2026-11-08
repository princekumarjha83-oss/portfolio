import React from 'react';
import { X, ExternalLink, Download, FileCheck, ShieldCheck } from 'lucide-react';
import { Certificate } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  React.useEffect(() => {
    if (!certificate) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl h-[85vh] bg-[#070d1e] rounded-2xl border border-cyan-500/30 flex flex-col shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-display font-bold text-white">
                {certificate.title}
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                {certificate.issuer} • {certificate.issueDate}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={certificate.filePath}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Open in new window"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={certificate.filePath}
              download
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Download PDF"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-red-500/20 text-slate-300 hover:text-red-400 transition-colors"
              aria-label="Close certificate viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 w-full bg-slate-950/90 relative">
          <iframe
            src={`${certificate.filePath}#toolbar=0&navpanes=0`}
            className="w-full h-full border-none"
            title={certificate.title}
          />
        </div>

        {/* Modal Footer info */}
        <div className="px-6 py-3 border-t border-white/10 bg-slate-900/60 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Verified Certificate Document</span>
          <a
            href={certificate.filePath}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:underline inline-flex items-center gap-1"
          >
            <span>Direct File Link</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

