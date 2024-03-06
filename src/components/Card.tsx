import {useState, ComponentType} from 'react'

type Item = {
    titulo: string;
    descricao: string[];
    links: string[];
    hrefs: string[];
    icon: ComponentType;
    imagem: string;
}

function Card(props:Item) {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
        setContentVisible(!isContentVisible);
  }

  return (
    <div className='card'>
        <div className='title'>
            <h3>{props.titulo}</h3>
            <div className={`image ${isContentVisible ? 'visible' : ''}`}>
                <img src={props.imagem} alt="Card-Image" />
            </div>
            <button onClick={toggleContent}>Leia mais</button>
        </div>
        <div className={`content ${isContentVisible ? 'visible' : ''}`}>
            <h4>{props.titulo}</h4>

            <div className='text'>
                <hr />
                <span>
                    <props.icon />
                </span>
                <ul>
                    {props.descricao.map((desc, index) => (
                        <li key={index}>
                            <p>{desc}</p>
                        </li>
                    ))}
                    <li className='links'>
                        {props.links.map((link, index) => (
                            <a href={props.hrefs[index]} target='_blank' key={index}>{link}</a>
                        ))}
                    </li>
                </ul>
                <button onClick={toggleContent}>
                    Fechar
                </button>
            </div>
        </div>
    </div>
  )
}

export default Card