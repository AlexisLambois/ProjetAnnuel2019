package com.urbilog.rgaa.core.dto;

import org.springframework.web.multipart.MultipartFile;

public class ToSaveDataDTO {

	private String name;

	private String email;

	private String phonenumber;

	private MultipartFile file;

	public ToSaveDataDTO() {
		super();
	}

	public ToSaveDataDTO(String name, String email, String phonenumber, MultipartFile file) {
		super();
		this.name = name;
		this.email = email;
		this.phonenumber = phonenumber;
		this.file = file;
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

	public MultipartFile getFile() {
		return file;
	}

	public void setFile(MultipartFile file) {
		this.file = file;
	}

	@Override
	public String toString() {
		return "ToSaveDataDTO [name=" + name + ", email=" + email + ", phonenumber=" + phonenumber + ", file=" + file
				+ "]";
	}

}
