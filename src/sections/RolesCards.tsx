"use client";
import { RolesList } from "@/app/constants";
import RoleCard from "@/components/RoleCard";

interface RolesCardsProps{
  onRoleSelected:(id:number)=>void
}


const RolesCards = ({ onRoleSelected }: RolesCardsProps) => {
  

  return (
    <section className="flex justify-center w-full flex-wrap  p-7">
      {RolesList.map((role) => {
        return (
          <RoleCard
            key={role.id}
            onSelected={() => onRoleSelected(role.id)}
            title={role.name}
            textColor="text-[#5CECCE]"
            className="cursor-pointer border-[#5CECCE] text-[#5CECCE]"
          />
        );
      })}
    </section>
  );
};

export default RolesCards;
