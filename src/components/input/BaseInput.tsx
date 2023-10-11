interface BaseInputProps {
  label?: string;
  placeholder?: string;
  type?: string;
}
export const BaseInput = ({ label, placeholder, type }: BaseInputProps) => {
  return (
    <div className={"h-[100px] mt-5 mb-5"}>
      <label className={"text-[20px]"}>{label}</label>
      <input
        type={type}
        className={
          "border-0 rounded-full w-full h-[60%] bg-[#F5F5F5] pl-5 font-light text-[20px] leading-[25px" +
          "]"
        }
        placeholder={placeholder}
      />
    </div>
  );
};
