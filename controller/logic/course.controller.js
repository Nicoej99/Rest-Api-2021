/** Dto */
const CourseDto = require("../../model/dto/Course.dto");

const config = require("config");

exports.createCourse = (req, res, next) =>{
    
    let Course ={
        code: req.body.code,
        name: req.body.name
    };
    CourseDto.create(Course, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
            res.status(201).json(
                {
                    info: data
                }
            );
        });
    };

exports.updateCourse = (req, res, next) =>{
    let Course ={
        code: req.body.code,
        name: req.body.name
    };
    CourseDto.update({_id: req.body.id}, Course, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
                {
                    info: data
                }
            );
        
    });
};

exports.getAll = (req, res, next) =>{
    
    CourseDto.getAll({}, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
                {
                    info: data
                }
            );
        
    });
};

exports.deleteCourse = () =>{
    
    CourseDto.delete({_id: req.body.id}, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
        
    });
};