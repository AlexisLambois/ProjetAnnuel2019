package com.urbilog.rgaa.core.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;

/**
 * The persistent class for the contacts database table.
 * 
 */
@Entity
@Table(name = "enregistrements")
@NamedQuery(name = "Enregistrement.findAll", query = "SELECT e FROM Enregistrement e")
public class Enregistrement implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5819678252827199264L;

	@Id
	@SequenceGenerator(name = "enregistrement_generator", sequenceName = "enregistrements_id_seq", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "enregistrement_generator")
	@Column(unique = true, nullable = false)
	private Integer id;

	private String name;

	private String email;

	private String phonenumber;

	private String comment;
	
	private Integer type;
	
	@Column(name="date_demande")
	private Date dateDemande;

	public Enregistrement() {
	}

	public Enregistrement(String name, String email, String phonenumber, String comment, Integer type) {
		super();
		this.name = name;
		this.email = email;
		this.phonenumber = phonenumber;
		this.comment = comment;
		this.type = type;
	}

	public Enregistrement(String name, String email, String phonenumber, String comment, Integer type, Date dateDemande) {
		super();
		this.name = name;
		this.email = email;
		this.phonenumber = phonenumber;
		this.comment = comment;
		this.type = type;
		this.dateDemande = dateDemande;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public Date getDateDemande() {
		return dateDemande;
	}

	public void setDateDemande(Date dateDemande) {
		this.dateDemande = dateDemande;
	}

	@Override
	public String toString() {
		return "Contact [name=" + name + ", email=" + email + ", phonenumber=" + phonenumber + ", comment=" + comment
				+ ", type=" + type + ", dateDemande=" + dateDemande + "]";
	}

}