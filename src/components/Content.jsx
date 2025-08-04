import React, { useContext } from 'react'
import sunImg from "@i/sun.svg";
import tempImg from "@i/temp.svg";
import humidityImg from "@i/humidity.svg";
import pressureImg from "@i/pressure.svg";
import windImg from "@i/wind.svg";
import cloudImg from "@i/cloud.png";
import { Context } from '../context/Context';
import Loader from './Loader';
import { getIcon, getTime } from '../helpers';
function Content() {
    const {data, loading,error} = useContext(Context)
    if (loading) return <Loader/>
    if(error)return <h1>Bunday shaxar topilmadi!</h1>
    return (
        <div className='content'>
            <div className="content__left">
                <img src={getIcon(data.current.weather[0].main)} alt="" className="content__left-img" />
                <h1 className="content__left-title">
                    {Math.round(data.current.temp)}°
                </h1>
                <h2 className="content__left-today">Сегодня</h2>
                <p className="content__left-time">Время: {getTime(data.timezone)}</p>
                <p className="content__left-city">Город: {data.name}</p>
            </div>
            <div className="content__right">
                <img src={cloudImg} alt="" className="content__right-img" />
                <div className="content__right-item">
                    <div className="content__right-icon"><img src={tempImg} alt="" /></div>
                    <p className="content__right-title">Температура</p>
                    <p className="content__right-descr">{Math.round(data.current.temp)}° - ощущается как {Math.round(data.current.feels_like)}°</p>
                </div>
                <div className="content__right-item">
                    <div className="content__right-icon"><img src={humidityImg} alt="" /></div>
                    <p className="content__right-title">Давление </p>
                    <p className="content__right-descr">{data.current.pressure} мм ртутного столба - нормальное</p>
                </div>
                <div className="content__right-item">
                    <div className="content__right-icon"><img src={pressureImg} alt="" /></div>
                    <p className="content__right-title">Осадки</p>
                    <p className="content__right-descr">{data.current.humidity} %</p>
                </div>
                <div className="content__right-item">
                    <div className="content__right-icon"><img src={windImg} alt="" /></div>
                    <p className="content__right-title">Ветер</p>
                    <p className="content__right-descr">{data.current.wind_speed} м/с юго-запад - легкий ветер</p>
                </div>
            </div>
        </div>
    )
}

export default Content