

export const saveSentEmail = async (req, res) =>{

    try{
        const data = req.body;
        console.log(data, "hii dalmik");

    } catch(error) {
        res.status(500).json(error.message);
    }

}