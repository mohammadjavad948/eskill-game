import style from './options.module.css';
import pause from './Pause.svg';

export default function Options(){

    return (
        <div className={style.main}>
            <img src={pause} width={40} alt=""/>
            <h3>700</h3>
        </div>
    )
}
