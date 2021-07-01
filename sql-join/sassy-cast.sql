select "a"."firstName",
      "a"."lastName",
from "actors"
join "castMembers" using ("actorId")
join "films" using ("filmId")
where "films"."title" = 'Jersey Sassy';
