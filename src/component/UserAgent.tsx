import agent from './userAgent.svg';

interface PropsI{
    right: number
}

export default function UserAgent(props: PropsI){

    return (
        <img style={
            {
                width: '20px',
                position: 'absolute',
                top: `90%`,
                right: `${props.right}%`,
                transform: 'rotate(180deg)'
            }
        }
             src={agent}
             alt=""/>
    )
}
