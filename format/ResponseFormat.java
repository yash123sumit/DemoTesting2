package com.openai.format;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.openai.controller.ZipController;
import com.openai.zipdownload.DeletionAfterDownload;
import com.openai.zipdownload.ZipingFolder;

public class ResponseFormat {

	public static final Logger logger = LoggerFactory.getLogger(ResponseFormat.class);

	public static void formateRes(String response, String zipName) {
		String folderPath = "D:\\GptFiles\\" + zipName;
		String zipFilePath = folderPath + ".zip";
		String defaultPath = folderPath + "\\";

		ZipController.zipFilePath = zipFilePath;

		String fileStartTag = "<file>";
		String fileEndTag = "</file>";
		String codeStartTag = "<code>";
		String codeEndTag = "</code>";

		String fileStr[] = StringUtils.substringsBetween(response, fileStartTag, fileEndTag);
		String codeStr[] = StringUtils.substringsBetween(response, codeStartTag, codeEndTag);

		File folderPathDeletion = new File(folderPath);
		DeletionAfterDownload.deleteFolder(folderPathDeletion);
		DeletionAfterDownload.deleteZip(zipFilePath);

		for (int i = 0; i < fileStr.length; i++) {
			if (codeStr[i].startsWith("\n```") || codeStr[i].startsWith("```")) {
				codeStr[i] = codeStr[i].replace("```", "");
			}
			if (codeStr[i].startsWith("\nhtml")) {
				codeStr[i] = codeStr[i].replaceFirst("html\n", "");
			} else if (codeStr[i].startsWith("\ncss")) {
				codeStr[i] = codeStr[i].replaceFirst("css\n", "");
			} else if (codeStr[i].startsWith("\ntypescript")) {
				codeStr[i] = codeStr[i].replaceFirst("typescript\n", "");
			} else if (codeStr[i].startsWith("\nscss")) {
				codeStr[i] = codeStr[i].replaceFirst("scss\n", "");
			}

			storeToFile(fileStr[i], codeStr[i], defaultPath);
		}

		ZipingFolder.zipCreation(folderPath, zipFilePath);

	}

	public static void storeToFile(String fileName, String code, String defaultPath) {
		File folderPath;
		File folderPathfile = new File(defaultPath);
		if (!folderPathfile.exists()) {
			if (folderPathfile.mkdirs()) {
				logger.info("Folder created successfully.");
			} else {
				logger.info("Failed to create the folder.");
				return;
			}
		}
		if (fileName.endsWith("html")) {
			folderPath = new File(defaultPath + "html");
			if (!folderPath.exists()) {
				if (folderPath.mkdirs()) {
					logger.info("Folder created successfully.");
				} else {
					logger.info("Failed to create the folder.");
					return;
				}
			}
			defaultPath = defaultPath + "html\\" + fileName;
		} else if (fileName.endsWith("css")) {
			folderPath = new File(defaultPath + "css");
			if (!folderPath.exists()) {
				if (folderPath.mkdirs()) {
					logger.info("Folder created successfully.");
				} else {
					logger.info("Failed to create the folder.");
					return;
				}
			}
			defaultPath = defaultPath + "css\\" + fileName;
		} else if (fileName.endsWith("ts")) {
			folderPath = new File(defaultPath + "typescript");
			if (!folderPath.exists()) {
				if (folderPath.mkdirs()) {
					logger.info("Folder created successfully.");
				} else {
					logger.info("Failed to create the folder.");
					return;
				}
			}
			defaultPath = defaultPath + "typescript\\" + fileName;
		} else {
			defaultPath = defaultPath + fileName;
		}
		try {
			File file = new File(defaultPath);
			FileWriter writer = new FileWriter(file, true);
			writer.write(code);
			writer.close();
			logger.info("String successfully written to the file at location: " + defaultPath);
		} catch (IOException e) {
			logger.error("Error writing to the file: " + e.getMessage());
		}
	}
}
