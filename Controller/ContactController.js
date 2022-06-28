const contact = require("../modal/contact");

exports.addContact = async (req,res)=>{
    var data = JSON.parse(JSON.stringify(req.body));
    console.log(data)
    var isExist = await contact.find({phone:data.phone})
    console.log(isExist)
    if(isExist.phone)
    {
        res.send({message:"Phone number already exist"});
        return;
    }
    else if(!data.name =="" && !data.phone=="")
    {
        var createContact = await contact.create({
            name:data.name,phone:data.phone,createdOn:Date.now().toLocaleString(),updatedOn:Date.now().toLocaleString()
        })
        if(createContact)
        {
            res.send({isSuccess:true,message:"Contact Added Successfully"});
        }
    }else{
        res.send({message:"Something is missing"});
    }
}

exports.deleteContact = async(req,res)=>{
    var data = req.params.id;
    console.log("data-->",data);
    if(data)
    {
        var deleteResponce = await contact.deleteOne({_id:data});
        if(deleteResponce)
        {
            res.send({isSuccess:true,message:"Contact deleted Successfully"})
            console.log("Deleted Successfully");
        }
    }
}

exports.updateContact = async (req,res)=>{
    var data = JSON.parse(JSON.stringify(req.body));
    console.log(data);
    var id=req.params.id;
    if(!data.name=="" && !data.phone==""){
        var newData = {
            name:data.name,phone:data.phone,createdOn:Date.now().toLocaleString,updatedOn:Date.now().toLocaleString()
        }
        const updateResponse = await contact.updateOne(
            {_id:id},
            {$set:newData}
        )
        if(updateResponse){
            res.send({isSuccess:true,message:"Contact Updated Successfully"})
        }
    }else{
        res.send({message:"Provide all data"})
    }
}

exports.getData = async (req,res)=>{
    var data = await contact.find({});
    if(data)
    {
        res.send({isSuccess:true,message:"Data fetches Successfully",data:data});
    }
}

exports.oneData = async (req,res)=>{
    var data = req.params.id;
    console.log("62",data)
    var data = await contact.findOne({_id:data});
    if(data)
    {
        res.send({isSuccess:true,data:data});
    }
}

exports.checkNumber = async (req,res)=>{
    console.log(req.body);
    const phoneNumber =[];
    const phone = await contact.find({});
    if(phone && phone.length){
    for(var elem of phone)
    {
        phoneNumber.push(elem)
    }}
    if(phoneNumber.length){
        res.send({data:phoneNumber});
    }
}