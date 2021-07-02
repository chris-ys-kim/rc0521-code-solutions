select "line1",
      "c"."name" as "city",
      "a"."district",
      "co"."name" as "country"
from "addresses"
join "cities" as "ci" using ("cityId")
join "countires" as "co" using ("countryId");
