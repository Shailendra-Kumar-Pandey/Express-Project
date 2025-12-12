import express from 'express';
const router = express.Router();


// Create Get API
router.get("/getData", (req, res)=>{
    res.send({massage: "Student Data",
        result: [
            {
                name: "shailendra Pandey",
                age: 30
            },
            {
                name: "Gayatri Pandey",
                age: 27
            }
        ]
    })
})

export default router;