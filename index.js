import express from 'express';
import { dbConn } from './utility/DbUtil.js';
import UserRout from './routes/UserRoutes.js';
import SeatRout from './routes/SeatRoutes.js';
import testR from './routes/testRoutes.js';
import cors from 'cors';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use('/user',UserRout);
app.use('/seat',SeatRout);
app.use('/test',testR)
app.listen(PORT,()=>{
    console.log(PORT);
    dbConn();
})