package com.urbilog.rgaa.core.dto;

public class ToSaveDataDTO {

	private String name;

	private String email;

	private String phonenumber;

	private String fileName;
	
	private String comment;

	public ToSaveDataDTO() {
		super();
	}

	public ToSaveDataDTO(String name, String email, String phonenumber) {
		super();
		this.name = name;
		this.email = email;
		this.phonenumber = phonenumber;
	}

	public ToSaveDataDTO(String name, String email, String phonenumber, String fileName) {
		this(name,email,phonenumber);
		this.fileName = fileName;
	}

	public ToSaveDataDTO(String name, String email, String phonenumber, String fileName, String comment) {
		this(name,email,phonenumber,null);
		this.comment = comment;
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

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	@Override
	public String toString() {
		return "ToSaveDataDTO [name=" + name + ", email=" + email + ", phonenumber=" + phonenumber + ", fileName="
				+ fileName + ", comment=" + comment + "]";
	}

}
