package com.urbilog.rgaa.core.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.urbilog.rgaa.core.dao.IEnregistrementDAO;
import com.urbilog.rgaa.core.entity.Enregistrement;
import com.urbilog.rgaa.core.placeholder.FileStorageProperties;
import com.urbilog.rgaa.core.service.IEnregistrementService;

import java.util.Date;
import java.util.List;

@Transactional
@Service
public class EnregistrementService implements IEnregistrementService {

	@Autowired
	private IEnregistrementDAO contactDAO;

	public EnregistrementService() {
		super();
	}

	@Override
	public Enregistrement saveTypeUn(String name, String email, String phonenumber, String filename) {
		return this.contactDAO.saveAndFlush(new Enregistrement(name,email,phonenumber,filename,1,new Date()));
	}
	
	@Override
	public Enregistrement saveTypeDeux(String name, String email, String phonenumber, String comment) {
		return this.contactDAO.saveAndFlush(new Enregistrement(name,email,phonenumber,comment,2,new Date()));
	}

	@Override
	public List<Enregistrement> getAll() {
		return this.contactDAO.findAll();
	}

}
