interface BaseInputProps {
    label?: string,
    placeholder?: string,
}
export const BaseInput = ({label, placeholder}: BaseInputProps) => {
  return(
      <div className={"h-[100px] mt-10 mb-10"}>
          <h1
            className={"font-medium text-[28px] leading-[25px] h-[40%] text-left"}
          >{label}</h1>

          <input className={"border-0 w-full h-[60%] bg-[#F5F5F5] pl-5 font-light text-[20px] leading-[25px" +
              "]"} placeholder={placeholder} />
      </div>
  )
}