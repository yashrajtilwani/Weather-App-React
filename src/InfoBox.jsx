import './InfoBox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }){

    let Humid = "https://images.unsplash.com/photo-1605035015406-54c130d0bf89?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let Hot = "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let Cold = "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className='InfoBox'>
            <h1 style={{display: "none"}}>weather Info - </h1>
            <div className='card'>
            <Card sx={{ width: 350, maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="weather img"
                height="140"
                image= { info.humidity > 80 ? Humid : (info.temp > 15 ? Hot : Cold)}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {info.city} { info.humidity > 80 ? <ThunderstormIcon /> : (info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <b>Temperature</b> {info.temp} <br />
                    <b>Humidity</b> {info.humidity} <br />
                    <b>Min Temp</b> {info.minTemp} <br />
                    <b>Max Temp</b> {info.maxTemp} <br />
                    Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                </Typography>
              </CardContent>
            </Card>
            </div>
        </div>
    )
}