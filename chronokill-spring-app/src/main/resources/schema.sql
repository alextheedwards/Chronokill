CREATE TABLE `users`(
    userID int auto_increment,
    username varchar(255),
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    first_name varchar(255),
    last_name varchar(255),
    primary key (userID)
);

CREATE TABLE `reports`(
    reportID int auto_increment,
    userID int,
    content VARCHAR(255) NOT NULL, -- Needs changed to blob
    primary key(reportID)
);

CREATE TABLE `settings`(
    userID int NOT NULL,
    master_vol int,
    voice_vol int,
    music_vol int,
    ambient_vol int,
    font_size int,
    primary key(userID)
);

ALTER TABLE `reports`
    ADD FOREIGN KEY (userID) REFERENCES `users` (userID);

ALTER TABLE `settings`
    ADD CONSTRAINT FK_userID FOREIGN KEY (userID)
        REFERENCES `users` (userID);