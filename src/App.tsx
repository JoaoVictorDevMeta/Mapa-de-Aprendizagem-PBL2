import './App.css'
import Creative from './assets/img/creative.jpg'
import Leader from './assets/img/Lideranca.png'
import Problem from './assets/img/problem.jpg'
import Init from './assets/img/iniciativa.jpg'
import Colab from './assets/img/Originalidade.jpg'

import Card from './components/Card'
import { HiLightBulb } from "react-icons/hi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaClipboardQuestion } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { HiFingerPrint } from "react-icons/hi";

function App() {

  return (
    <>
      <header>
        <h2>
          João Victor Gouveia
        </h2>
        <h1>
          MAPA DE APRENDIZAGEM
        </h1>
      </header>
      <main>
        <div className='card-list'>
          <Card 
            titulo='Criatividade' 
            icon={HiLightBulb} 
            tipo='Execução de Projetos'
            descricao={[
            'Capacidade de criar, inovar e inventar métodos ou coisas novas.',
            'Apresentação de conteudos aprendidos em forma de website, como feito na sprint para aprender Scrum, Angular e neste mapa de aprendizagem de PBL2, utilizando tecnolgias relacionadas ao projeto. Produção dos sites abaixo.'
            ]}
            imagem={Creative}
            links={[
              'Scrum Project',
              'Site Login Angular'
            ]}
            hrefs={[
              'https://site-scrum-nine.vercel.app/',
              ''
            ]}
          />
          <Card 
            titulo='Liderança' 
            icon={FaPeopleGroup} 
            tipo='Formação de RH'
            descricao={[
            'Capacidade liderar, influenciar e se comunicar com uma equipe',
            'Mentoria e Ensinamento dos integrantes do Médio, mesmo sendo do médio',
            'Chamadas realizadas com alunos do médio para o ensino e o auxilio em Angular na sprint de Aprendizagem de Angular e de Desenvolvimento da Tela de Login. Vale ressaltar que essas chamadas ainda acontecem, mediante ao contínuo desenvolvimento.'
            ]}
            imagem={Leader}
            links={[]}
            hrefs={[]}
          />
          <Card 
            titulo='Resolução de Problemas' 
            icon={FaClipboardQuestion} 
            tipo='Execução de Projetos'
            descricao={[
            'Capacidade de lidar com problemas e propor soluções',
            'Resolução de problemas gerais com colegas do projeto',
            'Resolver problemas de autenticação e de código com colegas, além da organização do mesmo, do projeto na montagem da tela Login e Registrar.'
            ]}
            imagem={Problem}
            links={[]}
            hrefs={[]}
          />
          <Card 
            titulo='Iniciativa' 
            icon={FaChalkboardTeacher} 
            tipo='Gestão de Projeto'
            descricao={[
            'Capacidade de dar início a uma possível solução ou objetivo',
            'Sugestões de reuniões e métodos de organização com colegas do Front-End',
            'Reuniões após dailys para decidir e comentar sobre os objetivos e organização do código front-end. Sugestão de mentorias a parte para colegas do médio.'
            ]}
            imagem={Init}
            links={[]}
            hrefs={[]}
          />
          <Card 
            titulo='Originalidade' 
            icon={HiFingerPrint} 
            tipo='Formação de RH'
            descricao={[
            'Capacidade de desenvolver soluções que outras pessoas não conseguem imaginar',
            'Criação de métodos próprios, como websites, para aprendizagem e organização do projeto',
            'Criação de websites em meio a aprendizagem como forma de fortalecer o conhecimento necessário para o projeto. Criação do Mapa de Aprendizagem em formato Website.'
            ]}
            imagem={Colab}
            links={[]}
            hrefs={[]}
          />
        </div>
      </main>
      <footer>
        <p>
          Desenvolvido por João Victor Gouveia
        </p>
        <a href="https://github.com/JoaoVictorDevMeta/Mapa-de-Aprendizagem-PBL2">Link do Projeto</a>
      </footer>
    </>
  )
}

export default App
