import create from "zustand";
import {getRandomArbitrary} from "./random";

interface AgentStore{
    agents: Agent[]
    randomAgent: (count: number) => void
    moveEntity: () => void
    bullets: Bullet[]
}

interface Bullet{
    top: number
    right: number
}

interface Agent{
    top: number
    right: number
    rotate: number
}

export const useAgentStore = create<AgentStore>((set, get) => ({
    agents: [],
    bullets: [],
    randomAgent: (count: number) => {
        let copy = [...get().agents];

        for (let i = 0; i <= count; i++){
            copy.push({
                top: getRandomArbitrary(-5, 0),
                right: getRandomArbitrary(2, 98),
                rotate: 0
            })
        }

        set({agents: copy})
    },
    moveEntity: () => {
        let copy = [...get().agents];

        let i = 0;

        for (let ag of copy){
            copy[i].top = ag.top + 0.05

            if (ag.top > 105){
                copy.splice(i, 1);
            }

            i++;
        }

        set({agents: copy})
    }
}))
