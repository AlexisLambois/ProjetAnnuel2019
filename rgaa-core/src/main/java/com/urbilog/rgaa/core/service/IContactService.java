package com.urbilog.rgaa.core.service;

import com.urbilog.rgaa.core.entity.Contact;

public interface IContactService {

	Contact save(String name, String email, String phonenumber, String filename);

}
