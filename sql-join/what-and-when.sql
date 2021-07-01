select "f"."releaseYear",
      "c"."name" as "category"
  from "films"
  join "filmCategory" using ("filmId")
  join "categories" as "ca" using ("categoryId")
  where "f"."title" = 'Boogie Amelie';
