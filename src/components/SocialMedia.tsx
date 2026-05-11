import React from 'react';

const SocialMedia = () => {
  return (
    <section className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase mb-6 leading-tight">
            Únete a nuestra <br /> <span className="text-secondary-fixed-dim">Comunidad</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Síguenos para tips, promociones exclusivas y más delicias diarias.</p>
          <div className="flex justify-center md:justify-start gap-4">
            <a className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform" href="#">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
            <a className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform" href="#">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </a>
            <a className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform" href="#">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.032 2.617-.023 3.91-.006 1.36.016 2.71.049 4.06.103 1.34.054 2.63.153 3.67.433 1.04.28 1.88.731 2.54 1.391.66.66 1.111 1.5 1.391 2.54.28 1.04.379 2.33.433 3.67.054 1.35.087 2.7.103 4.06.017 1.293.026 2.6.006 3.91-.02 1.31-.023 2.617-.006 3.91.016 1.36.049 2.71.103 4.06.054 1.34.153 2.63.433 3.67.28 1.04.731 1.88 1.391 2.54.66.66 1.5 1.111 2.54 1.391 1.04.28 2.33.379 3.67.433 1.35.054 2.7.087 4.06.103 1.293.017 2.6.026 3.91.006 1.31-.02 2.617-.023 3.91-.006 1.36.016 2.71.049 4.06.103 1.34.054 2.63.153 3.67.433 1.04.28 1.88.731 2.54 1.391.66.66 1.111 1.5 1.391 2.54.28 1.04.379 2.33.433 3.67.054 1.35.087 2.7.103 4.06.017 1.293.026 2.6.006 3.91-.02-1.31z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
          <img className="w-full h-48 object-cover rounded-xl shadow-lg rotate-[-2deg]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH8NIRjm-gLX9_tahXHi05PwlOK3sKFC4BFe-ZELfoSRxuA3FArHfaHELVMvxF4AowNx4KKdjaT0AhHW63Zl2WuAecW4wpOS2_q4SFME_90Zq-QQN6r4Wz1oJT1AuiAS_d0ExPMxkYAzYADn1nhwjbe_sk10LbUX-ye2cWbHiC5Deeo7Cr_eIII8oJuknxMEeELYmVbUFyjyhKUdBWyM4vSSCHAb3OlnbV_pHGPq1a2EB_GsJ-vTaFmX8WnDZTSPZXjNf2gCwHyQc" alt="Social 1" />
          <img className="w-full h-48 object-cover rounded-xl shadow-lg rotate-[3deg]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD8WaAvSUI1i6Og2rfLQaSz8EvxxdNQi8B60f6gCRH25BORVR6UXu8XfUNpI57UO23FFl456iu8BHuwWGjdsbU9d2ACgbjR9tkc1jw9PjzO4Aa87P2baQWlqWDXwMCrHXpzGLAgu3sSeuLEtelm-YWBZkdfC68iUcoDvqaO-rxIHOu3bgGnw7zdooMmO-BN5My2ZJaM6IGTpeYA99ywEpnaj9iZFhx9y0p4_EWd9bfI9XzZXAJKJ51IPYUWpxJm7FH-XnTaoxYeJ0" alt="Social 2" />
          <img className="w-full h-48 object-cover rounded-xl shadow-lg rotate-[1deg]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvuEBS1DRR4Vurcjzt579jZ67NylpOcRGJDkWFhRdV50WydPQ5IsQXmnjQ7C0YU4q5kDgVSqs4l8-Dkj7vPloYZ3CgTzx9EKrM6zy6DmBa_WkO_5Ug2EyxFifk_e5A0aLKBf4pgmqhps5WneNdCJolBtUsNylb0CeDxHCWP6JU4IumEza3LIX6oQKVTbv4AsGM3QV0aakiQ-2gcZW-9d3s0iSf5LWEHGwKZwGliqAqFbIvjpk8y7qy1jYbTyinmsQYUMbbLCV4dcA" alt="Social 3" />
          <div className="bg-secondary-container rounded-xl flex items-center justify-center p-4 rotate-[-4deg] shadow-lg">
            <div className="text-on-secondary-container text-center">
              <span className="material-symbols-outlined text-4xl mb-2">qr_code_2</span>
              <p className="font-label-bold text-xs uppercase">Escanea para ganar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
