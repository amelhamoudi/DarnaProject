package com.darna.services;

import java.util.List;
import com.darna.models.UserAction;


public interface UserParticiperActionService {
	public UserAction participerAction(Long idU, Long idA);
	public UserAction getUserActionById(long idU, long idA) ;
	public List<UserAction> getAllUserAction();
	public List<UserAction> findActionByUser(long idU);
	public List<UserAction> findUserByAction(long idA);
	
	public UserAction autoriserParticipation(Long idU, Long idA,Boolean autorisation);
	public List<UserAction> getListDemandeParticipation();
	public List<UserAction> getListParticipationAutorise();

}
