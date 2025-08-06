import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            CLUB DE LEONES 104 AÑOS DE SERVICIO A LA COMUNIDAD Somos “El Club de
            Leones Quito Carita de Dios El Inca” líderes en el servicio
            comunitario sin fines de lucro, satisfacemos con calidad y
            excelencia los requerimientos de toda nuestra comunidad en el área
            de salud. Brindamos un servicio voluntario para toda la comunidad,
            esto en base a todo un equipo de profesionales comprometidos, a fin
            de contribuir con la mejora en la calidad de vida. DONDE EXISTE UNA
            NECESIDAD, RUGE UN LEON.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
