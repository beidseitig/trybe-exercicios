import React from "react";
import "./content.css";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component {
    render() {
        return (
            <div className="main">
                {conteudos.map((elem) => (
                    <div key={elem.conteudo} className="content">
                        <h4 className="content">{`O conteúdo é: ${elem.conteudo}`}</h4>
                        <p className="content">{`Status: ${elem.status}`}</p>
                        <p className="content">{`Bloco: ${elem.bloco}`}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Content;