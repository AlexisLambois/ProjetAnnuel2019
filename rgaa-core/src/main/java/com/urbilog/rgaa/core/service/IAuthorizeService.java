package com.urbilog.rgaa.core.service;

import com.urbilog.rgaa.core.service.impl.UserDetailsImpl;

public interface IAuthorizeService {

	Boolean checkToken(String accessToken);

	String createToken(UserDetailsImpl userDetails);

}