import express, { urlencoded } from "express"
import dotenv from "dotenv"
import cors from "cors"
import session from "express-session"
import connectDB from "./db/database.js"
import UserRoute from "./routes/user.js"
import passport from "./utils/passport.js"
import { GoogleProvider } from "./utils/GoogleStrategy.js"
const app = express()
dotenv.config()
connectDB();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(session({
    secret:'#$%^#&&#@_!w',
    resave:false,
    saveUninitialized:false
}))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(GoogleProvider)
const PORT = process.env.PORT || 3000;
app.use('/api/v1/auth',UserRoute)
app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`)
})