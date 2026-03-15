  CREATE TABLE ListFood (
        id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
        img VARCHAR(255),
        price VARCHAR(255),
      endpoint VARCHAR(255) NULL,
      created_at TIMESTAMP NULL,
      updated_at TIMESTAMP NULL
      
  );