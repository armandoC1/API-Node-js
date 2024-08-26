import { Request, Response } from "express";
import { Student } from "../models/estudiante.model";

export const createStudent = (req: Request, res : Response) => {
  const {nombre, apellido, codigo, grado} = req.body;  
  Student.create(nombre, apellido, codigo, grado, (err, result) => {
    if(err){
        return res.status(500).json({ error : err.message });
    }
    res.status(201).json({ id : result.insertId, nombre, apellido, codigo, grado});
  });
};

export const getAllStudents = (_req : Request, res : Response) => {
    Student.getAll((err, results) =>{
        if(err){
            return res.status(500).json({error : err.message});
        }
        res.status(200).json(results);
    });
};

export const getStudentById = (req : Request, res : Response) => {
    const {id} = req.params;
    Student.getById(Number(id),(err, result) =>{
        if(err){
            return res.status(500).json({error : err.message});
        }
        res.status(200).json(result);
    } );
};

export const updateStudent = (req : Request , res : Response) => {
    const {id} = req.params;
    const {nombre, apellido, codigo, grado} = req.body;
    Student.update(Number(id), nombre, apellido, codigo, grado, (err) => {
        if(err){
            return res.status(500).json({error : err.message});
        }
        return res.status(200).json({message : 'Student update'});
    });
};

export const deleteById = (req : Request, res : Response) => {
    const {id} = req.params;
    Student.delete(Number(id), (err) =>{
        if(err){
            return res.status(500).json({error : err.message});
        }
        res.status(200).json({mesage : 'Studente delete success '});
    })
};

