CREATE TABLE `produto` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`img` varchar(1000) NOT NULL,
	`estoque` int NOT NULL,
	`price` decimal(10,2) NOT NULL,
	CONSTRAINT `produto_id` PRIMARY KEY(`id`)
);
