'use client';
import { Collaborator } from './collaborator';
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from '@/app/(landing)/components/icons';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const CollaboratorsModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-transparent border-none shadow-none p-0 gap-6 hover:bg-transparent"
          variant="outline"
        >
          <Facebook />
          <Instagram />
          <Youtube />
          <Linkedin />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[70%] max-h-[80%] overflow-y-auto bg-[#5D8966] rounded-[30px]">
        <DialogTitle className="font-bold text-3xl md:text-6xl text-center mt-6 md:mt-10">
          ¡Gracias por tu tiempo!
        </DialogTitle>
        <div className="flex-wrap flex flex-row gap-x-6 md:gap-x-8 gap-y-10 p-10 justify-center items-center">
          <Collaborator
            nameCollaborator="Govanni González Rivera"
            rolCollaborator="Front end"
            linkCollaborator="https://www.linkedin.com/in/govanni-rivera-desarrollador-full-stack/"
          />
          <Collaborator
            nameCollaborator="Juan Pablo Quintana"
            rolCollaborator="Front end"
            linkCollaborator="https://www.linkedin.com/in/juan-pablo-quintana-685aa7165/"
          />
          <Collaborator
            nameCollaborator="Valeria graciela Buey"
            rolCollaborator="Tester"
            linkCollaborator="https://www.linkedin.com/in/valeria-buey-82764b1b0/"
          />
          <Collaborator
            nameCollaborator="Arnoldo José Felce Rondon"
            rolCollaborator="Tester"
            linkCollaborator="https://www.linkedin.com/in/arnoldo-felce-rond%C3%B3n/"
          />
          <Collaborator
            nameCollaborator="Scarlet Vargas"
            rolCollaborator="Front end"
            linkCollaborator="https://www.linkedin.com/in/scarletvargas-systems-engineer/"
          />
          <Collaborator
            nameCollaborator="Daniel Torres"
            rolCollaborator="Back end"
            linkCollaborator="#"
          />
          <Collaborator
            nameCollaborator="Emanuel Andrés Capo"
            rolCollaborator="Back end"
            linkCollaborator="https://www.linkedin.com/in/emanuel-capo/"
          />
          <Collaborator
            nameCollaborator="Emilia Vidal "
            rolCollaborator="Diseñadora UX/UI"
            linkCollaborator="https://www.linkedin.com/in/vidalemilia/"
          />
          <Collaborator
            nameCollaborator="Eynar Alvarez"
            rolCollaborator="Front end"
            linkCollaborator="https://www.linkedin.com/in/eynaralvarez/"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
