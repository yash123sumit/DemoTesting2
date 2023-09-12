package com.openai.dto;

import java.util.List;
import lombok.Data;

@Data
public class ChatGptResponse {
	
	private String id;
	private String object;
	private List<Choice> choices;

	public ChatGptResponse(String id, String object, List<Choice> choices) {
		super();
		this.id = id;
		this.object = object;
		this.choices = choices;
	}

	public ChatGptResponse() {
		super();
	}

	public List<Choice> getChoices() {
		return choices;
	}

	public void setChoices(List<Choice> choices) {
		this.choices = choices;
	}

	public String getObject() {
		return object;
	}

	public void setObject(String object) {
		this.object = object;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@Data
	public static class Choice {
		private int index;
		private Message message;
		private String finish_reason;

		public Choice(int index, Message message, String finish_reason) {
			super();
			this.index = index;
			this.message = message;
			this.finish_reason = finish_reason;
		}

		public Choice() {
			super();
		}

		public int getIndex() {
			return index;
		}

		public void setIndex(int index) {
			this.index = index;
		}

		public Message getMessage() {
			return message;
		}

		public void setMessage(Message message) {
			this.message = message;
		}

		public String getFinish_reason() {
			return finish_reason;
		}

		public void setFinish_reason(String finish_reason) {
			this.finish_reason = finish_reason;
		}
	}
}
