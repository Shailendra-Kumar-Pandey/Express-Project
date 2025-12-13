import express from 'express';
import routerStudent from './Routers/studentRouter.js';
import routerTeacher from './Routers/teacherRouter.js';

const app = express();

//  Build in Middleware
app.use(express.json());

// Router 
app.use('/student',routerStudent);
app.use('/teacher',routerTeacher);

app.listen(5050, ()=>{
    console.log("Server is Running...");
})
