import Colaborador from '../Colaborador';
import './time.css';

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundImage: 'url(/imagens/fundo.png)',
          backgroundColor: time.corPrimaria,
        }}
      >
        <input
          onChange={(evento) => mudarCor(evento.target.value, time.nome)}
          type="color"
          className="input-cor"
          value={time.corSecundaria}
        />
        <h3 style={{ borderColor: time.corSecundaria, aoDeletar }}>
          {time.nome}
        </h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, indice) => {
            console.log(
              <Colaborador
                key={indice}
                colaborador={colaborador}
                corDeFundo={time.corSecundaria}
                aoDeletar={aoDeletar}
              />,
            );
            return (
              <Colaborador
                key={indice}
                colaborador={colaborador}
                corDeFundo={time.corSecundaria}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
