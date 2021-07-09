import create from "zustand";
import {getRandomArbitrary} from "./random";

interface AgentStore{
    agents: Agent[]
    randomAgent: (count: number) => void
}

interface Agent{
    top: number
    right: number
    rotate: number
}

export const useAgentStore = create<AgentStore>((set, get) => ({
    agents: [],
    randomAgent: (count: number) => {
        let copy = [...get().agents];

        for (let i = 0; i <= count; i++){
            copy.push({
                top: getRandomArbitrary(-5, 0),
                right: getRandomArbitrary(2, 98),
                rotate: getRandomArbitrary(-45, 45)
            })
        }

        set({agents: copy})
    }
}))
