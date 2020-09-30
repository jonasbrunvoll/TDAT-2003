DROP TABLE IF EXISTS article;
DROP TABLE IF EXISTS importancy;
DROP TABLE IF EXISTS category;

CREATE TABLE category(
     id_cat INTEGER NOT NULL,
     name_cat VARCHAR(30),
     CONSTRAINT category_pk PRIMARY KEY (id_cat)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE importancy(
     id_imp INTEGER NOT NULL,
     name_imp VARCHAR(30),
     CONSTRAINT importancy_pk primary key (id_imp)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE article (
     id_article INTEGER NOT NULL AUTO_INCREMENT,
     title VARCHAR(50) NOT NULL,
     inngress TEXT(500) NOT NULL,
     text TEXT(500) NOT NULL,
     id_imp INTEGER NOT NULL,
     id_cat Integer NOT NULL,
     picture LONGTEXT,
     time DATE,
     CONSTRAINT article_pk PRIMARY KEY(id_article)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;


