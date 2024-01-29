import Header from "./components/Header";
import Hero from "./components/Hero";
import Clientes from "./components/Clientes";
import Services from "./components/Services";

import Project from './assets/project.svg'
import Customers from './assets/customers.svg'
import Raise from './assets/raise.svg'
import Timeline from './assets/timeline.svg'

export default function App() {
  return (
    <main className="flex flex-col min-h-screen py-4">
      <Header />
      <Hero />
      <Clientes />
      <Services />

      <div className="flex flex-col py-12 bg-green-100 items-center justify-center">

        <div className="flex items-center gap-5">

          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <img src={Project} className="w-14" alt="" />
              <p className="font-medium">Projetos Realizados</p>
            </div>
            <h1 className="text-primary text-xl font-bold">250 +</h1>
          </div>

          <div className="w-[1px] h-44 bg-zinc-300">
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <img src={Customers} className="w-14" alt="" />
              <p className="font-medium">Satisfação dos Clientes</p>
            </div>
            <h1 className="text-primary text-xl font-bold">85 %</h1>
          </div>

          <div className="w-[1px] h-44 bg-zinc-300">
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <img src={Raise} className="w-14" alt="" />
              <p className="font-medium">Levantado por clientes</p>
            </div>
            <h1 className="text-primary text-xl font-bold">R$10 M</h1>
          </div>

          <div className="w-[1px] h-44 bg-zinc-300">
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <img src={Timeline} className="w-14" alt="" />
              <p className="font-medium">Anos no mercado</p>
            </div>
            <h1 className="text-primary text-xl font-bold">2 anos</h1>
          </div>
        </div>


      </div>
    </main>
  )
}
