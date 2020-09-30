INSERT INTO category(id_cat, name_cat) VALUES (1, 'Sport');
INSERT INTO importancy(id_imp, name_imp) VALUES (1, 'Viktig');
INSERT INTO article (id_article, title, inngress,  text, id_imp, id_cat, picture, time)
VALUES (DEFAULT, 'Hei bloggen', 'Inngress', 'Dette er en test', 1, 2,'bilde', CURRENT_TIME);