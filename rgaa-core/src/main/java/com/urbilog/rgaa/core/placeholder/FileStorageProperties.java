package com.urbilog.rgaa.core.placeholder;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("singleton")
public class FileStorageProperties {

	@Value("${file.dir}")
	private String uploadDir;

	public String getUploadDir() {
		return uploadDir;
	}

}