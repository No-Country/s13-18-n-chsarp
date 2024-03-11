import Link from 'next/link';

interface CollaboratorProps {
  nameCollaborator: string;
  rolCollaborator: string;
  linkCollaborator: string;
}

export const Collaborator = ({
  nameCollaborator,
  rolCollaborator,
  linkCollaborator,
}: CollaboratorProps) => {
  return (
    <Link
      href={linkCollaborator}
      rel="noreferrer"
      target="_blank"
      className="flex items-center flex-col justify-center gap-1"
    >
      <div className="border border-white rounded-[10px] h-16 w-16"></div>
      <p className="font-semibold text-base text-white">{nameCollaborator}</p>
      <p className="font-light text-sm italic text-white">{rolCollaborator}</p>
    </Link>
  );
};
