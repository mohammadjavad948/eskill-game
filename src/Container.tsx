import style from './container.module.css';
import Options from "./component/Options";
import Agent from "./component/Agent";
import {useEffect} from "react";
import {useAgentStore} from "./store/agentStore";

export default function Container(){

    const {agents, randomAgent, moveEntity} = useAgentStore();

    useEffect(() => {

        setInterval(() => {

            randomAgent(5);

        }, 3000);

        setInterval(() => {
            moveEntity();
        }, 5)

    }, [])

    return (
        <div className={style.main}>
            <Options />
            {agents.map((el, i) => {
                return <Agent {...el} key={i} />
            })}
        </div>
    )
}
