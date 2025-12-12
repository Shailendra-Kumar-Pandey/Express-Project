import express from 'express';
const router = express.Router();


// Create Get API
router.get("/getStudentData", (req, res)=>{
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

// POST API
router.post("/addNewStudent", (req, res)=>{
    const studentData = req.body;
    console.log(studentData);
    res.send({massage : "Data Receved Successfully..."}) 
})

// GET Teacher Data
router.get("/getTeacherData", (req, res)=>{
    res.send({massage: "Teacher Data",
        result: [
            {
                name: "Sanjay Panchdane",
                age: 50
            },
            {
                name: "Manisha Panchdane",
                age: 45
            }
        ]
    })
})


export default router;