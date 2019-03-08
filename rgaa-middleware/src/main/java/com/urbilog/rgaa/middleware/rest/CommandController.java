//package com.idkids.commandes.partenaires.middleware.rest;
//
//import java.math.BigDecimal;
//import java.util.ArrayList;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestHeader;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.idkids.commandes.partenaires.core.dto.CommandeDTO;
//import com.idkids.commandes.partenaires.core.dto.CommandeDtlDTO;
//import com.idkids.commandes.partenaires.core.dto.FiltreDTO;
//import com.idkids.commandes.partenaires.core.dto.ParamEtatCdeDTO;
//import com.idkids.commandes.partenaires.core.dto.ParamEtatChangementDTO;
//import com.idkids.commandes.partenaires.core.entity.ParamEtatCde;
//import com.idkids.commandes.partenaires.core.entity.ParamEtatChangement;
//import com.idkids.commandes.partenaires.core.exception.UnrespectedManagementRulesException;
//import com.idkids.commandes.partenaires.core.exception.WrongArgumentException;
//import com.idkids.commandes.partenaires.core.placeholder.ParameterReader;
//import com.idkids.commandes.partenaires.core.service.impl.ICommandeService;
//
//import io.jsonwebtoken.Jwts;
//import io.swagger.annotations.Api;
//import io.swagger.annotations.ApiOperation;
//import io.swagger.annotations.ApiParam;
//import io.swagger.annotations.ApiResponse;
//import io.swagger.annotations.ApiResponses;
//
//@RequestMapping("/commande")
//@Api(value = "/commande", description = "Public operations about commands")
//@RestController
//public class CommandController {
//
//	@Autowired
//	private ICommandeService commandeService;
//
//	@Autowired
//	private ParameterReader placeHolder;
//
//	@RequestMapping(value = "/{codeCommandePart}", method = RequestMethod.GET)
//	@ApiOperation(value = "Returns commands details of codeCommandePart", notes = "Returns a complete list of commands details", response = CommandeDtlDTO.class, responseContainer = "List")
//	@ApiResponses(value = {
//			@ApiResponse(code = 200, message = "Successful get of commands details", response = CommandeDtlDTO.class),
//			@ApiResponse(code = 304, message = "No commands details found", response = CommandeDtlDTO.class) })
//	public ResponseEntity<List<CommandeDtlDTO>> getDetails(
//			@ApiParam(name = "codeCommandePart", value = "command code to find details", required = true) @PathVariable("codeCommandePart") final String codeCommandePart) {
//
//		List<CommandeDtlDTO> details = commandeService.getDetails(codeCommandePart);
//
//		if (details.isEmpty()) {
//			return ResponseEntity.status(HttpStatus.NOT_MODIFIED).body(details);
//		}
//
//		return ResponseEntity.status(HttpStatus.OK).body(details);
//	}
//
//	@RequestMapping(value = "/", method = RequestMethod.GET)
//	@ApiOperation(value = "Returns commands correspond to filter", notes = "Returns a complete list of commands", response = CommandeDTO.class, responseContainer = "List")
//	@ApiResponses(value = {
//			@ApiResponse(code = 200, message = "Successful search commands", response = CommandeDTO.class) })
//	public ResponseEntity<List<CommandeDTO>> searchCmds(
//			@ApiParam(name = "codeSaison", value = "command code to find corresponding commands", required = false) @RequestParam(value = "codeSaison", required = false) final String codeSaison,
//			@ApiParam(name = "codeCommandePart", value = "command code to find corresponding commands", required = false) @RequestParam(value = "codeCommandePart", required = false) final String codeCommandePart,
//			@ApiParam(name = "codeTheme", value = "theme code to find corresponding commands", required = false) @RequestParam(value = "codeTheme", required = false) final List<String> codeTheme,
//			@ApiParam(name = "pays", value = "pays lib to find corresponding commands", required = false) @RequestParam(value = "pays", required = false) final String pays,
//			@ApiParam(name = "marcheVente", value = "marcheVente to find corresponding commands", required = false) @RequestParam(value = "marcheVente", required = false) final String marcheVente,
//			@ApiParam(name = "libRayon", value = "shelf lib to find corresponding commands", required = false) @RequestParam(value = "libRayon", required = false) final String libRayon,
//			@ApiParam(name = "codeMagasin", value = "store code to find corresponding commands", required = false) @RequestParam(value = "codeMagasin", required = false) final String codeMagasin,
//			@ApiParam(name = "codeTypeCommande", value = "command type code to find corresponding commands", required = false) @RequestParam(value = "codeTypeCommande", required = false) final BigDecimal codeTypeCommande,
//			@ApiParam(name = "codeEtatCommande", value = "command state code to find corresponding commands", required = false) @RequestParam(value = "codeEtatCommande", required = false) final Long codeEtatCommande) {
//		List<CommandeDTO> commandes = commandeService.searchCmds(codeSaison, codeCommandePart, codeTheme, pays,
//				marcheVente, libRayon, codeMagasin, codeTypeCommande, codeEtatCommande);
//
//		return ResponseEntity.status(HttpStatus.OK).body(commandes);
//	}
//
//	@RequestMapping(value = "/filtreAuto", method = RequestMethod.GET)
//	@ApiOperation(value = "Returns filter correspond to enter", notes = "Returns a object with list of available", response = FiltreDTO.class, responseContainer = "FiltreDTO")
//	@ApiResponses(value = {
//			@ApiResponse(code = 200, message = "Successful get filtre available", response = FiltreDTO.class) })
//	public ResponseEntity<FiltreDTO> getFilter(
//			@ApiParam(name = "codeSaison", value = "code season to find corresponding commands", required = false) @RequestParam(value = "codeSaison", required = false) final String codeSaison,
//			@ApiParam(name = "codeCommandePart", value = "code command to find corresponding commands", required = false) @RequestParam(value = "codeCommandePart", required = false) final String codeCommandePart,
//			@ApiParam(name = "codeTheme", value = "theme code to find corresponding commands", required = false) @RequestParam(value = "codeTheme", required = false) final List<String> codeTheme,
//			@ApiParam(name = "libTheme", value = "theme lib to find corresponding commands", required = false) @RequestParam(value = "libTheme", required = false) final List<String> libTheme,
//			@ApiParam(name = "pays", value = "pays lib to find corresponding commands", required = false) @RequestParam(value = "pays", required = false) final String pays,
//			@ApiParam(name = "marcheVente", value = "marcheVente to find corresponding commands", required = false) @RequestParam(value = "marcheVente", required = false) final String marcheVente,
//			@ApiParam(name = "libRayon", value = "shelf lib to find corresponding commands", required = false) @RequestParam(value = "libRayon", required = false) final String libRayon,
//			@ApiParam(name = "codeMagasin", value = "store code to find corresponding commands", required = false) @RequestParam(value = "codeMagasin", required = false) final String codeMagasin,
//			@ApiParam(name = "codeTypeCommande", value = "type code command to find corresponding commands", required = false) @RequestParam(value = "codeTypeCommande", required = false) final BigDecimal codeTypeCommande,
//			@ApiParam(name = "codeEtatCommande", value = "state code command to find corresponding commands", required = false) @RequestParam(value = "codeEtatCommande", required = false) final Long codeEtatCommande) {
//		FiltreDTO filtre = commandeService.getFilter(codeSaison, codeCommandePart, codeTheme, libTheme, pays,
//				marcheVente, libRayon, codeMagasin, codeTypeCommande, codeEtatCommande);
//
//		return ResponseEntity.status(HttpStatus.OK).body(filtre);
//	}
//
//	@RequestMapping(value = "/", method = RequestMethod.PUT)
//	@ApiOperation(value = "Returns commands updated", notes = "Returns a complete list of commands", response = CommandeDTO.class, responseContainer = "List")
//	@ApiResponses(value = {
//			@ApiResponse(code = 200, message = "Successful update of commands", response = CommandeDTO.class),
//			@ApiResponse(code = 304, message = "No commands can be updated") })
//	public ResponseEntity<List<CommandeDTO>> updateCmds(
//			@ApiParam(name = "commandes", value = "commands array ( Json ) to updated", required = true) @RequestBody final List<CommandeDTO> commandes,
//			@RequestHeader(value = "Authorization") String token) {
//
//		List<CommandeDTO> commandesUpdated;
//		token = token.replace(placeHolder.getHeaderValueResponse(), "");
//		String name = (String) Jwts.parser().setSigningKey(placeHolder.getSecretKeyJwt().getBytes())
//				.parseClaimsJws(token).getBody().get("name");
//
//		try {
//			commandesUpdated = commandeService.updateCmds(commandes, name);
//		} catch (WrongArgumentException e) {
//			return ResponseEntity.status(HttpStatus.NOT_MODIFIED).body(null);
//		}
//
//		return ResponseEntity.status(HttpStatus.OK).body(commandesUpdated);
//	}
//
//	@RequestMapping(value = "/{codeCommandePart}", method = RequestMethod.PUT)
//	@ApiOperation(value = "Returns commands details updated", notes = "Returns a complete list of commands details", response = CommandeDtlDTO.class, responseContainer = "List")
//	@ApiResponses(value = {
//			@ApiResponse(code = 200, message = "Successful update of commands details", response = CommandeDtlDTO.class),
//			@ApiResponse(code = 304, message = "No commands details can be updated") })
//	public ResponseEntity<List<CommandeDtlDTO>> updateCmdsDtls(
//			@ApiParam(name = "codeCommandePart", value = "command code to find details", required = true) @PathVariable("codeCommandePart") final String codeCommandePart,
//			@ApiParam(name = "commandesDtls", value = "commands details array ( Json ) to updated", required = true) @RequestBody final List<CommandeDtlDTO> commandesDtls,
//			@RequestHeader(value = "Authorization") String token) {
//
//		List<CommandeDtlDTO> commandesDtlsUpdated;
//		token = token.replace(placeHolder.getHeaderValueResponse(), "");
//		String name = (String) Jwts.parser().setSigningKey(placeHolder.getSecretKeyJwt().getBytes())
//				.parseClaimsJws(token).getBody().get("name");
//
//		try {
//			commandesDtlsUpdated = commandeService.updateCmdsDtls(codeCommandePart, commandesDtls, name);
//		} catch (WrongArgumentException | UnrespectedManagementRulesException e) {
//			return ResponseEntity.status(HttpStatus.NOT_MODIFIED).body(null);
//		}
//
//		return ResponseEntity.status(HttpStatus.OK).body(commandesDtlsUpdated);
//	}
//
//	@RequestMapping(value = "/status", method = RequestMethod.GET)
//	@ApiOperation(value = "Returns params status commands available", notes = "Returns a complete list of params state commands", response = ParamEtatCde.class, responseContainer = "List")
//	@ApiResponses(value = {
//			@ApiResponse(code = 200, message = "Successful get params state commands", response = ParamEtatCdeDTO.class) })
//	public ResponseEntity<List<ParamEtatCdeDTO>> getStatus() {
//
//		List<ParamEtatCdeDTO> paramEtatPossible = commandeService.getStatus();
//
//		return ResponseEntity.status(HttpStatus.OK).body(paramEtatPossible);
//	}
//

























// Creating a PdfWriter object
//			String dest = "C:/Users/alambois/Desktop/Modeoperatoire.docx";
//			String dest2 = "C:/Users/alambois/Desktop/test2.pdf";
//			
//			String records = "";
//			try {
//				BufferedReader reader = new BufferedReader(new FileReader(dest));
//				String line;
//				while ((line = reader.readLine()) != null) {
//					records+=line+"\n";
//				}
//				reader.close();
//			} catch (Exception e) {
//				System.err.format("Exception occurred trying to read '%s'.", dest);
//				e.printStackTrace();
//			}
//			
//			records = records.replace("\t","	");
//			
//			PdfWriter writer;
//			PdfDocument pdf;
//			Document doc = null;
//			PdfFont font;
//
//			try {
//				writer = new PdfWriter(dest2);
//				pdf = new PdfDocument(writer);
//				doc = new Document(pdf);
//				Paragraph para = new Paragraph(records);
//				font = PdfFontFactory.createFont(FontConstants.HELVETICA_BOLD);
//				para.setFont(font);
//				doc.add(para);
//				doc.close();
//				writer.close();
//			} catch (FileNotFoundException e) {
//				e.printStackTrace();
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//	@ApiOperation(value = "get status matrix", produces = "application/json")
//	@RequestMapping(method = RequestMethod.GET, value = "/statusMatrix")
//	@ApiResponses(value = {
//			@ApiResponse(code = 200, message = "Successful get next status", response = ParamEtatChangementDTO.class) })
//	public ResponseEntity<List<ParamEtatChangementDTO>> getStatusMatrix() {
//		List<ParamEtatChangementDTO> paramEtatPossible = new ArrayList<>();
//		for (ParamEtatChangement param : commandeService.getParamEtatChangement()) {
//			paramEtatPossible.add(new ParamEtatChangementDTO(param.getId().getCodeEtatOrigin(),
//					param.getId().getCodeEtatDestination(), param.getCodeVerifReservation()));
//		}
//
//		return ResponseEntity.status(HttpStatus.OK).body(paramEtatPossible);
//	}
//
//}
