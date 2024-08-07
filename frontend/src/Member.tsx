import Button from "./components/Button";
import MembersPg from "./components/Members/MembersPg";

export default function Member() {
   return(
      <div className="flex justify-center">
         <div className="flex flex-col items-center p-20">
            <h2 className="text-4xl font-bold pb-20">
               Members
            </h2>

            <div className="pb-20">
               <Button 
                  text={'New'}
                  funct={null}
               />
            </div>


            <MembersPg/>
         </div>
      </div>
   );
}

