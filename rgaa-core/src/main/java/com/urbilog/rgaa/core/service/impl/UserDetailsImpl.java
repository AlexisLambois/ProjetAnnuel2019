package com.urbilog.rgaa.core.service.impl;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UserDetailsImpl implements UserDetails {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private UserDetails userDetails;

	private String firstname;

	private String lastname;

	private String role;

	public UserDetailsImpl(UserDetails userDetails, String firstname, String lastname, String role) {
		this.userDetails = userDetails;
		this.firstname = firstname;
		this.lastname = lastname;
		this.role = role;
	}

	@Override
	public String getPassword() {
		return userDetails.getPassword();
	}

	@Override
	public String getUsername() {
		return userDetails.getUsername();
	}

	@Override
	public boolean isAccountNonExpired() {
		return userDetails.isAccountNonExpired();
	}

	@Override
	public boolean isAccountNonLocked() {
		return userDetails.isAccountNonLocked();
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return userDetails.isCredentialsNonExpired();
	}

	@Override
	public boolean isEnabled() {
		return userDetails.isEnabled();
	}

	@Override
	public Collection<GrantedAuthority> getAuthorities() {
		return Collections.emptyList();
	}

	public String getFirstname() {
		return firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
}