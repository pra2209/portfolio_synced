CREATE TABLE `github_projects` (
	`id` varchar(100) NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`tags` text,
	`url` varchar(500) NOT NULL,
	`featured` boolean DEFAULT false,
	`order` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `github_projects_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` varchar(100) NOT NULL,
	`title` varchar(255) NOT NULL,
	`tagline` varchar(255) NOT NULL,
	`company` varchar(100) NOT NULL,
	`description` text NOT NULL,
	`challenge` text,
	`solution` text,
	`outcome` text,
	`metrics` text,
	`technologies` text,
	`keyLearnings` text,
	`featured` boolean DEFAULT false,
	`order` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `projects_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `writing_posts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`excerpt` text NOT NULL,
	`content` text,
	`category` enum('all','product','ai','wins','podcasts') NOT NULL,
	`source` enum('linkedin','medium','newsletter') NOT NULL,
	`url` varchar(500) NOT NULL,
	`publishedAt` timestamp NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `writing_posts_id` PRIMARY KEY(`id`)
);
