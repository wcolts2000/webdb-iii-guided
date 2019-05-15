## Combining multiple tables with joins

SELECT Customers.CustomerName, Customers.Country, Orders.OrderId, Orders.OrderDate, Employees.FirstName, Employees.LastName
FROM Orders
INNER JOIN Customers ON Orders.CustomerId = Customers.CustomerId
INNER JOIN Employees ON Orders.EmployeeId = Employees.EmployeeId

## Concatinating Fields in the returned query

SELECT Customers.CustomerName,
Customers.Country,
Orders.OrderId,
Orders.OrderDate,
Employees.FirstName || ' ' || Employees.LastName AS EmployeeName
FROM Orders
INNER JOIN Customers ON Orders.CustomerId = Customers.CustomerId
INNER JOIN Employees ON Orders.EmployeeId = Employees.EmployeeId

## Using LEFT JOIN to grab columns

-- Note with a left join, the table that is directly after the FROM is the table that will be considered the LEFT table
-- we pick the columns we want from each table using dot notation
SELECT Customers.CustomerName,
Customers.Country,
Orders._ -- the _ meal all columns from orders
, Employees.FirstName || ' ' || Employees.LastName AS EmployeeName
FROM Customers
LEFT JOIN Orders ON Orders.CustomerId = Customers.CustomerId -- the left table is the first one mentioned after the from

LEFT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeId

## Aliasing example

SELECT c.CustomerName, c.Country, o.\*, (e.FirstName || ' ' || e.LastName) as SoldBy
FROM Customers AS c
LEFT JOIN Orders AS o ON o.CustomerId = c.CustomerId
LEFT JOIN Employees as e on o.EmployeeId = e.EmployeeId

## Aggregate function and pagination

--SELECT o.orderId, count(\*) as ItemsOrderedCount
--FROM Orders AS o
--INNER JOIN OrderDetails AS od ON o.orderId = od.orderId
--GROUP BY o.orderId -- this goes before the order by and after and WHERE, order matters
--ORDER BY ItemsOrderedCount desc

-- to only show the top 5 orders by number of items ordered as the next line
--limit 5 -- this restricts the amount of returned fields in the query

-- top 5 selling products based on the number of items sold---include the ProductName and the number of items sold
-- SELECT p.ProductName, COUNT(\*) AS Sold
-- FROM Products as p
-- INNER JOIN OrderDetails AS od ON p.ProductId = od.ProductId
-- GROUP BY ProductName
-- ORDER BY Sold DESC
-- LIMIT 5

SELECT p.ProductName, sum(od.Quantity \* p.Price) AS Revenue
FROM Products AS p
INNER JOIN OrderDetails AS od ON p.ProductId = od.ProductId
GROUP BY ProductName
ORDER BY Revenue DESC
LIMIT 5 -- thisdenotes how many rows will be returned
OFFSET 5 -- this denotes how many rows will be skipped

## Referencing null values

SELECT \*
FROM customers AS c
LEFT JOIN orders AS o ON c.customerid = o.customerid
WHERE o.orderid IS null -- (IS NOT) also
