const timeAuth=(req,res,next)=>{
    const date1 = new Date();
    const date = date1.getHours();
    const day = date1.getDay()

    //const day = 1;

    if((date<17 && date>9) && (day!=0 && day!=1)){
        next()
    }
    else{
        res.status(400).sendFile("C:/Users/Mss/Desktop/express/pages/hourwork.html");
    }
}

module.exports=timeAuth