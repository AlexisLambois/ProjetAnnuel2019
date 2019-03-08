package com.urbilog.rgaa.core.dto;

import com.urbilog.rgaa.core.entity.Contact;

public class ContactDTO {

	private String hostname;

	private String email;

	private String phonenumber;

	private String comment;

	public ContactDTO() {
		super();
	}

	public ContactDTO(String hostname, String email, String phonenumber, String comment) {
		super();
		this.hostname = hostname;
		this.email = email;
		this.phonenumber = phonenumber;
		this.comment = comment;
	}

	public String getHostname() {
		return hostname;
	}

	public void setHostname(String hostname) {
		this.hostname = hostname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}
	
	public Contact toEntity() {
		return new Contact(this.hostname,this.email,this.phonenumber,this.comment);
	}

	@Override
	public String toString() {
		return "ContactDTO [hostname=" + hostname + ", email=" + email + ", phonenumber=" + phonenumber + ", comment="
				+ comment + "]";
	}

}
