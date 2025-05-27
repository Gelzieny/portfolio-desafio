import { BriefcaseBusiness, Folder, GitBranch, Github, Globe2Icon, Linkedin, Mail, MapPin, Star, Twitch, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

interface GithubRepository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
}

const LANGUAGES_ITENS = [
  {
    label: 'JAVASCRIPT',
  },
  {
    label: 'REACTJS',
  },
  {
    label: 'NODEJS',
  },
  {
    label: 'GIT',
  },
  {
    label: 'GITHUB',
  },
  {
    label: 'HTML',
  },
  {
    label: 'CSS',
  },
  {
    label: 'ELIXIR',
  },
  {
    label: 'REACT NATIVE',
  },
]

const EXPERIENCES_ITENS = [
  {
    label: 'LIGO',
    ano: '2025 - Atualmente',
    cargo: 'Desenvolvedor Full Stack'
  },
  {
    label: 'Vólus',
    ano: '2019 - 2024',
    cargo: 'Desenvolvedor Full Stack'
  },
]

const EDUCACAO_ITENS = [
  {
    label: 'UNIVERSIDADE ESTADUAL DE GOIÁS',
    ano: '2025 - 2019',
    curso: 'Sistemas de Informação'
  },
]

export function App() {
  const [repos, setRepos] = useState<GithubRepository[]>([]);
  
  useEffect(() => {
    fetch('https://api.github.com/users/gelzieny/repos')
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);
  
  return (
    <div className="flex p-10 min-h-screen">
      <div className="w-[500px]">
        {/* Photo */}
        <div className="flex items-center justify-center flex-col box-shadow bg-[#302F3D] rounded-[20px] w-auto py-8 px-0 h-[292px]">
          <span className="">
            <img src="https://github.com/gelzieny.png" alt="profile"
              className="rounded-full border-4 border-[#00FF00] w-40"
            />
          </span>
          <p className="font-bold text-2xl pt-8 pb-2.5 px-0">Gelzieny R. Martins</p>
          <p className="font-bold text-sm pt-[10px]">Full Stack Developer</p>
        </div>

        {/* Social */}
        <div className="box-shadow bg-[#302F3D] rounded-[20px] mt-[30px] w-full h-[380px]">
          <span className="text-xs font-normal p-8">
            <div className="flex pt-[20px] px-[40px] pb-[3px]">
              <MapPin className="flex w-[20px] flex-col justify-between"/>
              <p className="pt-[6px] pr-[20px] pb-0 pl-[20px]">Brasil</p>
            </div>

            <div className="flex pt-[20px] px-[40px] pb-[3px]">
              <BriefcaseBusiness className="flex w-[20px] flex-col justify-between"/>
              <a href="https://goias.gov.br/governo/" className="pt-[6px] pr-[20px] pb-0 pl-[20px]">Secretaria-Geral de Governo de Goiás | SGG</a>
            </div>

            <div className="flex pt-[20px] px-[40px] pb-[3px]">
              <Github className="flex w-[20px] flex-col justify-between"/>
              <a href="https://github.com/gelzieny" className="pt-[6px] pr-[20px] pb-0 pl-[20px]">Gelzieny</a>
            </div>

            <div className="flex pt-[20px] px-[40px] pb-[3px]">
              <Linkedin className="flex w-[20px] flex-col justify-between"/>
              <a href="www.linkedin.com/in/gelzieny" className="pt-[6px] pr-[20px] pb-0 pl-[20px]">Gelzieny</a>
            </div>

            <div className="flex pt-[20px] px-[40px] pb-[3px]">
              <Twitter className="flex w-[20px] flex-col justify-between"/>
              <a href="https://x.com/GelzienyRM" className="pt-[6px] pr-[20px] pb-0 pl-[20px]">@GelzienyRM</a>
            </div>

            <div className="flex pt-[20px] px-[40px] pb-[3px]">
              <Globe2Icon className="flex w-[20px] flex-col justify-between"/>
              <a href="#" className="pt-[6px] pr-[20px] pb-0 pl-[20px]">https://gelzieny.dev
              </a>
            </div>

            <div className="flex pt-[20px] px-[40px] pb-[3px]">
              <Mail className="flex w-[20px] flex-col justify-between"/>
              <a href="mailto:gelzieny@gmail.com" className="pt-[6px] pr-[20px] pb-0 pl-[20px]">gelzieny@gmail.com
              </a>
            </div>
          </span>
        </div>

        {/* Technologies */}
        <div className="grid grid-cols-1 box-shadow bg-[#302F3D] rounded-[20px] mt-[30px] w-full h-[200px] pb-[30px]">
          <div className="pt-[10px] pb-[20px] pl-[20px] font-bold text-xl">
            Tecnologias
          </div>
          <section className="grid grid grid-cols-3 mx-auto">
            {LANGUAGES_ITENS.map((item, index) => (
              <div key={index} className="flex flex-col justify-center items-center">
                <div className="flex items-center justify-center bg-[#CB92B1] rounded-[30px] text-[10px] text-black font-bold p-[8px] m-[5px]">
                  {item.label}    
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* Experiences */}
        <div className="grid grid-cols-1 box-shadow bg-[#302F3D] rounded-[20px] mt-[30px] w-full pb-[30px]">
          <div className="pt-[10px] pb-[20px] pl-[20px] font-bold text-xl">
            Experiências
          </div>
          <section>
            {EXPERIENCES_ITENS.map((item, index) => (
              <div key={index} className="flex pl-[40px] pb-[20px]">
                <span className="h-[5px] w-1 bg-[#837E9F] rounded-full inline-block mt-[20px] mr-[20px] mb-[30px] ml-[20px]" />
                <div className="flex flex-col">
                  <p className="bold text-sm">{item.label}</p>
                  <p className="font-light text-xs">{item.ano}</p>
                  <p className="text-xs">{item.cargo}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
        {/* Educação */}
        <div className="grid grid-cols-1 box-shadow bg-[#302F3D] rounded-[20px] mt-[30px] w-full pb-[30px]">
          <div className="pt-[10px] pb-[20px] pl-[20px] font-bold text-xl">
            Educação
          </div>
          <section>
            {EDUCACAO_ITENS.map((item, index) => (
              <div key={index} className="flex pl-[40px] pb-[20px]">
                <span className="h-[5px] w-1 bg-[#837E9F] rounded-full inline-block mt-[20px] mr-[20px] mb-[30px] ml-[20px]" />
                <div className="flex flex-col">
                  <p className="bold text-sm">{item.label}</p>
                  <p className="font-light text-xs">{item.ano}</p>
                  <p className="text-xs">{item.curso}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <span className="flex w-[80px]"/>
      
      <div className="w-full min-w-[500px]">
        <div className="box-shadow bg-[#302F3D] rounded-[20px] w-full h-[76px] p-[30px] flex justify-between items-center">
          <p className="bold My Projects">My Projects</p>
          <a href="https://github.com/gelzieny" target="_blank" className="text-sm">
            Veja todos
          </a>
        </div>

        {/* Projetos */}
        <section className="w-full py-8">
          <div className="flex flex-wrap gap-6 justify-start">
            {/* Projeto 1 */}
            <a
              href="https://github.com/Gelzieny/conversor-de-moedas.git"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <div className="box-shadow bg-[#302F3D] rounded-3xl w-95 h-auto p-5 text-white overflow-hidden break-words">
                <div className="flex items-center mb-3">
                  <Folder className="w-5 h-5" />
                  <p className="pl-4 font-bold">conversor-de-moedas</p>
                </div>

                <p className="text-sm mb-4 pl-2">
                  Consulte os códigos de erro que aparecem no painel do veículo Onix.
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Star className="w-5 h-5" />
                    <p className="pl-2 text-sm font-light">100</p>
                    <GitBranch className="ml-4 w-5 h-5" />
                    <p className="pl-2 text-sm font-light">100</p>
                  </div>
                  <div className="flex items-center">
                    <img src="live.svg" alt="Live" className="w-[10px] h-[10px]" />
                    <p className="pl-1 text-sm font-light">HTML, CSS, Javascript</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Projeto 2 */}
            <a
              href="https://github.com/Gelzieny/black_white_tailwind.git"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <div className="box-shadow bg-[#302F3D] rounded-3xl w-95 h-auto p-5 text-white overflow-hidden break-words">
                <div className="flex items-center mb-3">
                  <Folder className="w-5 h-5" />
                  <p className="pl-4 font-bold">Black and White Tailwind</p>
                </div>

                <p className="text-sm mb-4 pl-2">
                  Consulte os códigos de erro que aparecem no painel do veículo Onix.
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Star className="w-5 h-5" />
                    <p className="pl-2 text-sm font-light">100</p>
                    <GitBranch className="ml-4 w-5 h-5" />
                    <p className="pl-2 text-sm font-light">100</p>
                  </div>
                  <div className="flex items-center">
                    <img src="live.svg" alt="Live" className="w-[10px] h-[10px]" />
                    <p className="pl-1 text-sm font-light">HTML, CSS, TypeScript</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>

        <div>
          <div className="box-shadow bg-[#302F3D] rounded-[20px] w-full h-[76px] p-[30px] mt-[30px] flex items-start">
            <p className="pl-[30px] font-bold text-xl">Recent Posts</p>
          </div>

          <section>
            <div className="box-shadow bg-[#302F3D] rounded-[20px] w-full h-52 py-8 mt-8">
              <div className="flex">
                <img
                  src="https://github.com/gelzieny.png"
                  alt="use"
                  className="my-2.5 mr-2.5 ml-5 w-30 h-30 rounded-full"
                />
                <div className="grid grid-rows-4 flex-1 min-w-0 pr-5 pl-5">
                  <div className=" text-lg font-bold truncate">
                    <a
                      href="https://medium.com/@gelzieny/erro-adb-devices-no-genymotion-react-native-735c15594ac6"
                      className="block text-white hover:underline"
                    >
                      Erro adb devices no Genymotion e Android Studio (React Native)
                    </a>
                  </div>
                  <div className="text-xs text-gray-400 pb-[30px]">2 anos atrás</div>
                  <div className="text-sm  text-white break-words">
                    Erro adb devices no Genymotion e Android Studio (React Native)
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-300">
                    <p>#react-native</p>
                    <p>#genymotion</p>
                    <p>#genymotion</p>
                    <p>#genymotion</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>      
    </div>
  )
}