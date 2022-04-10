BEGIN; 

DROP TABLE IF EXISTS products CASCADE; 

CREATE TABLE products(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(200) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

);


INSERT INTO products (name, price, description, image) VALUES 
('ibrahim', 123, 'great shoes','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'),
('mamamia', 69 , 'nice shoes','https://i.ibb.co/QcHvYvf/back-Ground-header.jpg'),
('mamamia', 69 , 'luxury shoes','https://i.ibb.co/QcHvYvf/back-Ground-header.jpg'),
('mamamia', 69 , 'lovely shoes','https://i.ibb.co/QcHvYvf/back-Ground-header.jpg');


COMMIT;