package com.deepak.backend_fulstack.controller;

import com.deepak.backend_fulstack.model.User;
import com.deepak.backend_fulstack.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    UserService userService;


    @PostMapping("/user")
    String addUser(@RequestBody User newUser){
        return userService.addUser(newUser);

    }

    @GetMapping("/users")
    ResponseEntity<List<User>> getusers(){
        List<User> users=new ArrayList<>();
        try {
            users=userService.getusers();
            return new ResponseEntity<>(users,HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.toString());
        }
        return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping("/user/{id}")
    Optional<User> getuser(@PathVariable long id){
        return userService.getuser(id);
    }

    @PutMapping("/user/{id}")
    String updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userService.updateUser(newUser,id);

    }

    @DeleteMapping("/user/{id}")
    String deleteuser(@PathVariable long id){
        return userService.deleteuser(id);
    }



}
