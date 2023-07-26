package com.backend.demo.sevice;

import com.backend.demo.model.Student;
import com.backend.demo.repo.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public Student addStudent(Student student) {
        System.out.println(student);
        if(student == null){
            throw new NullPointerException("STUDENT IS NULL");
        }
        return studentRepository.save(student);
    }

    public List<Student> getAllStudent() {
        List<Student> student = studentRepository.findAll();
        if(student.isEmpty()){
            throw new NoSuchElementException("DB IS EMPTY");
        }
        return studentRepository.findAll();
    }

    public Student deleteStudentById(Integer id){
        Optional<Student> student = studentRepository.findById(id);
        if(student.isEmpty()){
            throw new NoSuchElementException("NO STUDENT FIND WITH THIS ID");
        }
         studentRepository.deleteById(id);
         return student.get();
    }

    public Student updateStudentById(Integer id, Student studentObj){
        Optional<Student> student = studentRepository.findById(id);
        if(student.isEmpty()){
            throw new NoSuchElementException("NO STUDENT FIND WITH THIS ID");
        }
        Student studentOld = student.get();
        studentOld.setName(studentObj.getName());
        studentOld.setEmail(studentObj.getEmail());
        return studentRepository.save(studentOld);
    }
}
