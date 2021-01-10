package com.darna.services.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.darna.models.Action;
import com.darna.repository.ActionRepository;
import com.darna.services.ActionService;

@Service
public class ActionServiceImpl implements ActionService {
	
	@Autowired 
	private ActionRepository actionRepository;

	
	@Transactional
	@Override
	public Action addAction(Action action) {
		action.setEtat_action(false);
		return actionRepository.save(action);
	}
	@Transactional
	@Override
	public Action updateAction(Action action, long idaction_old) {
		Action old_action=getActionById(idaction_old);
		action.setId_Action(idaction_old);
		action.setEtat_action(old_action.getEtat_action());
		return actionRepository.save(action);
	}
	@Transactional
	@Override
	public Action getActionById(long idact) {
		return actionRepository.findById(idact).get();
	}
	@Transactional
	@Override
	public void deleteAction(long id) {
		actionRepository.deleteById(id);
	}
	@Transactional
	@Override
	public List<Action> getAllAction() {
		return (List<Action>) actionRepository.findAll();
	}
	@Transactional
	@Override
	public Action publierAction(Long idAction,boolean etat) {
		Action action=getActionById(idAction);
		action.setId_Action(idAction);
		action.setEtat_action(etat);
		return actionRepository.save(action);
	}

}
