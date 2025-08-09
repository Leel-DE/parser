interface BlueBtnProps {
    text:string,
}
 
const BlueBtn: React.FC<BlueBtnProps> = ({text}) => {
    return (
        <button className="w-full rounded-xl bg-gray-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-black transition-colors">{text}</button>
      );
}
 
export default BlueBtn;