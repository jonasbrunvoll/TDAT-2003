DROP TABLE article;
DROP TABLE importancy;
DROP TABLE category;

CREATE TABLE category(
     id_cat INTEGER NOT NULL,
     name_cat VARCHAR(30),
     CONSTRAINT category_pk PRIMARY KEY (id_cat)
);

CREATE TABLE importancy(
   id_imp INTEGER NOT NULL,
   name_imp VARCHAR(30),
   CONSTRAINT importancy_pk primary key (id_imp)
);

CREATE TABLE article (
     id_article INTEGER NOT NULL AUTO_INCREMENT,
     title VARCHAR(50) NOT NULL,
     inngress TEXT(500) NOT NULL,
     text TEXT(500) NOT NULL,
     id_imp INTEGER NOT NULL,
     id_cat Integer NOT NULL,
     picture LONGTEXT,
     time datetime NOT NULL DEFAULT current_timestamp,
     CONSTRAINT article_pk PRIMARY KEY(id_article)
);


ALTER TABLE article
    ADD CONSTRAINT article._fk1 FOREIGN KEY(id_cat)
        REFERENCES category(id_cat);

ALTER TABLE article
    ADD CONSTRAINT article._fk2 FOREIGN KEY(id_imp)
        REFERENCES importancy(id_imp);


INSERT INTO category(id_cat, name_cat) VALUES (1, 'Sport');
INSERT INTO category(id_cat, name_cat) VALUES (2, 'Kultur');
INSERT INTO category(id_cat, name_cat) VALUES (3, 'Politikk');
INSERT INTO category(id_cat, name_cat) VALUES (4, 'Økonomi');

INSERT INTO importancy(id_imp, name_imp) VALUES (1, 'Viktig');
INSERT INTO importancy(id_imp, name_imp) VALUES (2, 'Uviktig');



