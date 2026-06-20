"use client";

export default function BrandImage() {
  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-full max-w-6xl px-4">
        <img
          src="/anuncio face mio.png"
          alt="Imagen de marca"
          className="w-full h-auto rounded-2xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
}