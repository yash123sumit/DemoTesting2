package com.openai.zipdownload;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import com.openai.format.ResponseFormat;

public class DeletionAfterDownload {
	
	public static void deleteFolder(File folder) {
        if (folder.exists()) {
            File[] files = folder.listFiles();
            if (files != null) {
                for (File file : files) {
                    if (file.isDirectory()) {
                        deleteFolder(file);
                    } else {
                        file.delete();
                    }
                }
            }
            folder.delete();
            ResponseFormat.logger.info("Folder deleted successfully.");
        } else {
        	ResponseFormat.logger.info("Folder does not exist.");
        }
	}
	
	
	public static void deleteZip(String zipPath) {
        try {
            Path zipFile = Paths.get(zipPath);
            Files.delete(zipFile);
            ResponseFormat.logger.info("Zip file deleted successfully.");
        } catch (IOException e) {
        	ResponseFormat.logger.error("Zip file dosen't exist");
        }
	}
}
