package com.urbilog.rgaa.core.service.impl;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.urbilog.rgaa.core.placeholder.ParameterReader;
import com.urbilog.rgaa.core.service.IAuthorizeService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class AuthorizeServiceImpl implements IAuthorizeService {

	@Autowired
	private ParameterReader placeHolder;

	public static final Logger LOGGER = LoggerFactory.getLogger(AuthorizeServiceImpl.class);

	@Autowired
	private List<String> tokens = new ArrayList<>();

	@Override
	public Boolean checkToken(String accessToken) {
		try {
			Jwts.parser().setSigningKey(placeHolder.getSecretKeyJwt().getBytes()).parseClaimsJws(accessToken).getBody();
		} catch (Exception e) {
			LOGGER.info(e.getMessage(), e); // exception is logged
		}
		return false;
	}

	@Override
	public String createToken(UserDetailsImpl userDetails) {
		final Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.DAY_OF_WEEK, 7);
		String result = Jwts.builder().claim("name", userDetails.getFirstname() + " " + userDetails.getLastname())
				.claim("role", userDetails.getRole()).claim("exp", calendar.getTime().getTime() / 1000)
				.signWith(SignatureAlgorithm.HS256, placeHolder.getSecretKeyJwt().getBytes()).compact();
		tokens.add(result);
		return result;
	}

}