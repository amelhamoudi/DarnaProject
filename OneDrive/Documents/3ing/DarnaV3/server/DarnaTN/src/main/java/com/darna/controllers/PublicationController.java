package com.darna.controllers;

import java.lang.reflect.Type;
import java.util.List;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.darna.dto.PublicationDto;
import com.darna.models.Publication;
import com.darna.services.PublicationService;

@CrossOrigin("*")
@RestController()
public class PublicationController {
	
	@Autowired
	private PublicationService publicationService;
	@Autowired
	ModelMapper modelMapper;
	
	@PostMapping("/api/publication")
	public Object addPublication(@Valid @RequestBody PublicationDto publicationDto) {
		Publication publication=modelMapper.map(publicationDto, Publication.class);
		publication =publicationService.addPublication(publication);
		publicationDto =modelMapper.map(publication, PublicationDto.class);
		return ResponseEntity.status(HttpStatus.CREATED).body(publicationDto);
	}
	@PutMapping("/api/oldpublication/{idPub}")
	public Object updatePublication(@Valid @RequestBody PublicationDto publicationDto, @PathVariable("idPub") Long idPub) {
		Publication publication=modelMapper.map(publicationDto, Publication.class);
		publication = publicationService.updatePublication(publication, idPub);
		publicationDto = modelMapper.map(publication, PublicationDto.class);
	return ResponseEntity.status(HttpStatus.CREATED).body(publicationDto);
	}

	@GetMapping("/api/listpublication")
	public Object getAllPublication()
	{
		List <Publication> listpublication = publicationService.getAllPublication();
		Type listType = new TypeToken<List<PublicationDto>>() {}.getType();
		List<PublicationDto> listpublicationdtos = modelMapper.map(listpublication,listType);
		return ResponseEntity.status(HttpStatus.OK).body(listpublicationdtos);
	}
	@DeleteMapping("/api/deletepublication/{idPub}")
    public Object deletePublication(@PathVariable("idPub")Long idPub )
    {
		publicationService.deletePublication(idPub);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }
	@GetMapping("/api/Publication/{idPub}")
	public Object getPublicationById(@PathVariable("idPub") Long idPub)
    {
		Publication publication=publicationService.getPublicationById(idPub);
		PublicationDto publicationDto=modelMapper.map(publication,PublicationDto.class);
		return ResponseEntity.status(HttpStatus.OK).body(publicationDto);
    }

}
