select "firstName",
      "lastName"
from "customers"
join "inventory" using ("inventoryId")
join "rentals" using ("customerId")
join "films" using ("filmId")
where "films"."title" = 'Magic Mallrats';
