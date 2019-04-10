package com.urbilog.rgaa.middleware.security;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.urbilog.rgaa.core.entity.Utilisateur;
import com.urbilog.rgaa.core.service.IUtilisateurService;
import com.urbilog.rgaa.core.service.impl.UserDetailsImpl;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

	@Autowired
	private IUtilisateurService userService;

	public CustomAuthenticationProvider() {
		super();
	}

	@Override
	public Authentication authenticate(final Authentication authentication) throws AuthenticationException {

		String login = authentication.getName();
		final String password = authentication.getCredentials().toString();

		if (login != null) {
			login = login.toUpperCase();
		}

		Utilisateur u = this.userService.findUserBy(login, password);

		if (u != null) {

			final List<GrantedAuthority> grantedAuths = new ArrayList<>();
			grantedAuths.add(new SimpleGrantedAuthority(u.getRole()));

			final UserDetails principal = new User(login, password, grantedAuths);
			final UserDetailsImpl userDetail = new UserDetailsImpl(principal, u.getLogin(), "", u.getRole());

			return new UsernamePasswordAuthenticationToken(userDetail, password, grantedAuths);

		} else {
			return null;
		}
	}

	@Override
	public boolean supports(final Class<?> authentication) {
		return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}

}