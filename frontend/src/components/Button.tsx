export default function Button({ text }: any) {
   return(
      <button 
         className={`px-8 py-0.5 border-t-4 border-l-4 border-r-4 border-b-4 border-t-neutral-400 border-l-neutral-400 border-b-neutral-800 border-r-neutral-600 bg-neutral-200 hover:bg-neutral-300`}
      >
         {text}
      </button>
   );
}

