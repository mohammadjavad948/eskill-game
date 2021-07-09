import style from './container.module.css';
import Options from "./component/Options";
import Agent from "./component/Agent";
import {useEffect} from "react";
import {useAgentStore} from "./store/agentStore";
import Bullet from "./component/Bullet";
import UserAgent from "./component/UserAgent";

export default function Container(){

    const {agents, randomAgent, moveEntity, bullets, agentShoot, userRight, userShoot, moveUser} = useAgentStore();

    useEffect(() => {

        setInterval(() => {

            randomAgent(2);

        }, 3000);

        setInterval(() => {
            agentShoot()
        }, 5000)

        setInterval(() => {
            moveEntity();
        }, 5)

        document.addEventListener('keydown', event)

    }, [])

    function event(e: any){

        if (e.code === 'Space'){
            userShoot();
        }

        if (e.code === 'ArrowRight'){
            moveUser(-1);
        }

        if (e.code === 'ArrowLeft'){
            moveUser(1);
        }

    }

    return (
        <div className={style.main}>
            <Options />
            {agents.map((el, i) => {
                return <Agent {...el} key={i} />
            })}
            {bullets.map((el, i) => {
                return <Bullet {...el} key={i} />
            })}
            <UserAgent right={userRight} />
        </div>
    )
}
