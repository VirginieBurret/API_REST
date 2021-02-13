import React from 'react';
import '../Vignettes/vignettes.scss';
const Vignettes = () => (
<div className="vignettes">
  <h2 classname="vignettes__title">
Tes vignettes de la semaine
  </h2>
  <div className="vignettes__totalVignettes">
   <div className="vignettes__totalVignettes__vignette"></div>
   <div className="vignettes__totalVignettes__vignette"></div>
   <div className="vignettes__totalVignettes__vignette"></div>
   
  </div>

  <button type="button" className="vignettes__button">Quizz de la semaine</button>

</div>
);

export default Vignettes;
