/**
 *  เริ่มต้นสร้างโปรแจค SmartInventory 
 * ด้วย nodejs express
 */
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()

// import router
const fronendRouter = require('./routes/url')

const Server = () => {
    
    /** ปิดใช้งาน x-powered-by  */
    /**
     *  หมายเหตุที่ปิด x-powered-by
     *   เป็น “Header” ปรากฏในส่วน “Response HTTP”
     *  ที่ส่งมาจาก “Server” ซึ่งสามารถทำให้ทราบถึงรายละเอียดของ
     *  “Web” หรือ “App server” และ “Version
    */
    app.set('x-powered-by', false)

    // กำหนด Folder สำหรับบอกตัว express ว่าไฟล์ css image อยู่ path ไหน
    app.use(express.static('public'))
    //กำหนด Template Engine
    app.use(expressLayouts)
    app.set('layout','./layouts/frontend')
    // set the view engine to ejs
    app.set('view engine', 'ejs')


    app.use(express.urlencoded({extended:true}))
    app.use(express.json())


    //เรียกใช้งาน Routes
    app.use('/', fronendRouter)

    app.listen(1100, () => {
        console.log(`Run servers is http//localhost:1100`);
    })
}
Server()