import React, { useState } from 'react';
import { CERTIFICATIONS, Certificate } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';
import { Award, ExternalLink, Eye, ShieldCheck, CheckCircle2, FileText, Sparkles } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Certifications &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              Verified Achievements
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Professional accreditations from Cisco Networking Academy, Google Cloud, EY & Microsoft, Forage, and TCS.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.5)] group"
            >
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center p-2 text-cyan-400 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-cyan-400 font-semibold">
                    {cert.issueDate}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* Core Competencies */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Acquired Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/80 border border-white/5 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-white/5 flex items-center gap-2">
                <button
                  onClick={() => setSelectedCertificate(cert)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all hover:shadow-[0_0_12px_rgba(0,240,255,0.2)]"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View PDF</span>
                </button>

                <a
                  href={cert.filePath}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Open certificate in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-cyan-400 hover:text-cyan-300 transition-colors"
                    title="Verify accreditation online"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Viewer */}
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />

      </div>
    </section>
  );
};

