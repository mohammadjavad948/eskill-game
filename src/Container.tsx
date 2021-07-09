import style from './container.module.css';
import Options from "./component/Options";
import Agent from "./component/Agent";
import {useEffect} from "react";
import {useAgentStore} from "./store/agentStore";
import Bullet from "./component/Bullet";

export default function Container(){

    const {agents, randomAgent, moveEntity, bullets, agentShoot} = useAgentStore();

    useEffect(() => {

        setInterval(() => {

            randomAgent(5);

        }, 3000);

        setInterval(() => {
            agentShoot()
        }, 2000)

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
            {bullets.map((el, i) => {
                return <Bullet {...el} key={i} />
            })}
        </div>
    )
}
