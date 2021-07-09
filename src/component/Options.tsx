import style from './options.module.css';
import pause from './Pause.svg';
import {useAgentStore} from "../store/agentStore";

export default function Options(){

    const {score} = useAgentStore();

    return (
        <div className={style.main}>
            <img src={pause} width={40} alt=""/>
            <h3>{score}</h3>
        </div>
    )
}
