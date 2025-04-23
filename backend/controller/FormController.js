const FormModel = require("../model/FormModel");


exports.GetSubmitForm = async (req, res) => {
    try{
        const FormData = req.body;
        const createfrom = await FormModel.create({FormData});
        if (!createfrom) {
            return res.status(400).json({
                success: false,
                message: "Form submission failed",
            });
        }
        
        
        await form.save();
        res.status(200).json({ message: "Form submitted successfully" });

    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"});
    }
}

exports.GetFormData = async (req, res) => {
    try{
        const formData = await FormModel.find();
        res.status(200).json({
            success: true,
            formData
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"});
    }
}