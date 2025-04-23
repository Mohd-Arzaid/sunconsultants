const FormModel = require("../model/FormModel");


exports.GetSubmitForm = async (req, res) => {
    try{
        const { name, email, phone, message, FormSource } = req.body;
        const form = new FormModel({
            name,
            email,
            phone,
            message,
            FormSource
        });
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