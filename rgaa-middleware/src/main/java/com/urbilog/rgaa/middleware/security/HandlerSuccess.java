package com.urbilog.rgaa.middleware.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.urbilog.rgaa.core.placeholder.ParameterReader;
import com.urbilog.rgaa.core.service.IAuthorizeService;
import com.urbilog.rgaa.core.service.impl.UserDetailsImpl;


@Component
public class HandlerSuccess implements AuthenticationSuccessHandler {
	@Autowired
	private IAuthorizeService authorizeService;

	@Autowired
	private ParameterReader placeHolder;

	public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
			Authentication authentication) throws IOException, ServletException {
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		if (userDetails == null) {
			throw new IOException();
		}
		if (httpServletResponse == null) {
			throw new ServletException();
		}

		httpServletResponse.addHeader("Access-Control-Expose-Headers", placeHolder.getHeaderResponse());
		httpServletResponse.addHeader("Access-Control-Allow-Origin", "*");
		httpServletResponse.addHeader(placeHolder.getHeaderResponse(), authorizeService.createToken(userDetails));
	}
}