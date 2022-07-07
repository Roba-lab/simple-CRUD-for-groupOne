import mysql from 'mysql';
import {userInfo} from './schema.js'

let my_connector = mysql.createConnection({
    user:"rediat",
    password :"redi",
    host :"localhost",
    database:"reidat"
});

my_connector.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("database connected")
    }
})

// middleware
export const Logic = (req,res,next)=>{

    const {first_name,last_name,phone_number,address} =req.body


    // Create table
    my_connector.query(userInfo,(err,row,fields)=>{
        if(err){
            console.log(err)
        }else{
            console.log("file to be uploaded")
        }

           // insert data to table
        my_connector.query(`insert into user_data (first_name,last_name,phone_number,address) values ('${first_name}','${last_name}','${phone_number}','${address}')`)
        
           // update data in the table
                let update_firstName = `update user_data set first_name = 'teshome' where first_name='group one' `   
                my_connector.query(update_firstName,(err,row,fields)=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log("first name updated")
                    }
                })
           // to delete data in the data base 
                    let delete_firstName =`delete from user_data where first_name = 'teshome'`;
                    my_connector.query(delete_firstName,(err,result)=>{
                        if(err){
                            console.log(err)
                        }else{
                            console.log("entry deleted")
                        }
                    })
    })
   res.end("<h1>file uploaded!!!</h1>")
}


