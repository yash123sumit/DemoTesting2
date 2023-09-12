package com.openai.zipdownload;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.openai.format.ResponseFormat;

public class ZipingFolder {

	public static void zipCreation(String folderPath, String zipFilePath) {

		try {
			File folder = new File(folderPath);
			File zipFile = new File(zipFilePath);

			// Create a FileOutputStream to write the zip file
			FileOutputStream fos = new FileOutputStream(zipFile);

			// Create a ZipOutputStream to write the compressed data
			ZipOutputStream zos = new ZipOutputStream(fos);

			// Call the zipFolder method to recursively zip the folder
			zipFolder(folder, folder.getName(), zos);

			// Close the ZipOutputStream
			zos.close();

			ResponseFormat.logger.info("Folder successfully zipped.");

		} catch (IOException e) {
			ResponseFormat.logger.error("Error occurred while zipping the folder: " + e.getMessage());
		}
	}

	private static void zipFolder(File folder, String parentFolder, ZipOutputStream zos) throws IOException {
		// List files and directories within the folder
		File[] files = folder.listFiles();

		if (files != null) {
			for (File file : files) {
				if (file.isDirectory()) {
					// Recursively zip sub-folders
					zipFolder(file, parentFolder + "/" + file.getName(), zos);
				} else {
					// Create a new ZipEntry and add it to the ZipOutputStream
					ZipEntry zipEntry = new ZipEntry(parentFolder + "/" + file.getName());
					zos.putNextEntry(zipEntry);

					// Read the file content and write it to the ZipOutputStream
					FileInputStream fis = new FileInputStream(file);
					byte[] buffer = new byte[1024];
					int length;
					while ((length = fis.read(buffer)) > 0) {
						zos.write(buffer, 0, length);
					}
					fis.close();

					// Close the current ZipEntry
					zos.closeEntry();
				}

			}
		}

	}
}
