
interface Props{
    top: number
    right: number
}

export default function Bullet(props: Props){

    return (
        <div style={{
            width: '5px',
            height: '10px',
            position: 'absolute',
            backgroundColor: 'white',
            top: `${props.top}%`,
            right: `${props.right}%`,
        }} />
    )
}
