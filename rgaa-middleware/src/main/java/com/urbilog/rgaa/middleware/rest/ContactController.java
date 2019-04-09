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
import com.urbilog.rgaa.core.entity.Contact;
import com.urbilog.rgaa.core.entity.UploadFileResponse;
import com.urbilog.rgaa.core.service.IContactService;
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

@RequestMapping("/contact")
@Api(value = "/contact", description = "Public operations about contact")
@RestController
public class ContactController {

	@Autowired
	private IContactService contactService;
	
	@Autowired
	private FileStorageService fileStorageService;
	
//	@RequestMapping(value = "/", method = RequestMethod.POST)
//	@ApiOperation(value = "Return contact posted", notes = "Return the message to display", response = ContactDTO.class, responseContainer = "")
//	@ApiResponses(value = {
//			@ApiResponse(code = 200, message = "Successful add of contact", response = ContactDTO.class),
//			@ApiResponse(code = 406, message = "Hostname AlReady In Database") })
//	public ResponseEntity<ContactDTO> postContact(
//			@ApiParam(name = "contact", value = "contact to posted", required = true) @RequestBody final ContactDTO contact) {
//
//		ContactDTO contactSaved = null;
//
//		try {
//			contactSaved = this.contactService.postContact(contact);
//		} catch (DataIntegrityViolationException e2) {
//			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(contactSaved);
//		}
//
//		return ResponseEntity.status(HttpStatus.OK).body(contactSaved);
//	}

	@RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
	public UploadFileResponse uploadFile(@RequestBody final ToSaveDataDTO dataToSave) {
		
		Contact c = this.contactService.save(dataToSave.getName(),dataToSave.getEmail(),dataToSave.getPhonenumber(),dataToSave.getFile().getName());
		
		String fileName = fileStorageService.storeFile(c.getId(),dataToSave.getFile());

		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/downloadFile/")
				.path(fileName).toUriString();

		return new UploadFileResponse(fileName, fileDownloadUri, dataToSave.getFile().getContentType(), dataToSave.getFile().getSize());
	}

}
