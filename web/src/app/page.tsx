import { User } from 'lucide-react'

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-green-700 opacity-50 blur-full"/>
        {/* Stripes */}
        <div className="absolute right-2 bottom-0 top-0 w-2 bg-stripes"></div>
        {/* Sign in */}
        <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500"/>
          </div>
          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas memórias!
          </p>
        </a>
        {/* Hero */}
        <div className="space-y-5">
          
          <div className="max-w-[420px] space-y-1">
            <h1 className="mt-5 text-5xl font-bold leading-right text-gray-50">Sua cápsula do tempo</h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
            </p>
          </div>

          <a href="" className="inline-block rounded-full bg-green-400 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600">
            CADASTRAR LEMBRANÇA
          </a>
        </div>
        {/* Copy */}
        <div className="text-small leading-relaxed text-gray-200">
          Realizado no curso da Rocketseat.
        </div>
      </div>
      {/* Rigth */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justifty-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, começe a{' '} 
            <a href="" className="underline hover:text-gray-50">
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
