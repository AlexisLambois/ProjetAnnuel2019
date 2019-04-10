package com.urbilog.rgaa.core.service;

import com.urbilog.rgaa.core.entity.Utilisateur;

public interface IUtilisateurService {

	Utilisateur findUserBy(String login, String password);

}
