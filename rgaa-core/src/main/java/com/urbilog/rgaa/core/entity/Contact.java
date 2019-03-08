package com.urbilog.rgaa.core.entity;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The persistent class for the contacts database table.
 * 
 */
@Entity
@Table(name = "contacts")
@NamedQuery(name = "Contact.findAll", query = "SELECT c FROM Contact c")
public class Contact implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5819678252827199264L;

	@Id
	@SequenceGenerator(name = "contact_generator", sequenceName = "contacts_id_seq", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "contact_generator")
	@Column(unique = true, nullable = false)
	private Integer id;

	private String hostname;

	private String email;

	private String phonenumber;

	private String comment;

	public Contact() {
	}

	public Contact(String hostname, String email, String phonenumber, String comment) {
		super();
		this.hostname = hostname;
		this.email = email;
		this.phonenumber = phonenumber;
		this.comment = comment;
	}

	public Contact(Integer id, String hostname, String email, String phonenumber, String comment) {
		super();
		this.id = id;
		this.hostname = hostname;
		this.email = email;
		this.phonenumber = phonenumber;
		this.comment = comment;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	@Override
	public String toString() {
		return "Contact [id=" + id + ", hostname=" + hostname + ", email=" + email + ", phonenumber=" + phonenumber
				+ ", comment=" + comment + "]";
	}

}