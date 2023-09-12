package com.openai.controller;

import java.io.File;
import java.util.concurrent.CompletableFuture;

import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ZipController {

	public static String zipFilePath;

	@GetMapping("/zipDownload")
	public ResponseEntity<FileSystemResource> downloadFile() {

		File file = new File(zipFilePath);
		FileSystemResource resource = new FileSystemResource(file);

		HttpHeaders headers = new HttpHeaders();
		headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + file.getName());

		ResponseEntity<FileSystemResource> responseEntity = ResponseEntity.ok().headers(headers)
				.contentLength(file.length()).contentType(MediaType.APPLICATION_OCTET_STREAM).body(resource);

		return responseEntity;

	}
}
