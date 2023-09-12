package com.openai.zipdownload;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NavContrller {
	@GetMapping("/zipLink")
	public String zipLink() {
		return "zipLink";
	}
}
