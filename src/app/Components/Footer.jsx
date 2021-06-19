import React from 'react';

function Footer(props){
  var ano = new Date().getFullYear();

  return <h4>Desenvolvido na Unisystem - {ano}</h4>;
}

export default Footer;