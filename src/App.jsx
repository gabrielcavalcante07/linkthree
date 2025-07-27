import "./App.css";
import { Button } from "./components/button";
import me from "./assets/me.png";
import fingerprint from "./assets/icons/fingerprint.svg"
import linkedin from "./assets/icons/linkedin.svg"
import github from "./assets/icons/github.svg"
import mail from "./assets/icons/mail.svg"

export function App() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col bg-zinc-900 relative overflow-hidden">
        <div className="relative w-screen h-1/2 left-2/4 -translate-x-2/4 md:mt-16">
          <img
            src={me}
            className="w-full h-full object-cover absolute top-0 left-2/4 -translate-x-2/4 z-0 rounded-3xl md:w-72 md:rounded-full md:"
            alt="my photo"
            />
          <div className="absolute bottom-0 w-full h-28 bg-gradient-to-b from-transparent via-zinc-900 to-zinc-900 z-10"> 
            <h1 className="text-white text-3xl flex justify-center font-semibold mt-14">Gabriel Cavalcante</h1>
            <h1 className="text-purple-600 text-xl flex justify-center font-semibold">Desenvolvedor FullStack</h1>
            </div>
        </div>

        <div className="mt-16 flex justify-center items-center flex-col gap-2">
          <Button
            icon={fingerprint}
            content="Portfolio"
            link="https://gcsantos.vercel.app"
          />
          <Button
            icon={linkedin}
            content="Linkedin"
            link="https://linkedin.com/in/gabrielcsantoss"
          />
          <Button
            icon={github}
            content="Github"
            link="https://github.com/gabrielcavalcante07"
          />
          <Button
            icon={mail}
            content="Gmail"
            link="mailto:contato.gcsantos@gmail.com"
          />
        </div>
      </div>
    </>
  );
}

