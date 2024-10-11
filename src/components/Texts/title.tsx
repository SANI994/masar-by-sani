interface TitleProps{
      title:string;
      className?:string;
}

const Title= ({title,className}:TitleProps)=>{

      return (
            <h1 className={`text-[#334961] text-[40px] font-semibold ${className}`}>
           {title}
          </h1>
      )
}

export default Title