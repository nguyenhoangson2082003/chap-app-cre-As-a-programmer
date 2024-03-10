import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async(req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({error: "Unauthorized - No Token Provided"});
        }

        const decodeed = jwt.verify(token, process.env.JWT_SECRET);

        if(!decodeed){
            return res.status(401).json({error: "Unauthorized - Invalid Token"});
        }

        const user = await User.findById(decodeed.userId).select("-password");

        if(!user){
            return res.status(401).json({error: "User not found"});
        }

        req.user = user;

        next();

    } catch (error) {
        console.log(`Error in sendMesprotectRoutesage middelware: ${error.message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default protectRoute;
