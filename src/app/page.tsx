'use client'

import {useChat} from 'ai/react';
import { Input } from 'postcss';



export default function HomePage() {

  const {handleInputChange, handleSubmit, messages, isLoading, input} = useChat();

  console.log(messages);

  return (
    <section className='flex justify-center items-center h-screen'>

      <form className='max-w-xl w-full text-white' onSubmit={handleSubmit}>
<div className='text-white max-h-96 h-full overflow-y-auto'>
        {messages.map(m => (

          <div className={`mb-2 p-2 text-white font-bold rounded-md flex flex-col
          ${m.role === "assistant" ? "self-end bg-gray-800" 
          : 
          "self-start bg-blue-700"}`} 
          key={m.id}>

            <span className={`text-xs text-white ${m.role === "assistant" ? "text-right" 
            : 
            "text-left"} `}>

              {m.role}
            </span>

            {m.content}

          </div>
        )
        
        )}

</div>
<div className='flex justify-between my-4'>

  <label className='text-white block font-bold uppercase'>
    escribe algo...      
    </label>


</div>

<textarea 
className='text-black bg-slate-300 px-3 py-2 w-full rounded-md'
placeholder='Escribe tu busqueda'
rows={4}
value={input}
onChange={handleInputChange}
>

</textarea>

<button 
className='text-white font-bold bg-blue-600 focus:outline-none uppercase rounded-md py-3 px-5 my-3 disabled:opacity-50'
disabled={isLoading || !input

}
>


  Enviar
  </button>

      </form>
    </section>
  )
}
