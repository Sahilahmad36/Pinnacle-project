import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCloud, FaCloudMoonRain, FaCloudRain, FaCloudSun, FaSnowflake, FaSun, FaWind } from "react-icons/fa";
import { TiWeatherSunny } from "react-icons/ti";
import { FaTemperatureHigh } from "react-icons/fa";
import { BsFillCloudsFill } from 'react-icons/bs';
import { WiHumidity } from 'react-icons/wi';
import AOS from 'aos';  // AOS Import
import 'aos/dist/aos.css';  // AOS Stylesheet

const ResidentsOnlyWeather = () => {
    const [cityName, setCityName] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=EUEQ4LDRZAS7HY2ZSJTVV76JD&contentType=json`
                );
                setWeatherData(response.data);
            } catch (error) {
                setError('Error fetching weather data');
            } finally {
                setLoading(false);
            }
        };
        fetchWeather();
    }, [cityName]);

    return (
        <>
            <div className='h-[auto] w-[88%] mt-10 shadow-lg bg-[linear-gradient(-35deg,_#000428,_#004e92)] shadow-black ml-[6%] p-5 mb-5 text-white rounded-md' data-aos="fade-up">
                <h3 className='text-center'>{new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}</h3>
                <input
                    type="text"
                    onChange={(e) => setCityName(e.target.value)}
                    value={cityName}
                    placeholder='Search City Name'
                    className='w-[100%] border text-black border-black p-2 rounded-md mt-5'
                    data-aos="fade-up"
                    data-aos-duration="1500"
                />
                {
                    weatherData ? <div className='md:flex gap-10'>
                        <div className='w-[100%] h-[100%] mt-3'>
                            <h2 className='text-center text-[1rem] md:text-[1.3rem] font-[700]' data-aos="fade-up">CURRENT WEATHER</h2>
                            <div className='flex items-center justify-between'>
                                <h4 className='text-[0.7rem]  md:text-[1.1rem] font-[700] text-center' data-aos="fade-up">{weatherData?.resolvedAddress}<br />
                                    <span className='text-[0.6rem] md:text-[0.8rem] font-[500]'>
                                        Today {new Date().getDate()} {new Date().toLocaleString('default', { month: 'short' })}
                                    </span>
                                </h4>
                                <h4 className='text-[0.8rem] md:text-[1.1rem] font-[700] text-center' data-aos="fade-up">{weatherData?.currentConditions.temp} °C <br />
                                    <span className='text-[0.6rem] md:text-[0.8rem] font-[500]'>{weatherData?.currentConditions.conditions}</span>
                                </h4>
                                {
                                    weatherData?.currentConditions.icon === "partly-cloudy-day" ? <FaCloudSun className='text-[2rem] md:text-[4rem]' data-aos="fade-up" /> :
                                        weatherData?.currentConditions.icon === "cloudy" ? <FaCloud className='text-[2rem] md:text-[4rem]' data-aos="fade-up" /> :
                                            weatherData?.currentConditions.icon === "clear-day" ? <FaSun className='text-[2rem] md:text-[4rem]' data-aos="fade-up" /> :
                                                weatherData?.currentConditions.icon === "rain" ? <FaCloudRain className='text-[2rem] md:text-[4rem]' data-aos="fade-up" /> :
                                                    weatherData?.currentConditions.icon === "snow" ? <FaSnowflake className='text-[2rem] md:text-[4rem]' data-aos="fade-up" /> : <FaSun />
                                }
                            </div>
                            <h2 className='text-center text-[1rem] md:text-[1.3rem] font-[700] mt-4' data-aos="fade-up">AIR CONDITIONS</h2>
                            <div className='flex items-center justify-between mt-3'>
                                <h4 className='text-[0.8rem] md:text-[1.1rem] font-[700] text-center m-0 p-0 leading-[0.8rem]' data-aos="fade-up">
                                    <span className='text-[0.8rem] font-[500] flex items-center gap-2'> <FaTemperatureHigh className='text-[0.7rem] md:text-[1rem]' /> Real Feel</span>
                                    <br />
                                    {weatherData?.currentConditions.temp} °C
                                </h4>
                                <h4 className='text-[0.8rem] md:text-[1.1rem] font-[700] text-center m-0 p-0 leading-[0.8rem]' data-aos="fade-up">
                                    <span className='text-[0.8rem] font-[500] flex items-center gap-2'>
                                        <FaWind className='text-[0.7rem] md:text-[1rem]' />
                                        Wind</span>
                                    <br />
                                    {weatherData?.currentConditions.windspeed} m/s
                                </h4>
                                <h4 className='text-[0.8rem] md:text-[1.1rem] font-[700] text-center m-0 p-0 leading-[0.8rem]' data-aos="fade-up">
                                    <span className='text-[0.8rem] font-[500] flex items-center gap-2'>
                                        <BsFillCloudsFill className='text-[0.7rem] md:text-[1rem]' />
                                        Clouds</span>
                                    <br />
                                    {weatherData?.currentConditions.cloudcover}  %
                                </h4>
                                <h4 className='text-[0.8rem] md:text-[1.1rem] font-[700] text-center m-0 p-0 leading-[0.8rem]' data-aos="fade-up">
                                    <span className='text-[0.8rem] font-[500] flex items-center gap-2'>
                                        <WiHumidity className='text-[1rem] md:text-[1.4rem]' />
                                        Humidity</span>
                                    <br />
                                    {weatherData?.currentConditions.humidity}%
                                </h4>
                            </div>
                            <h2 className='text-center text-[1rem] md:text-[1.3rem] font-[700] mt-4' data-aos="fade-up">TODAY'S FORECAST</h2>
                            <p className='text-[0.6rem] md:text-[0.9rem] text-center text-blue-500' data-aos="fade-up">4 available forecasts</p>
                            <div className='flex items-center justify-center gap-2 mt-6 px-3'>
                                {
                                    weatherData?.days?.[0]?.hours?.slice(2, 6).map((item, i) => (
                                        <div className='bg-white bg-opacity-10 p-2 md:p-4 rounded-md flex items-center justify-between flex-col' key={i} data-aos="fade-up">
                                            <p className='text-[0.7rem] md:text-[1rem]'>{item?.datetime}</p>
                                            <TiWeatherSunny className='text-[1rem] md:text-[1.5rem] text-orange-400' />
                                            <h4 className='text-[0.7rem] md:text-[1.2rem] font-[700]'>{item?.feelslike} °c</h4>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='w-[100%] h-[100%]' data-aos="fade-up">
                            <h2 className='text-center text-[1rem] md:text-[1.3rem] font-[700] mt-2'>WEEKLY FORECAST</h2>
                            <div className=' mt-4 md:mt-0 md:h-[30vw] overflow-y-auto scrollbar'>
                                {
                                    weatherData?.days?.slice(0, 6).map((item, i) => (
                                        <div className='w-[100%] rounded-md flex items-center justify-between md:mb-4 mb-2 bg-white bg-opacity-10 md:p-4 p-2' key={i} data-aos="fade-up">
                                            <div>
                                                <h3 className='font-[700] text-[1rem]'>{new Date(item?.datetime).toLocaleDateString('en-US', { weekday: 'long' })}</h3>
                                                <p className='flex item-center gap-2 text-[0.7rem] md:text-[1rem]'>
                                                    {
                                                        item.icon === "partly-cloudy-day" ? <FaCloudSun className='text-[1rem] md:text-[1.4rem]' /> :
                                                            item.icon === "cloudy" ? <FaCloud className='text-[1rem] md:text-[1.4rem]' /> :
                                                                item.icon === "clear-day" ? <FaSun className='text-[1rem] md:text-[1.4rem]' /> :
                                                                    item.icon === "rain" ? <FaCloudRain className='text-[1rem] md:text-[1.4rem]' /> :
                                                                        item.icon === "snow" ? <FaSnowflake className='text-[1rem] md:text-[1.4rem]' /> : <FaSun />
                                                    }
                                                    {item?.conditions}</p>
                                            </div>
                                            <div>
                                                <p className='flex items-center gap-2 text-[0.8rem] md:text-[1.2rem]'>
                                                    <FaTemperatureHigh className='text-[0.7rem] md:text-[1rem]' /><span> {item?.temp} °C</span>
                                                </p>
                                                <p className='flex items-center gap-2 text-[0.8rem] md:text-[1.2rem]'>
                                                    <BsFillCloudsFill /> <span> {item?.cloudcover} %</span>
                                                </p>
                                            </div>
                                            <div>
                                                <p className='flex items-center gap-2 text-[0.8rem] md:text-[1.2rem]'>
                                                    <FaWind className='text-[0.7rem] md:text-[1rem]' /><span>{item?.windspeed} m/s</span>
                                                </p>
                                                <p className='flex items-center gap-2 text-[0.8rem] md:text-[1.2rem]'>
                                                    <WiHumidity className='text-[1.5rem]' /><span> {item?.humidity} %</span>
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div> : <div className='h-[83%] mt-[1%] w-[full] flex flex-col items-center justify-center'>
                        <FaCloudMoonRain className='text-[14rem] mt-20' />
                        <p className='text-[0.8rem] font-[500] mt-7 mb-20'>Explore current weather data and 6-day forecast of more than 200,000 cities!</p>
                    </div>
                }
            </div>
        </>
    );
};

export default ResidentsOnlyWeather;
