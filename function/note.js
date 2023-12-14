const {Note}=require('../models/Note')
const createnote= async (req,res)=>{
    const {desc,title,status}=Note
    const note = await Note({desc,title,status})
    note.save();
    res.send("hii i am createnote")
}

const searchnote= async (req,res)=>{
    const {title}=Note
    const notes = await Note.find({title})
    res.send({status:true,notes})
    
}
const deletenote=(req,res)=>{
    res.send("hii i am deletenote")
}

module.exports={createnote,deletenote,searchnote}