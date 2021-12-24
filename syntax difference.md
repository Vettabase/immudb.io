# SQL syntax differences between immudb and PostgreSQL  

In this section, we discuss the following differences between immudb and PostgreSQL when creating tables via SQL. 

-  SQL syntax that works in both immudb and PostgreSQL.
-  SQL syntax that works in PostgreSQL but not in immudb.
-  Type of indexes supported in both PostgreSQL and immudb.
-  Type of PostgreSQL indexes not supported in immudb.    

##  Differences between immudb and PostgreSQL when creating tables via SQL

The following shows subtle differences between immudb and PostgreSQL:
 
### Double Quotes

In immudb, the `CREATE TABLE` command needs to be placed in between two double quotes as shown by the following command.

The command below creates a table with two columns: `name` and `location`. Data types include `INTEGER` type and `VARCHAR` type.

```
immuclient exec ""CREATE TABLE post_table ( name VARCHAR(60) PRIMARY KEY NOT NULL, location VARCHAR(40) NOT NULL UNIQUE);"
```


In PostgreSQL, the `CREATE` COMMAND can't execute successfully if placed between two double quotes as shown by the error message below. 

```
"CREATE TABLE post_table ( name VARCHAR(60) PRIMARY KEY NOT NULL, location VARCHAR(40) NOT NULL UNIQUE);"
```

```
"create table put_syntax ( name VARCHAR(60) PRIMARY KEY NOT NULL, location VARCHAR(40) NOT NULL UNIQUE);"
```

As shown by the `\dt` meta-command in PostgreSQL, the tables `post_table` and `put_syntax` are not present in the list of relations because the operation is not supported by PostgreSQL.

```
            List of relations
 Schema |    Name     | Type  |  Owner   
--------+-------------+-------+----------
 public | post_syntax | table | postgres
 public | uab_syntax  | table | postgres
(2 rows) 

```

Finally both immudb and PostgreSQL allows you to define the `IF EXISTS` option differently.   
PostgreSQL `IF EXISTS` option is placed between square brackets as shown below

```
CREATE TABLE [IF NOT EXISTS] post_table (name VARCHAR(60), location VARCHAR(56) );  
```

Whilst immudb does allow the `IF EXISTS` option to standalone without the square brackets.  

```
CREATE TABLE IF NOT EXISTS post_table (name VARCHAR(60), location VARCHAR(56) );
```

### Command Sensitivity

It is not possible to execute the `CREATE TABLE` command alternatively as `create table` command in immudb. It is not yet allowed. However, Postgresql supports both `CREATE TABLE` or `create table` commands.

## SQL syntax compatible with immudb and PostgreSQL

The following syntax is compatible with immudb and PostgreSQL as well:    
**NB**: immudb however expects you to embed SQL commands in between double-quotes and prepend it with the `exec` command.

### Insert values into a table  

```
INSERT INTO post_table (name, location)
    VALUES ('Dave’, ‘Accra’);  
```
```
SELECT name, location FROM people WHERE name='Dave'
```
```
SELECT id, name, salary FROM post_table   
```

### Update values into a table  

Although postgreSQL do not directly support the `UPSERT` command to update existing values/rows in a table, you can perform upsert-like operations with `INSERT ON CONFLICT` command.

**UPSERT syntax**

```
UPSERT INTO post_table(name, location) VALUES('Dave', 'London');
```

**INSERT ON CONFLICT syntax**   

```
INSERT INTO post_table (name, location) 
VALUES ('Dave', London)
ON CONFLICT (name) 
DO NOTHING;
```

## Querying 

Both immudb and PostgreSQL supports the following:   

- selecting all columns using the asterisk operator or using specific columns asshown below. 

```
SELECT * from post_table; 
```

```
SELECT name, location from post_table;
```  

- Filtering entries using the `WHERE` clause as shown below.  

```
SELECT name from post_table WHERE location = 'London'; 
```

- Ordering by a column value  

```
SELECT name, location from post_table ORDER BY name ASC;
```

- Join two tables with inner join 

```
SELECT * FROM post_table JOIN emp_table ON post_table.name = emp_table.name;
```

-  Filtering specific values with the Like operator  

Unlike POstgreSQL, immudb's LIKE operator relies on regexp syntax supported by the [regexp library](https://pkg.go.dev/regexp) in the go language. 

> A NOT prefix negates the value of the LIKE operator.

** immudb LIKE operator syntax **  

```
SELECT name FROM post_table WHERE name LIKE 'D'; 
```

** PostgreSQL LIKE operator syntax ** 

```
SELECT name FROM post_table WHERE name LIKE 'Dav%'; 
```

- Using the IN operator 

```
SELECT name from post_table WHERE name IN ('Dave'); 
```

> The NOT prefix operator negates the value of the IN operator as shown below:  

```
SELECT name FROM post_table WHERE name NOT IN ('Dave'); 
```

## Column/Table aliases   

- Column aliasing 

```
SELECT location as emp_loc FROM post_table; 
```

- Table aliasing 

```
SELECT location FROM post_table as pt
```

> Both immudb and PostgreSQL supports the `AS` keyword


## Aggregation  

Both immudb and PostgreSQL supports the following aggregation functions:  

- COUNT 
- SUM 
- MIN 
- MAX 
- AVG 

```
SELECT
    COUNT(*) AS c,
    SUM(age),
    MIN(age),
    MAX(age),
    AVG(age)
FROM post_table;
```

## Grouping results set using the GROUP BY clause 

```
SELECT name FROM post_table GROUP BY location; 
```

## Filtering grouped results with HAVING clause 

```
SELECT
    active,
    COUNT(*) as c,
    MIN(age),
    MAX(age)
FROM post_table
GROUP BY active 
HAVING COUNT(*) > 0
```

## Sub-queries

```
SELECT * FROM (
    SELECT name, location
    FROM post_table
    WHERE age < 30
) AS pt
INNER JOIN (
    SELECT * FROM customer_review
) AS r
    ON r.customerid = pt.id;
```

## Transactions 

```
BEGIN TRANSACTION;
    UPSERT INTO post_table (name, location)
    VALUES ('James', 'Berlin');

    INSERT INTO post_table (name, location)
    VALUES(David, Accra);
COMMIT;
```

```
BEGIN TRANSACTION;
    UPDATE post_table SET name = 'Cams' WHERE location = london;

    INSERT INTO post_table(name, location)
    VALUES(cust, mexico);
COMMIT;
```

> Both immudb and PostgreSQL support transaction rollback 


## SQL syntax compatible with PostgreSQL only

The following SQL syntax is not yet supported by immudb:   

```
UPDATE post_table SET name = 'Gave' WHERE name = 'Dave';
```
```
DELETE FROM post_table WHERE name = 'Jane’;
```
```
DROP TABLE post_table;   
```
```
ALTER TABLE post_table ADD COLUMN city varchar(30);
```
```
ALTER TABLE post_table DROP COLUMN location; 
```

>**NB**:  immudb does not yet support **ALTER**, **DROP** and **DELETE** commands. However
you can update values as well as insert tables using the **UPSERT** command in immudb.  
``` 
CREATE TABLE post_table ( name VARCHAR(60) PRIMARY KEY NOT NULL, location VARCHAR(40) NOT NULL UNIQUE);
```
```
create table post_table ( name VARCHAR(60) PRIMARY KEY NOT NULL, location VARCHAR(40) NOT NULL UNIQUE);
```

## Indexes supported by immudb and PostgreSQL

The table below shows indexes currently supported by immudb and PostgreSQL.

| Indexes      | immudb     | PostgreSQL     |
| :------------- | :----------: | -----------: |
|  B-tree       | Supported   | Supported    | 
| Hash          | Not Supported | Supported |
|GIST           | Not Supported | Supported |
| SP-GIST       | Not Supported | Supported |   
| GIN           | Not Supported | Supported |  
| BRIN          | Not Supported | Supported |

Both immudb and PostgreSQL supports the following:  

 - multi-column indexes   
 - unique indexes  














`


  
  

 
 
