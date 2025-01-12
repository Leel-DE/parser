interface BlueBtnProps {
    text:string,
}
 
const BlueBtn: React.FC<BlueBtnProps> = ({text}) => {
    return (
        <button>{text}</button>
      );
}
 
export default BlueBtn;