package com.urbilog.rgaa.middleware.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.itextpdf.io.font.FontConstants;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Text;
import com.urbilog.rgaa.core.dto.ToSaveDataDTO;
import com.urbilog.rgaa.core.entity.Enregistrement;
import com.urbilog.rgaa.core.entity.UploadFileResponse;
import com.urbilog.rgaa.core.service.IEnregistrementService;
import com.urbilog.rgaa.core.service.impl.FileStorageService;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RequestMapping("/enregistrement")
@Api(value = "/enregistrement", description = "Public operations about Enregistrement")
@RestController
public class EnregistrementController {

	@Autowired
	private IEnregistrementService enregistrementService;
	
	@Autowired
	private FileStorageService fileStorageService;
	
	@RequestMapping(value = "/saveEnregistrement", method = RequestMethod.POST)
	public ResponseEntity<Integer> saveEnregistrement(@RequestBody final ToSaveDataDTO dataToSave) {

		Enregistrement c; 

		try {
			if(dataToSave.getFileName() != null) {
				c = this.enregistrementService.saveTypeUn(dataToSave.getName(),dataToSave.getEmail(),dataToSave.getPhonenumber(),dataToSave.getFileName());
			}else {
				c = this.enregistrementService.saveTypeDeux(dataToSave.getName(),dataToSave.getEmail(),dataToSave.getPhonenumber(),dataToSave.getComment());
			}
		} catch (DataIntegrityViolationException e2) {
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(null);
		}
		return ResponseEntity.status(HttpStatus.OK).body(c.getId());
	}

	@RequestMapping(value = "/uploadFile/{contactId}", method = RequestMethod.POST)
	public UploadFileResponse uploadFile(@PathVariable("contactId") final Integer contactId,@RequestParam("file") MultipartFile file) {
		
		String fileName = this.fileStorageService.storeFile(contactId,file);

		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/downloadFile/")
				.path(fileName).toUriString();

		return new UploadFileResponse(fileName, fileDownloadUri, file.getContentType(), file.getSize());
	}

}
