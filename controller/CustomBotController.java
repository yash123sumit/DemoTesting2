package com.openai.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Retryable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;

import com.openai.dto.ChatGptRequest;
import com.openai.dto.ChatGptResponse;
import com.openai.dto.Message;
import com.openai.format.ResponseFormat;

@RestController
//@Controller
public class CustomBotController {

	@Value("${openai.model}")
	private String model;

	@Value("${openai.api.url}")
	private String url;

	@Value("${openai.api.systemPromptAngular}")
	private String systemPromptAngular;
	
	private float top_p = 1;
	private float temperature = (float) 0.8;

	@Autowired
	private RestTemplate template;

	@Retryable(
		    value = HttpServerErrorException.class,
		    maxAttempts = 3,
		    backoff = @Backoff(delay = 1000)
		)
	@PostMapping("/chat")
	public String chat(@RequestParam("prompt") String prompt, @RequestParam("zipName") String zipName) {
		try {
		ChatGptRequest request = new ChatGptRequest(model, prompt, top_p, temperature);
		request.getMessages().add(new Message("system", systemPromptAngular));
		ChatGptResponse response = template.postForObject(url, request, ChatGptResponse.class);
		String str = response.getChoices().get(0).getMessage().getContent();
		
		ResponseFormat.formateRes(str, zipName);
		

		return "redirect:/zipLink";
		} catch (HttpServerErrorException e) {
	        throw e;
	    }
	}
	
	

	@GetMapping("/chat2")
	public List<String> chat2(@RequestParam("prompt") String prompt) {
		try {

		ChatGptRequest request = new ChatGptRequest(model, prompt, top_p, temperature);
//		request.getMessages().add(new Message("system", systemPromptAngular));
		ChatGptResponse response = template.postForObject(url, request, ChatGptResponse.class);
		String str = response.getChoices().get(0).getMessage().getContent();
		List<String> li = new ArrayList<String>();
		li.add(str);
		return li;

		} catch (HttpServerErrorException e) {
	        throw e;
	    }
	}
	
}
