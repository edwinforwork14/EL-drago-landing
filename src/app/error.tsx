"use client";
import React from "react";

export default function Error({ error, reset }: { error: Error; reset?: () => void }) {
  // Minimal client-rendered error fallback
  // Avoid using hooks here to keep it simple during prerender.
  // eslint-disable-next-line no-console
  console.error(error);
  return (
    <div style={{ padding: '4rem', fontFamily: 'sans-serif', background: '#fff1f1' }}>
      <h1 style={{ color: '#C41A1E', fontSize: '1.75rem' }}>Error en la aplicación</h1>
      <p style={{ color: '#5c403f' }}>Ocurrió un error durante el prerender. Revisa la consola del servidor para más detalles.</p>
      {reset && (
        <button onClick={() => reset()} style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#DF2122', color: '#fff', borderRadius: 8 }}>
          Reintentar
        </button>
      )}
    </div>
  );
}
