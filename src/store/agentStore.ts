import create from "zustand";
import {getRandomArbitrary} from "./random";

interface AgentStore{
    agents: Agent[]
    randomAgent: (count: number) => void
    moveEntity: () => void
    bullets: Bullet[]
    agentShoot: () => void
    userShoot: () => void
    userRight: number
    moveUser: (number: number) => void
}

interface Bullet{
    top: number
    right: number
    up: boolean
}

interface Agent{
    top: number
    right: number
    rotate: number
}

export const useAgentStore = create<AgentStore>((set, get) => ({
    agents: [],
    bullets: [],
    userRight: 50,
    randomAgent: (count: number) => {
        let copy = [...get().agents];

        for (let i = 0; i < count; i++){
            copy.push({
                top: getRandomArbitrary(-1, 0),
                right: getRandomArbitrary(2, 98),
                rotate: 0
            })
        }

        set({agents: copy})
    },
    moveEntity: () => {
        let copy = [...get().agents];

        const userLocation = get().userRight;

        let i = 0;

        let flag = false;

        for (let ag of copy){
            copy[i].top = ag.top + 0.05

            if (ag.top > 85 && (ag.right > userLocation && ag.right < userLocation + 5)){
                flag = true;
            }

            if (ag.top > 105){
                copy.splice(i, 1);
            }

            i++;
        }

        if (flag){
            set({
                userRight: 49,
                bullets: [],
                agents: []
            })

            return null
        }


        let bcopy = [...get().bullets];

        let bi = 0;

        for (let ag of bcopy){
            bcopy[bi].top += ag.up ? -0.15 : 0.15

            if (ag.top > 85 && (ag.right > userLocation && ag.right < userLocation + 5)){
                flag = true;
            }

            if (ag.top > 105 || ag.top < -5){
                bcopy.splice(bi, 1);
            }

            bi++;
        }

        if (flag){
            set({
                userRight: 49,
                bullets: [],
                agents: []
            })

            return null
        }

        set({agents: copy, bullets: bcopy})
    },
    agentShoot: () => {
        let copy =  [...get().bullets];
        let agents = [...get().agents];

        for (let ag of agents){
            copy.push({
                top: ag.top + 1,
                right: ag.right + 1,
                up: false
            })
        }

        set({bullets: copy})
    },
    userShoot: () => {
        let copy =  [...get().bullets];

        copy.push({
            top: 89,
            right: get().userRight + 1,
            up: true
        })

        set({bullets: copy})
    },
    moveUser: (move: number) => {

        set({userRight: get().userRight + move})
    }
}))
