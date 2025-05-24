import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./InfoBox.css"
import Typography from '@mui/material/Typography';
function InfoBox(info) {
    let INIT_URL ="https://images.unsplash.com/photo-1641970304222-b2b332808a4b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
      <div className="InfoBox">
       
        <div className='CardInfo'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {/* <div>temperature = {info.temp}&deg:C</div> */}   
         {/* In JSX, &deg; only works inside a string, not inside JavaScript expressions ({}).
 */}
         <p>Temperature = {info.info.temp}°C</p>
         <p>Humidity ={info.info.humidity}</p>
         <p>Min Temp = {info.info.tempMin}°C</p>
         <p>Max Temp = {info.info.tempMax}°C</p>
         <p> The weather can be described as <i>{info.info.weather} </i> and feelslike  {info.info.feelslike}</p>
        </Typography>
      </CardContent>
    </Card>
      </div>
      </div>
    );
  }
  
  export default InfoBox; // ✅ this line is what fixes the error
  