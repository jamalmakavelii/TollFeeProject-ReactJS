import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import './db.js'
import { AdminRouter } from './routes/auth.js';
import { userRouter } from './routes/user.js';
import { tollgateRouter } from './routes/tollgate.js';
import { Tollgate } from './models/Tollgate.js'
import { User } from './models/User.js'
import { Admin } from './models/Admin.js'

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(cookieParser())
dotenv.config()
app.use('/auth', AdminRouter)
app.use('/user', userRouter)
app.use('/tollgate', tollgateRouter)

app.get('/dashboard', async (req, res) => {
    try {
        const user = await User.countDocuments()
        const admin = await Admin.countDocuments()
        const tollgate = await Tollgate.countDocuments()
        return res.json({ok: true, user, tollgate, admin})
    } catch(err) {
        return res.json(err)
    }
})

app.listen(process.env.PORT, () => {
    console.log("Server is Running");
})