package com.urbilog.rgaa.middleware.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import com.urbilog.rgaa.core.exception.HttpException;
import com.urbilog.rgaa.core.placeholder.ParameterReader;
import com.urbilog.rgaa.core.service.IAuthorizeService;
import com.urbilog.rgaa.core.service.impl.AuthorizeServiceImpl;

@Configuration
public class AuthenticationTokenProcessingFilter extends GenericFilterBean {

	@Autowired
	private IAuthorizeService authorizeService;

	@Autowired
	protected ParameterReader placeHolder;

	public static final Logger LOGGER = LoggerFactory.getLogger(AuthorizeServiceImpl.class);

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {

		HttpServletRequest httpRequest = null;

		try {
			httpRequest = this.getAsHttpRequest(request);
		} catch (Exception e) {
			LOGGER.info(e.getMessage(), e); // exception is logged
		}

		String accessToken = null;

		if (httpRequest != null) {
			accessToken = httpRequest.getHeader(placeHolder.getHeaderResponse());
		}

		if (accessToken != null) {

			accessToken = accessToken.replace(placeHolder.getHeaderValueResponse(), "");
			boolean isAuth = authorizeService.checkToken(accessToken);
			if (!isAuth) {
				List<GrantedAuthority> authorities = new ArrayList<>();
				authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
				SecurityContextHolder.getContext()
						.setAuthentication(new UsernamePasswordAuthenticationToken(null, null, authorities));
			}

		}
		chain.doFilter(request, response);
	}

	private HttpServletRequest getAsHttpRequest(ServletRequest request) throws HttpException {
		if (!(request instanceof HttpServletRequest)) {
			throw new HttpException("Expecting an HTTP request");
		}

		return (HttpServletRequest) request;
	}
}