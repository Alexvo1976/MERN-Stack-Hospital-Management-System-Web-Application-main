import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biografia</p>
          <h3>Quienes somos</h3>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            blanditiis sequi aperiam. Debitis fugiat harum ex maxime illo
            consequatur mollitia voluptatem omnis nihil nesciunt beatae esse
            ipsam, sapiente totam aspernatur porro ducimus aperiam nisi. Ex
            magnam voluptatum consectetur reprehenderit fugiat recusandae aut
            similique illum natus velit, praesentium nostrum nesciunt. Deleniti,
            nesciunt laboriosam totam iusto!
          </p> */}
          {/* <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p> */}
          <p>
            Somos “El Club de Leones Quito Carita de Dios El Inca” líderes en el
            servicio comunitario sin fines de lucro, satisfacemos con calidad y
            excelencia los requerimientos de toda nuestra comunidad en el área
            de salud. Brindamos un servicio voluntario para toda la comunidad,
            esto en base a todo un equipo de profesionales comprometidos, a fin
            de contribuir con la mejora en la calidad de vida.
          </p>
          {/* <p>Lorem ipsum dolor sit amet!</p>
          <p>Coding is fun!</p> */}
        </div>
      </div>
    </>
  );
};

export default Biography;
