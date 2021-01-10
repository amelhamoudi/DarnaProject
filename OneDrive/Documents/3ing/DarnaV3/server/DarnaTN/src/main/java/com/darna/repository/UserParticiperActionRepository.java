package com.darna.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.darna.models.Action;
import com.darna.models.User;
import com.darna.models.UserAction;
import com.darna.models.pk.UserActionKey;




@Repository
public interface UserParticiperActionRepository extends CrudRepository<UserAction,Long> {
	Optional<UserAction> findById(UserActionKey id);
	
	List<UserAction> findActionByUser(User user);
	List<UserAction> findUserByAction(Action action);

	List<UserAction> findByAutorisation(Boolean autorisation);

}
