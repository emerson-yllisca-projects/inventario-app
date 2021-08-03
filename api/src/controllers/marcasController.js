
const getAll = async(req , res) => {

    return res.json({
        ok:true,
        msg:'Get All Marcas'
    });
}

const create = async ( req , res ) => {

    return res.json({
        ok:true,
        msg:'Create Marca'
    });
}


module.exports = {
    getAll,
    create
}