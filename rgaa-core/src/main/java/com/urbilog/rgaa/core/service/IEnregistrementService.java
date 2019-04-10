package com.urbilog.rgaa.core.service;

import com.urbilog.rgaa.core.entity.Enregistrement;

public interface IEnregistrementService {

	Enregistrement saveTypeUn(String name, String email, String phonenumber, String filename);
	
	Enregistrement saveTypeDeux(String name, String email, String phonenumber, String comment);

}
