package com.chetankansal.journalapp.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.chetankansal.journalapp.entity.User;

public interface UserRepository extends MongoRepository<User, ObjectId> {

    User findByUserName(String userName);

    void deleteByUserName(String userName);
}
