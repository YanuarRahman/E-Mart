exports.getAllCategories = (req, res) => {
    // console.log(req.requestTime)
    res.status(200).json({
        status: "sucess",
        data: [{
            id: "1",
            name: "Laptop"
        },{
            id:"2",
            name:"Sarung"
        }]
    })
} 

exports.addCategory = (req,res) => {
    let nama = req.body.name;
    let desc = req.body.desc;


    if (!nama && !desc){
        return res.status(400).json({
            status: "failed",
            error: "Add Data FAiled !!!"
        })
    }

    return res.status(200).json({
        status: "sucess",
        message : "Data Sucess added !"
    })
} 