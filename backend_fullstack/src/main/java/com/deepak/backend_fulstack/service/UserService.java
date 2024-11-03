package com.deepak.backend_fulstack.service;

import com.deepak.backend_fulstack.model.User;
import com.deepak.backend_fulstack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    UserRepository userRepo;

    public String addUser(User newUser) {
        if(!userRepo.existsByEmail(newUser.getEmail()) && !userRepo.existsByUsername(newUser.getUsername())) {
            userRepo.save(newUser);
            return "success";
        }
        return "Failed to add..Email or Username already exists!!!";
    }

    public List<User> getusers() {
        return userRepo.findAll();
    }

    public Optional<User> getuser(long id) {
        if(userRepo.existsById(id)){
            return userRepo.findById(id);
        }
        return null;
    }


    public String updateUser(User newUser, Long id) {
            String a=new String();
           try{
               Set<User> user=userRepo.findByEmail(newUser.getEmail());
               if(user.size()>1 || (user.size()>0 && user.stream().toList().get(0).getId()!=id)){
                   return "Email already exist with other user";
               }
               user.addAll(userRepo.findByUsername(newUser.getUsername()));
               if(user.size()>1 || (user.size()>0 && user.stream().toList().get(0).getId()!=id)){
                   return "Username already exist with other user";
               }
               userRepo.findById(id)
                       .map(user1 -> {
                           user1.setUsername(newUser.getUsername());
                           user1.setName(newUser.getName());
                           user1.setEmail(newUser.getEmail());
                           userRepo.save(user1);
                           return "success";
                       });
           }
           catch (Exception e){
               return e.toString();
           }
        return "success";
    }

    public String deleteuser(long id) {
        if(!userRepo.existsById(id)) return "User Id not found";
        try{
            userRepo.deleteById(id);
            return "User deleted successfully...";
        } catch (Exception e) {
            return e.toString();
        }
    }
}
