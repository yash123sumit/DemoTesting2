package com.openai.dto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;

import lombok.Data;

@Data
public class ChatGptRequest {

	private String model;
	private List<Message> messages;
	private float top_p;
	private float temperature;

	public ChatGptRequest(String model, String prompt, float top_p, float temperature) {
		super();
		this.model = model;
		this.messages = new ArrayList<>();
		this.messages.add(new Message("user", prompt));
		this.top_p = top_p;
		this.temperature = temperature;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public List<Message> getMessages() {
		return messages;
	}

	public void setMessages(List<Message> messages) {
		this.messages = messages;
	}

	public float getTop_p() {
		return top_p;
	}

	public void setTop_p(float top_p) {
		this.top_p = top_p;
	}

	public float getTemperature() {
		return temperature;
	}

	public void setTemperature(float temperature) {
		this.temperature = temperature;
	}

}
