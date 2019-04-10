package com.urbilog.rgaa.middleware.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

@Component
public class HandlerFailure implements AuthenticationFailureHandler {

	@Override
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse httpServletResponse,
			AuthenticationException exception) throws IOException, ServletException {
		if (httpServletResponse == null) {
			throw new ServletException();
		}
		httpServletResponse.addHeader("Access-Control-Allow-Origin", "*");
		httpServletResponse.sendError(401);

	}
}