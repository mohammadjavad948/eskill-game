import style from './container.module.css';
import Options from "./component/Options";

export default function Container(){
    return (
        <div className={style.main}>
            <Options />
        </div>
    )
}
