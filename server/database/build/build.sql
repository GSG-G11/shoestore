BEGIN; 

DROP TABLE IF EXISTS products CASCADE; 

CREATE TABLE products(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(200) NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT
);


INSERT INTO products (name, price, image) VALUES 
('ibrahim', 123, 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'),
('mamamia', 69 , 'https://i.ibb.co/QcHvYvf/back-Ground-header.jpg'),
('mamamia', 69 , 'https://i.ibb.co/QcHvYvf/back-Ground-header.jpg'),
('mamamia', 69 , 'https://i.ibb.co/QcHvYvf/back-Ground-header.jpg');


COMMIT;