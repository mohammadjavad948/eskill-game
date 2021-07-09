import style from './container.module.css';
import Options from "./component/Options";
import Agent from "./component/Agent";

export default function Container(){
    return (
        <div className={style.main}>
            <Options />
            <Agent top={10} right={10} rotate={20}/>
        </div>
    )
}
