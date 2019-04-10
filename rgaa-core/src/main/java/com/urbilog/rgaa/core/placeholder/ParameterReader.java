package com.urbilog.rgaa.core.placeholder;

import org.springframework.beans.factory.annotation.Value;

public class ParameterReader {

	@Value("${header.response}")
	private String headerResponse;

	@Value("${header.value.response}")
	private String headerValueResponse;

	@Value("${secret.key.jwt}")
	private String secretKeyJwt;

	public ParameterReader() {
		super();
	}

	public String getHeaderResponse() {
		return headerResponse;
	}

	public void setHeaderResponse(String headerResponse) {
		this.headerResponse = headerResponse;
	}

	public String getHeaderValueResponse() {
		return headerValueResponse;
	}

	public void setHeaderValueResponse(String headerValueResponse) {
		this.headerValueResponse = headerValueResponse;
	}

	public String getSecretKeyJwt() {
		return secretKeyJwt;
	}

	public void setSecretKeyJwt(String secretKeyJwt) {
		this.secretKeyJwt = secretKeyJwt;
	}

}
