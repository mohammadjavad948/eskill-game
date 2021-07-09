import agent from './agent.svg';

interface PropsI{
    top: number
    right: number
    rotate: number
}

export default function Agent(props: PropsI){

    return (
        <img style={
            {
                width: '20px',
                position: 'absolute',
                top: `${props.top}%`,
                right: `${props.right}%`,
                transform: `rotate(${props.rotate}deg)`
            }
        }
             src={agent}
             alt=""/>
    )
}
