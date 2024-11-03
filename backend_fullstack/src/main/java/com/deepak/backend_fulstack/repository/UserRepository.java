package com.deepak.backend_fulstack.repository;

import com.deepak.backend_fulstack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface UserRepository extends JpaRepository<User,Long> {
    boolean existsByEmail(String email);

    boolean existsByUsername(String username);


    Set<User> findByEmail(String email);

   Set<User> findByUsername(String username);


}
