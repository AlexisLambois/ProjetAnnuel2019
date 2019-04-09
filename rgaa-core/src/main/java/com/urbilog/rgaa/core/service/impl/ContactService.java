package com.urbilog.rgaa.core.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.urbilog.rgaa.core.dao.IContactDAO;
import com.urbilog.rgaa.core.entity.Contact;
import com.urbilog.rgaa.core.service.IContactService;
import org.apache.commons.lang.StringUtils;

@Transactional
@Service
public class ContactService implements IContactService {

	/** The commande part ent DAO. */
	@Autowired
	private IContactDAO contactDAO;

	public ContactService() {
		super();
	}

//	@Override
//	public ContactDTO postContact(ContactDTO contact) {
//		contact.setHostname(
//				contact.getHostname().substring(0, 1 + StringUtils.ordinalIndexOf(contact.getHostname(), "/", 3)));
//		this.contactDAO.save(contact.toEntity());
//		return contact;
//	}

	@Override
	public Contact save(String name, String email, String phonenumber, String filename) {
		return this.contactDAO.saveAndFlush(new Contact(name,email,phonenumber,filename,1));
	}

}
