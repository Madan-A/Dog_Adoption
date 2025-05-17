    import express from "express";
    import  {getDogProfile}  from "../controllers/DogProfile";

    const router = express.Router();


    router.get("/:id", getDogProfile);

    export default router;