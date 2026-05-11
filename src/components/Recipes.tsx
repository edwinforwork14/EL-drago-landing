import React from 'react';

const Recipes = () => {
  const recipes = [
    {
      title: "Ensalada de Jamón y Rúcula",
      info: "15 min | Para 2 personas",
      level: "FÁCIL",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbTwzGDGy6QDvWSaivZkgWQZirDdUkUUReHR82K1vDbD9YvznxJmsVNNk2lCDEsrA8mxtds6U7GxsvPaMKnydcGXTsOgL9mAppL2JoBSddx8M6Lx7oIZqaUDzBD3u7cZ9Bh8C6OKoGqbnBEtYewj7NEMt3uV7K4Rq69tS14BppQnyiDIIXiVUP260Gr-SDvNb17CGS2I2jdQyljpl5Lar7rbRimLUyc0kHqXNeZ-YJKJa_jQ0opEA5IDEAEXMdxfcfgl5a2hTk58Q"
    },
    {
      title: "Baguette Pavo Supreme",
      info: "10 min | Para 1 persona",
      level: "MEDIO",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAewtC-PSuOzF6NKZneGEBlFaVrOLeey4LyD_WJARNdHWkPqmWh-mN9WyAQOsl-iDZ-f1qdjoqDleiyT_hhj6poroE4gqiubTlN6McDQauZbjrLtFIsSChysrca22GjwH4YTuC0-V7VEdPYYz7N5396AnxmnrlHxir9V1JpFaC7f802GFvTDPYlH52O1vnAR4-mCKR6iakh9_cPD6tCVaaX_HhPokzoMmMApvf96DVP1BBmS0ql7qVL2WxpGl3pgcBJtMlyPAEZ33M"
    },
    {
      title: "Tapas de Jamón Artesanal",
      info: "25 min | Para 4 personas",
      level: "PRO",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEKt9fqaZAFgf59vQZkLsspTWYSm1lHupk_2do-s1ua0SVBydC5k8oiN3wzN40U6LTw0chCVmc7FzLHYHj_3BzTJk3YY8OTzi_WulPGKzQRzfroBT03OwTea7g6T7_pWLPhsBb_dXAI52WtBFuXWYwSIwrBxIsMYtiHqXTRohyB3-o6r9khCLjTIunLbKEbtR2ekvufGvRJ9iFcUB2dirEFlCiR2TeaQ2vRFLe0NkzBdzK5kp4cOLCwWMrx379rYelnvjLEKDIo4c"
    },
    {
      title: "Pasta Carbonara Express",
      info: "20 min | Para 2 personas",
      level: "FÁCIL",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKPrAJzVsLVS7OSKMXjiIywtq_0Ip7hQejQjVzToBOGSLsyc0JVfTj5hdjck8zEGziWlwuWk7p9t0DAhvLjyOT7zGoabK3Me7kPqAui8E_bu8gkQY0aJlzUQG0MHqfm4UPElRT3HHFbdFEv94YdJz6CpL0iD14KfBc3Nc3GqvMK1vZjzOPFUHgBHri9hhNX7MBhNTXpoOvv1xsDVWIrratb77kpxKTU11m3EM62YtGt_Cr2sa3dcA3xinf6W1LtrPUQm_ICeiu_B0"
    }
  ];

  return (
    <section className="py-section-gap bg-primary text-on-primary">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="w-full md:w-2/3">
            <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-4 italic">Recetas que <span className="text-secondary-fixed underline">Inspiran</span></h2>
            <p className="font-body-lg text-body-lg opacity-90">Transforma tus platos cotidianos en experiencias gourmet con el toque único de El Drago.</p>
          </div>
          <button className="mt-8 md:mt-0 border-2 border-on-primary px-8 py-3 rounded-full font-label-bold text-label-bold hover:bg-on-primary hover:text-primary transition-colors">Ver todas las recetas</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={recipe.image} 
                  alt={recipe.title}
                />
                <div className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-bold text-xs">
                  {recipe.level}
                </div>
              </div>
              <h5 className="font-headline-md text-headline-md mb-1">{recipe.title}</h5>
              <p className="font-body-md opacity-80">{recipe.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
