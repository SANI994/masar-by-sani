
type RoleCardProps = {
      title:string
      textColor?:string
      className?:string
      onSelected:()=>void
}

const RoleCard = ({title,textColor,className, onSelected}:RoleCardProps)=>{
      const isTextColor = !!textColor
     
      return (
<div onClick={onSelected} className={`flex items-center justify-center w-40 m-4 border border-black ${className}`}>
     <p className={`${ isTextColor ? textColor :"text-black"} p-2 text-center`}>{title}</p> 
</div>
      )


}

export default RoleCard