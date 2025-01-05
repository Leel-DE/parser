import {FC} from "react";
import {titleComponentProps} from "../../types/interfaces.ts";


const Title: FC<titleComponentProps> = ({titleContent, modificationClass, description}) => {
    return (
        <>
            <h1 className={`main-Title text-6xl ${modificationClass}`}>
                {titleContent}
            </h1>
            <p>{description}</p>
        </>


    );
}

export default Title;