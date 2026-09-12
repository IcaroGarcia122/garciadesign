import React from 'react';
import backgroundImage from './assets/images/fundo. de 2026, 21_42_55.png';
import logoImage from './assets/images/LOGO._de_2026__21_13_33-removebg-preview.png';
import { LoadingIcon, ArrowIcon } from './components/Icons';

export default function App() {
  const whatsappUrl =
    'https://wa.me/5522920142708?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20projeto%F0%9F%99%82';

  return (
    <main
      id="main-container"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-x-hidden bg-[#021544] bg-cover bg-no-repeat selection:bg-[#1565EE] selection:text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center 28%',
      }}
    >
      {/* Subtle depth and bottom vignette overlay */}
      <div
        id="bg-overlay"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(1, 10, 32, 0.25) 0%, transparent 40%, rgba(1, 8, 28, 0.75) 100%)',
        }}
      />

      {/* Main content wrapper */}
      <div
        id="content-box"
        className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center pt-4 pb-14 md:pt-6 md:pb-24 px-4 gap-5 md:gap-7 -translate-y-4 md:-translate-y-8"
      >
        {/* Section 1: Logo and Under Construction Badge */}
        <section
          id="branding-section"
          className="w-full flex flex-col items-center justify-center text-center"
        >
          {/* Logo uploaded by user - preserved in lower/center position */}
          <div
            id="logo-wrapper"
            className="flex justify-center items-center w-full px-4"
          >
            <img
              id="garcia-logo"
              src={logoImage}
              alt="GARCIA"
              className="w-[280px] sm:w-[380px] md:w-[500px] lg:w-[600px] h-auto max-w-full object-contain drop-shadow-[0_4px_30px_rgba(30,110,255,0.45)] transition-all duration-300 translate-y-10 md:translate-y-20"
            />
          </div>

          {/* Site em construção badge */}
          <div
            id="status-badge"
            className="mt-2 md:mt-3 inline-flex items-center gap-[10px] px-[24px] py-[12px] rounded-[200px] border border-[#6BB7FF]/40 bg-white/[0.08] backdrop-blur-[10px] shadow-[0_4px_20px_rgba(0,20,60,0.35)]"
            style={{ WebkitBackdropFilter: 'blur(10px)' }}
          >
            <div id="loading-spinner-wrapper" className="flex items-center justify-center text-[#75C2FF]">
              <LoadingIcon
                id="loading-spinner"
                className="w-[22px] h-[22px] animate-spin-loading"
                aria-hidden="true"
              />
            </div>
            <p
              id="status-text"
              className="m-0 font-['Archivo'] font-normal text-[15px] md:text-[17px] text-[#F3F3F3] leading-none select-none tracking-normal"
            >
              Site em construção.
            </p>
          </div>
        </section>

        {/* Section 2: Action Pill Card */}
        <section
          id="contact-card"
          className="w-full max-w-[340px] md:max-w-[840px] lg:max-w-[880px] flex flex-col md:flex-row items-center justify-between rounded-[28px] md:rounded-[900px] border border-[rgba(110,180,255,0.22)] bg-[rgba(2,16,50,0.48)] backdrop-blur-[16px] p-4 md:py-[24px] md:px-[40px] lg:py-[32px] lg:px-[68px] gap-4 md:gap-7 shadow-[0_12px_45px_rgba(0,10,36,0.6)]"
          style={{ WebkitBackdropFilter: 'blur(16px)' }}
        >
          {/* Card Message */}
          <h2
            id="contact-heading"
            className="m-0 font-['Archivo'] font-normal text-[15px] md:text-[17px] leading-[1.3] text-[#F3F3F3] max-w-full md:max-w-[280px] text-center md:text-left select-none"
          >
            Mas para <b className="font-bold text-white">agilizar seu atendimento,</b> entre em contato com a gente clicando no botão:
          </h2>

          {/* WhatsApp CTA Button */}
          <a
            id="whatsapp-button"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 w-full md:w-auto bg-[#FFFFFF] text-[#021846] font-['Archivo'] font-semibold text-[15px] lg:text-[16px] rounded-[90px] py-[16px] md:py-[18px] px-6 md:px-[32px] lg:px-[40px] no-underline transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-[#F3F7FF] hover:shadow-[0_0_30px_rgba(60,150,255,0.45)] active:scale-[0.99] cursor-pointer shadow-md select-none"
          >
            <span id="button-icon-wrapper" className="inline-flex items-center text-[#021846]">
              <ArrowIcon
                id="button-arrow"
                className="w-[10px] h-auto flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
            <span id="button-label" className="whitespace-nowrap">
              Quero solicitar um orçamento
            </span>
          </a>
        </section>

        {/* Section 3: Footer Divider and Copyright */}
        <footer
          id="page-footer"
          className="w-full max-w-[340px] md:max-w-[840px] lg:max-w-[880px] flex flex-col items-center justify-center"
        >
          {/* Divider */}
          <div
            id="footer-divider"
            className="w-full border-t-[1.5px] border-[#3B82F6]/30 mb-4"
            role="separator"
          />

          {/* Copyright Heading */}
          <h2
            id="copyright-text"
            className="m-0 font-['Archivo'] font-normal text-[14px] md:text-[15px] leading-[1.3] text-[#D8E6FF]/90 text-center select-none"
          >
            Copyright © 2025 GARCIA.{' '}
            <br className="inline md:hidden" />
            <b className="font-bold text-white">Todos os direitos reservados.</b>
          </h2>
        </footer>
      </div>
    </main>
  );
}
