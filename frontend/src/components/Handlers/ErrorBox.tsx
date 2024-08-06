export default function ErrorBox({ msg }: any) {
   return(
      <div className={`absolute top-8 w-fit h-fit flex justify-center items-center border border-red-900`}>
         <div className="text-center p-10 bg-red-400 text-red-900">
            <h3 className="mb-3 text-2xl">Error:</h3>
            <p className="text-xl">{msg}</p>
         </div>
      </div>
   );
}
