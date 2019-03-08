package com.urbilog.rgaa.core.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.urbilog.rgaa.core.entity.Contact;

/**
 * The Interface ICommandePartEntDAO.
 */
@Repository
public interface IContactDAO extends JpaRepository<Contact, Integer> {
	
	

}
